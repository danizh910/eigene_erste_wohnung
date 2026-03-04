'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { defaultSection, sectionItems } from '@/lib/section-config';

type SectionVisibility = Record<string, boolean>;

const buildDefaultVisibility = (): SectionVisibility =>
  sectionItems.reduce((acc, item) => {
    acc[item.id] = true;
    return acc;
  }, {} as SectionVisibility);

export function useSectionVisibility() {
  const [visibility, setVisibility] = useState<SectionVisibility>(buildDefaultVisibility);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadVisibility = async () => {
      try {
        const response = await fetch('/api/content', { cache: 'no-store' });

        if (!response.ok) {
          setVisibility(buildDefaultVisibility());
          return;
        }

        const payload = (await response.json()) as { sectionVisibility?: SectionVisibility };
        const withDefaults = { ...buildDefaultVisibility(), ...(payload.sectionVisibility || {}) };
        setVisibility(withDefaults);
      } catch {
        setVisibility(buildDefaultVisibility());
      } finally {
        setIsLoaded(true);
      }
    };

    void loadVisibility();
  }, []);

  const setSectionVisibility = useCallback(async (sectionId: string, isVisible: boolean) => {
    const next = { ...visibility, [sectionId]: isVisible };
    setVisibility(next);

    try {
      await fetch(`/api/content/${sectionId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isVisible }),
      });
    } catch {
      // Optimistic update bleibt bestehen, bis erneut geladen wird.
    }
  }, [visibility]);

  const visibleSectionIds = useMemo(
    () => sectionItems.filter((item) => visibility[item.id] !== false).map((item) => item.id),
    [visibility],
  );

  const firstVisibleSection = visibleSectionIds[0] || defaultSection;

  const isSectionVisible = useCallback(
    (sectionId: string) => visibility[sectionId] !== false,
    [visibility],
  );

  return {
    visibility,
    isLoaded,
    setSectionVisibility,
    visibleSectionIds,
    firstVisibleSection,
    isSectionVisible,
  };
}
