'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  defaultSection,
  sectionItems,
  sectionVisibilityStorageKey,
} from '@/lib/section-config';

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
    const raw = window.localStorage.getItem(sectionVisibilityStorageKey);

    if (!raw) {
      setIsLoaded(true);
      return;
    }

    try {
      const parsed = JSON.parse(raw) as SectionVisibility;
      const withDefaults = { ...buildDefaultVisibility(), ...parsed };
      setVisibility(withDefaults);
    } catch {
      setVisibility(buildDefaultVisibility());
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const persistVisibility = useCallback((nextVisibility: SectionVisibility) => {
    setVisibility(nextVisibility);
    window.localStorage.setItem(sectionVisibilityStorageKey, JSON.stringify(nextVisibility));
  }, []);

  const setSectionVisibility = useCallback(
    (sectionId: string, isVisible: boolean) => {
      const next = { ...visibility, [sectionId]: isVisible };
      persistVisibility(next);
    },
    [persistVisibility, visibility]
  );

  const visibleSectionIds = useMemo(
    () => sectionItems.filter((item) => visibility[item.id] !== false).map((item) => item.id),
    [visibility]
  );

  const firstVisibleSection = visibleSectionIds[0] || defaultSection;

  const isSectionVisible = useCallback(
    (sectionId: string) => visibility[sectionId] !== false,
    [visibility]
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
