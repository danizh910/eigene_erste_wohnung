'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { sectionItems } from '@/lib/section-config';
import { defaultSiteContent } from '@/lib/default-content';
import { useSectionVisibility } from '@/hooks/use-section-visibility';

const ADMIN_CODE = '123456';

type SiteContentResponse = {
  thinkingNotes: Record<string, string[]>;
};

export default function AdminPage() {
  const [code, setCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState('a1');
  const [newSectionId, setNewSectionId] = useState('');
  const [notesText, setNotesText] = useState('');
  const [status, setStatus] = useState('');
  const [content, setContent] = useState<Record<string, string[]>>(defaultSiteContent.thinkingNotes);
  const { visibility, setSectionVisibility, visibleSectionIds } = useSectionVisibility();

  const visibleCount = useMemo(() => visibleSectionIds.length, [visibleSectionIds]);

  const sectionOptions = useMemo(() => {
    const known = sectionItems.map((item) => ({ id: item.id, label: `${item.label} (${item.id})` }));
    const customIds = Object.keys(content).filter((id) => !sectionItems.some((item) => item.id === id));

    return [
      ...known,
      ...customIds.map((id) => ({ id, label: `Eigene Notiz (${id})` })),
    ];
  }, [content]);

  const loadSectionContent = (sectionId: string, allContent: Record<string, string[]>) => {
    const notes = allContent[sectionId] || [];
    setSelectedSectionId(sectionId);
    setNotesText(notes.join('\n'));
  };

  const loadContent = async (sectionId = selectedSectionId) => {
    const response = await fetch('/api/content', { cache: 'no-store' });

    if (!response.ok) {
      throw new Error('Inhalt konnte nicht geladen werden.');
    }

    const payload = (await response.json()) as SiteContentResponse;
    const nextContent = payload.thinkingNotes || defaultSiteContent.thinkingNotes;
    setContent(nextContent);
    loadSectionContent(sectionId, nextContent);
  };

  const handleUnlock = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code !== ADMIN_CODE) {
      setError('Falscher Code. Bitte versuche es erneut.');
      return;
    }

    try {
      await loadContent();
      setIsUnlocked(true);
      setError('');
    } catch {
      setError('Admin-Bereich konnte nicht geladen werden.');
    }
  };

  const handleVisibilityChange = (sectionId: string, nextChecked: boolean) => {
    if (!nextChecked && visibleCount <= 1 && visibility[sectionId] !== false) {
      return;
    }

    setSectionVisibility(sectionId, nextChecked);
  };

  const handleSectionSwitch = (sectionId: string) => {
    loadSectionContent(sectionId, content);
    setStatus('');
  };

  const handleSave = async (sectionId: string) => {
    const notes = notesText
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    const response = await fetch(`/api/content/${sectionId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ notes }),
    });

    if (!response.ok) {
      setStatus('Speichern fehlgeschlagen.');
      return;
    }

    await loadContent(sectionId);
    setStatus('Gespeichert. Frontend nutzt jetzt die neuen Inhalte.');
  };

  const handleDelete = async (sectionId: string) => {
    const response = await fetch(`/api/content/${sectionId}`, { method: 'DELETE' });

    if (!response.ok) {
      setStatus('Löschen fehlgeschlagen.');
      return;
    }

    await loadContent('a1');
    setStatus('Eintrag gelöscht.');
  };

  const handleCreateSection = async () => {
    const sectionId = newSectionId.trim();

    if (!sectionId) {
      setStatus('Bitte zuerst eine Section-ID angeben.');
      return;
    }

    await handleSave(sectionId);
    setNewSectionId('');
    setSelectedSectionId(sectionId);
  };

  if (!isUnlocked) {
    return (
      <main className="mx-auto flex min-h-svh w-full max-w-md items-center justify-center p-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Admin Bereich</CardTitle>
            <CardDescription>Bitte gib den Admin-Code ein, um Seiten ein- oder auszublenden.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUnlock} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-code">Code</Label>
                <Input
                  id="admin-code"
                  type="password"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  placeholder="Admin-Code"
                />
              </div>
              {error ? <p className="text-sm text-destructive">{error}</p> : null}
              <Button type="submit" className="w-full">
                Freischalten
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">Zurück zur Startseite</Link>
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Seitenverwaltung</CardTitle>
          <CardDescription>
            Aktiviere oder deaktiviere Unterseiten, die normale Besucher in der Navigation sehen sollen.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {sectionItems.map((item) => {
            const isVisible = visibility[item.id] !== false;
            const disableSwitch = isVisible && visibleCount <= 1;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-md border px-3 py-2"
              >
                <p className={item.isSubItem ? 'pl-4 text-sm text-muted-foreground' : 'text-sm font-medium'}>
                  {item.label}
                </p>
                <Switch
                  checked={isVisible}
                  onCheckedChange={(checked) => handleVisibilityChange(item.id, checked)}
                  disabled={disableSwitch}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inhalte bearbeiten (JSON auf dem Server)</CardTitle>
          <CardDescription>
            Hier kannst du Denkweise-Notizen pro Section erfassen, ändern oder löschen. Änderungen erscheinen im Frontend nach dem Neuladen.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="section-select">Section wählen</Label>
            <select
              id="section-select"
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              value={selectedSectionId}
              onChange={(event) => handleSectionSwitch(event.target.value)}
            >
              {sectionOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notizen (eine Zeile = ein Bulletpoint)</Label>
            <Textarea
              id="notes"
              value={notesText}
              onChange={(event) => setNotesText(event.target.value)}
              rows={8}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button onClick={() => handleSave(selectedSectionId)}>Speichern</Button>
            <Button variant="destructive" onClick={() => handleDelete(selectedSectionId)}>
              Eintrag löschen
            </Button>
          </div>

          <div className="space-y-2 border-t pt-4">
            <Label htmlFor="new-section-id">Neue Section-ID anlegen</Label>
            <div className="flex gap-2">
              <Input
                id="new-section-id"
                value={newSectionId}
                onChange={(event) => setNewSectionId(event.target.value)}
                placeholder="z. B. d1"
              />
              <Button variant="outline" onClick={handleCreateSection}>
                Erstellen & speichern
              </Button>
            </div>
          </div>

          {status ? <p className="text-sm text-muted-foreground">{status}</p> : null}

          <Button asChild variant="outline" className="w-full">
            <Link href="/">Zurück zur Startseite</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
