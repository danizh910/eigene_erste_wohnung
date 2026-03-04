'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import baseQuestsData from '@/lib/base-quests.json';

type SettingType = 'indoor' | 'outdoor' | 'both';
type GroupMode = 'solo' | 'group' | 'both';
type HistoryStatus = 'done' | 'skip';
type Tab = 'roulette' | 'history' | 'all';

type Quest = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  duration_min: number;
  duration_max: number;
  setting: SettingType;
  group_mode: GroupMode;
  adventure_level: number;
  equipment: string[];
  instructions: string[];
  description?: string;
};

type QuestHistoryItem = {
  quest_id: string;
  status: HistoryStatus;
  timestamp: string;
};

type Settings = {
  exclude_done_from_random: boolean;
  show_done_as_grey: boolean;
};

type QuestFilters = {
  category: string;
  durationBucket: 'all' | 'short' | 'medium' | 'long';
  setting: 'all' | SettingType;
  group_mode: 'all' | GroupMode;
  tags: string[];
  include_done: boolean;
};

type QuestEdits = Record<string, Partial<Quest>>;

const SETTINGS_KEY = 'settings';
const HISTORY_KEY = 'quest_history';
const CUSTOM_QUESTS_KEY = 'quests_custom';
const QUEST_EDITS_KEY = 'quests_edits';
const QUESTS_DELETED_KEY = 'quests_deleted';

const defaultSettings: Settings = {
  exclude_done_from_random: true,
  show_done_as_grey: true,
};

const defaultFilters: QuestFilters = {
  category: 'all',
  durationBucket: 'all',
  setting: 'all',
  group_mode: 'all',
  tags: [],
  include_done: false,
};

const colors = ['#1d4ed8', '#0f766e', '#7c3aed', '#be185d', '#d97706', '#15803d', '#0ea5e9', '#ef4444'];

const parseJson = <T,>(value: string | null, fallback: T): T => {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
};

const durationMatches = (quest: Quest, bucket: QuestFilters['durationBucket']) => {
  if (bucket === 'all') return true;
  const avg = (quest.duration_min + quest.duration_max) / 2;
  if (bucket === 'short') return avg <= 25;
  if (bucket === 'medium') return avg > 25 && avg <= 60;
  return avg > 60;
};

const getDoneSet = (history: QuestHistoryItem[]) => {
  const done = new Set<string>();
  history.forEach((entry) => {
    if (entry.status === 'done') {
      done.add(entry.quest_id);
    }
  });
  return done;
};

const mergeQuests = (baseQuests: Quest[], customQuests: Quest[], edits: QuestEdits, deletedIds: string[]) => {
  const deletedSet = new Set(deletedIds);
  const byId = new Map<string, Quest>();

  [...baseQuests, ...customQuests].forEach((quest) => {
    if (deletedSet.has(quest.id)) return;
    byId.set(quest.id, { ...quest, ...(edits[quest.id] ?? {}) });
  });

  return Array.from(byId.values());
};

const makeWheelGradient = (count: number) => {
  if (count <= 0) return 'transparent';
  const segment = 360 / count;
  const stops: string[] = [];

  for (let i = 0; i < count; i += 1) {
    const start = i * segment;
    const end = start + segment;
    const color = colors[i % colors.length];
    stops.push(`${color} ${start}deg ${end}deg`);
  }

  return `conic-gradient(${stops.join(', ')})`;
};

export default function QuestRouletteApp() {
  const [activeTab, setActiveTab] = useState<Tab>('roulette');
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [history, setHistory] = useState<QuestHistoryItem[]>([]);
  const [customQuests, setCustomQuests] = useState<Quest[]>([]);
  const [questEdits, setQuestEdits] = useState<QuestEdits>({});
  const [deletedQuestIds, setDeletedQuestIds] = useState<string[]>([]);
  const [filters, setFilters] = useState<QuestFilters>(defaultFilters);
  const [search, setSearch] = useState('');
  const [rouletteRotation, setRouletteRotation] = useState(0);
  const [spinDurationMs, setSpinDurationMs] = useState(4200);
  const [spinning, setSpinning] = useState(false);
  const [spinPool, setSpinPool] = useState<Quest[]>([]);
  const [selectedQuestId, setSelectedQuestId] = useState<string | null>(null);
  const [historyFilter, setHistoryFilter] = useState<'all' | HistoryStatus>('all');
  const [editingQuestId, setEditingQuestId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState<Partial<Quest>>({});

  const rotationRef = useRef(0);

  const baseQuests = baseQuestsData as Quest[];

  useEffect(() => {
    rotationRef.current = rouletteRotation;
  }, [rouletteRotation]);

  useEffect(() => {
    const savedSettings = parseJson<Settings>(window.localStorage.getItem(SETTINGS_KEY), defaultSettings);
    const normalizedSettings: Settings = {
      exclude_done_from_random: savedSettings.exclude_done_from_random ?? true,
      show_done_as_grey: savedSettings.show_done_as_grey ?? true,
    };

    setSettings(normalizedSettings);
    setHistory(parseJson<QuestHistoryItem[]>(window.localStorage.getItem(HISTORY_KEY), []));
    setCustomQuests(parseJson<Quest[]>(window.localStorage.getItem(CUSTOM_QUESTS_KEY), []));
    setQuestEdits(parseJson<QuestEdits>(window.localStorage.getItem(QUEST_EDITS_KEY), {}));
    setDeletedQuestIds(parseJson<string[]>(window.localStorage.getItem(QUESTS_DELETED_KEY), []));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    window.localStorage.setItem(QUEST_EDITS_KEY, JSON.stringify(questEdits));
  }, [questEdits]);

  useEffect(() => {
    window.localStorage.setItem(QUESTS_DELETED_KEY, JSON.stringify(deletedQuestIds));
  }, [deletedQuestIds]);

  useEffect(() => {
    if (customQuests.length > 0) {
      window.localStorage.setItem(CUSTOM_QUESTS_KEY, JSON.stringify(customQuests));
    }
  }, [customQuests]);

  const allQuests = useMemo(
    () => mergeQuests(baseQuests, customQuests, questEdits, deletedQuestIds),
    [baseQuests, customQuests, questEdits, deletedQuestIds]
  );

  const doneSet = useMemo(() => getDoneSet(history), [history]);

  const filterOptions = useMemo(() => {
    const categories = Array.from(new Set(allQuests.map((quest) => quest.category))).sort();
    const tags = Array.from(new Set(allQuests.flatMap((quest) => quest.tags))).sort();
    return { categories, tags };
  }, [allQuests]);

  const filteredPool = useMemo(() => {
    let pool = allQuests.filter((quest) => {
      if (filters.category !== 'all' && quest.category !== filters.category) return false;
      if (!durationMatches(quest, filters.durationBucket)) return false;
      if (filters.setting !== 'all' && quest.setting !== filters.setting && quest.setting !== 'both') return false;
      if (filters.group_mode !== 'all' && quest.group_mode !== filters.group_mode && quest.group_mode !== 'both') return false;
      if (filters.tags.length > 0 && !filters.tags.every((tag) => quest.tags.includes(tag))) return false;
      return true;
    });

    const includeDone = filters.include_done || !settings.exclude_done_from_random;
    if (!includeDone) {
      pool = pool.filter((quest) => !doneSet.has(quest.id));
    }

    return pool;
  }, [allQuests, filters, doneSet, settings.exclude_done_from_random]);

  const allQuestsWithSearch = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    if (!lowerSearch) return allQuests;
    return allQuests.filter((quest) => {
      const tagText = quest.tags.join(' ').toLowerCase();
      return quest.title.toLowerCase().includes(lowerSearch) || tagText.includes(lowerSearch);
    });
  }, [allQuests, search]);

  const selectedQuest = useMemo(
    () => allQuests.find((quest) => quest.id === selectedQuestId) ?? null,
    [allQuests, selectedQuestId]
  );

  const historyWithQuest = useMemo(() => {
    const byId = new Map(allQuests.map((quest) => [quest.id, quest]));
    return [...history]
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .filter((entry) => (historyFilter === 'all' ? true : entry.status === historyFilter))
      .map((entry) => ({
        ...entry,
        title: byId.get(entry.quest_id)?.title ?? `Unbekannte Quest (${entry.quest_id})`,
      }));
  }, [allQuests, history, historyFilter]);

  const wheelGradient = useMemo(() => makeWheelGradient(filteredPool.length), [filteredPool.length]);

  const pushHistory = (status: HistoryStatus, questId?: string) => {
    const id = questId ?? selectedQuestId;
    if (!id) return;
    setHistory((prev) => [
      ...prev,
      {
        quest_id: id,
        status,
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  const startSpin = () => {
    if (spinning || filteredPool.length === 0) return;
    setSelectedQuestId(null);
    setSpinPool(filteredPool);
    setSpinning(true);
    const duration = 3000 + Math.floor(Math.random() * 2000);
    const randomTurn = Math.random() * 360;
    const rotationStep = 2160 + randomTurn;
    setSpinDurationMs(duration);
    setRouletteRotation((prev) => prev + rotationStep);
  };

  const onWheelTransitionEnd = () => {
    if (!spinning || spinPool.length === 0) return;

    const segmentAngle = 360 / spinPool.length;
    const rotation = rotationRef.current;
    const normalized = ((360 - (rotation % 360)) + 360) % 360;
    const winnerIndex = Math.floor(normalized / segmentAngle) % spinPool.length;
    const winner = spinPool[winnerIndex];

    setSelectedQuestId(winner?.id ?? null);
    setSpinning(false);
  };

  const toggleTag = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter((item) => item !== tag) : [...prev.tags, tag],
    }));
  };

  const startEdit = (quest: Quest) => {
    setEditingQuestId(quest.id);
    setEditDraft({
      title: quest.title,
      category: quest.category,
      tags: quest.tags,
      description: quest.description,
      duration_min: quest.duration_min,
      duration_max: quest.duration_max,
    });
  };

  const saveEdit = () => {
    if (!editingQuestId) return;
    setQuestEdits((prev) => ({
      ...prev,
      [editingQuestId]: {
        ...prev[editingQuestId],
        ...editDraft,
        tags: (editDraft.tags ?? []).filter(Boolean),
      },
    }));
    setEditingQuestId(null);
    setEditDraft({});
  };

  return (
    <main className="mx-auto w-full max-w-6xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Quest Roulette Picker</h1>
      <p className="mb-6 text-sm text-muted-foreground">Frontend-only Roulette mit lokalen Daten (localStorage).</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {(['roulette', 'history', 'all'] as Tab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-md border px-3 py-2 text-sm ${activeTab === tab ? 'bg-primary text-primary-foreground' : ''}`}
          >
            {tab === 'roulette' ? 'Roulette' : tab === 'history' ? 'History' : 'All Quests'}
          </button>
        ))}
      </div>

      {activeTab === 'roulette' && (
        <section className="space-y-6">
          <div className="rounded-lg border p-4">
            <h2 className="mb-3 text-lg font-semibold">Filter</h2>
            <div className="grid gap-3 md:grid-cols-3">
              <label className="flex flex-col gap-1 text-sm">
                Kategorie
                <select
                  value={filters.category}
                  onChange={(event) => setFilters((prev) => ({ ...prev, category: event.target.value }))}
                  className="rounded border p-2"
                >
                  <option value="all">Alle</option>
                  {filterOptions.categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1 text-sm">
                Dauer
                <select
                  value={filters.durationBucket}
                  onChange={(event) =>
                    setFilters((prev) => ({ ...prev, durationBucket: event.target.value as QuestFilters['durationBucket'] }))
                  }
                  className="rounded border p-2"
                >
                  <option value="all">Alle</option>
                  <option value="short">Kurz (≤25 min)</option>
                  <option value="medium">Mittel (26-60 min)</option>
                  <option value="long">Lang (&gt;60 min)</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 text-sm">
                Setting
                <select
                  value={filters.setting}
                  onChange={(event) => setFilters((prev) => ({ ...prev, setting: event.target.value as QuestFilters['setting'] }))}
                  className="rounded border p-2"
                >
                  <option value="all">Alle</option>
                  <option value="indoor">Indoor</option>
                  <option value="outdoor">Outdoor</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 text-sm">
                Group Mode
                <select
                  value={filters.group_mode}
                  onChange={(event) =>
                    setFilters((prev) => ({ ...prev, group_mode: event.target.value as QuestFilters['group_mode'] }))
                  }
                  className="rounded border p-2"
                >
                  <option value="all">Alle</option>
                  <option value="solo">Solo</option>
                  <option value="group">Group</option>
                </select>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={filters.include_done}
                  onChange={(event) => setFilters((prev) => ({ ...prev, include_done: event.target.checked }))}
                />
                Done Quests einschließen
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={settings.exclude_done_from_random}
                  onChange={(event) =>
                    setSettings((prev) => ({ ...prev, exclude_done_from_random: event.target.checked }))
                  }
                />
                Done standardmäßig ausschließen
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={settings.show_done_as_grey}
                  onChange={(event) => setSettings((prev) => ({ ...prev, show_done_as_grey: event.target.checked }))}
                />
                Done in Listen grau markieren
              </label>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {filterOptions.tags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full border px-2 py-1 text-xs ${filters.tags.includes(tag) ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  #{tag}
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm">Pool Treffer: {filteredPool.length}</p>
          </div>

          {filteredPool.length === 0 ? (
            <div className="rounded-lg border border-dashed p-6 text-center text-sm">
              Pool leer: Filter lockern oder Done einschliessen.
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="relative mt-4">
                <div className="mx-auto h-0 w-0 border-x-[12px] border-b-[18px] border-x-transparent border-b-red-500" />
                <div
                  className="relative mt-2 h-[320px] w-[320px] rounded-full border-4 border-slate-900"
                  style={{
                    background: wheelGradient,
                    transform: `rotate(${rouletteRotation}deg)`,
                    transitionProperty: 'transform',
                    transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
                    transitionDuration: `${spinDurationMs}ms`,
                  }}
                  onTransitionEnd={onWheelTransitionEnd}
                >
                  {filteredPool.map((quest, index) => {
                    const angle = (360 / filteredPool.length) * index + 360 / filteredPool.length / 2;
                    const radius = 125;
                    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
                    return (
                      <span
                        key={quest.id}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-white/85 px-1 text-[10px]"
                        style={{ transform: `translate(${x}px, ${y}px) rotate(${angle}deg)` }}
                      >
                        {index + 1}
                      </span>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={startSpin}
                disabled={spinning || filteredPool.length === 0}
                className="rounded-md bg-primary px-5 py-2 text-primary-foreground disabled:opacity-50"
              >
                {spinning ? 'Spinning...' : 'Spin'}
              </button>
            </div>
          )}

          {selectedQuest && (
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-semibold">Winner: {selectedQuest.title}</h3>
              <p className="mb-2 text-sm text-muted-foreground">Kategorie: {selectedQuest.category}</p>
              <ul className="mb-3 list-disc pl-5 text-sm">
                {selectedQuest.instructions.slice(0, 3).map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="rounded border px-3 py-1" onClick={() => pushHistory('done')}>
                  Done
                </button>
                <button type="button" className="rounded border px-3 py-1" onClick={() => pushHistory('skip')}>
                  Skip
                </button>
                <button type="button" className="rounded border px-3 py-1" onClick={() => setActiveTab('all')}>
                  Save/Edit
                </button>
                <button type="button" className="rounded border px-3 py-1" onClick={startSpin}>
                  Spin nochmal
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {activeTab === 'history' && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <label className="text-sm">Status</label>
            <select
              className="rounded border p-2 text-sm"
              value={historyFilter}
              onChange={(event) => setHistoryFilter(event.target.value as 'all' | HistoryStatus)}
            >
              <option value="all">all</option>
              <option value="done">done</option>
              <option value="skip">skip</option>
            </select>
          </div>
          <ul className="space-y-2">
            {historyWithQuest.length === 0 && <li className="rounded border p-3 text-sm">Noch keine Einträge.</li>}
            {historyWithQuest.map((entry) => (
              <li key={`${entry.quest_id}-${entry.timestamp}`} className="rounded border p-3 text-sm">
                <div className="flex justify-between gap-2">
                  <span className="font-medium">{entry.title}</span>
                  <span>{new Date(entry.timestamp).toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground">Status: {entry.status}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {activeTab === 'all' && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full max-w-md rounded border p-2 text-sm"
              placeholder="Suche nach Titel oder Tags"
            />
          </div>

          {editingQuestId && (
            <div className="rounded-lg border p-4">
              <h3 className="mb-3 font-semibold">Quest bearbeiten</h3>
              <div className="grid gap-2 md:grid-cols-2">
                <input
                  className="rounded border p-2 text-sm"
                  value={editDraft.title ?? ''}
                  onChange={(event) => setEditDraft((prev) => ({ ...prev, title: event.target.value }))}
                  placeholder="Titel"
                />
                <input
                  className="rounded border p-2 text-sm"
                  value={editDraft.category ?? ''}
                  onChange={(event) => setEditDraft((prev) => ({ ...prev, category: event.target.value }))}
                  placeholder="Kategorie"
                />
                <input
                  className="rounded border p-2 text-sm"
                  value={(editDraft.tags ?? []).join(', ')}
                  onChange={(event) =>
                    setEditDraft((prev) => ({
                      ...prev,
                      tags: event.target.value
                        .split(',')
                        .map((tag) => tag.trim())
                        .filter(Boolean),
                    }))
                  }
                  placeholder="Tags (kommagetrennt)"
                />
                <input
                  className="rounded border p-2 text-sm"
                  value={editDraft.description ?? ''}
                  onChange={(event) => setEditDraft((prev) => ({ ...prev, description: event.target.value }))}
                  placeholder="Beschreibung"
                />
              </div>
              <div className="mt-3 flex gap-2">
                <button type="button" className="rounded border px-3 py-1" onClick={saveEdit}>
                  Speichern
                </button>
                <button type="button" className="rounded border px-3 py-1" onClick={() => setEditingQuestId(null)}>
                  Abbrechen
                </button>
              </div>
            </div>
          )}

          <ul className="space-y-2">
            {allQuestsWithSearch.map((quest) => {
              const isDone = doneSet.has(quest.id);
              return (
                <li
                  key={quest.id}
                  className={`rounded border p-3 text-sm ${isDone && settings.show_done_as_grey ? 'bg-slate-100 text-slate-500' : ''}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">{quest.title}</p>
                      <p className="text-xs">{quest.category}</p>
                      <p className="text-xs">Tags: {quest.tags.join(', ')}</p>
                    </div>
                    <div className="flex gap-2">
                      <button type="button" className="rounded border px-2 py-1" onClick={() => startEdit(quest)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        className="rounded border px-2 py-1"
                        onClick={() => setDeletedQuestIds((prev) => [...new Set([...prev, quest.id])])}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
  );
}
