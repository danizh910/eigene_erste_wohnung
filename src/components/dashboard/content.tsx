'use client';

import { useEffect, useMemo, useState } from 'react';

import Situationsanalyse from './a1-situationsanalyse';
import A1IstAnalyse from './a1-ist-analyse';
import A1StakeholderMap from './a1-stakeholder-map';
import A1CustomerJourney from './a1-customer-journey';
import A1Zieldefinition from './a1-zieldefinition';
import Erfolgskriterien from './b1-erfolgskriterien';
import B1ExecutiveSummary from './b1-executive-summary';
import B1HmwSmart from './b1-hmw-smart';
import B1ErfolgskriterienReview from './b1-erfolgskriterien-review';
import B1TestEvidenz from './b1-test-evidenz';
import CIdeationOverview from './c-ideation-overview';
import C1IdeationDokumentation from './c1-ideation-dokumentation';
import C2TeamworkReflexion from './c2-teamwork-reflexion';
import C3PriorisierungEntscheid from './c3-priorisierung-entscheid';
import Placeholder from './placeholder';
import { useSectionVisibility } from '@/hooks/use-section-visibility';
import { defaultSiteContent } from '@/lib/default-content';

const sections: { [key: string]: React.ComponentType<{ title?: string }> } = {
  a1: Situationsanalyse,
  'a1-ist-analyse': A1IstAnalyse,
  'a1-stakeholder-map': A1StakeholderMap,
  'a1-customer-journey': A1CustomerJourney,
  'a1-zieldefinition': A1Zieldefinition,
  b1: Erfolgskriterien,
  'b1-executive-summary': B1ExecutiveSummary,
  'b1-hmw-smart': B1HmwSmart,
  'b1-erfolgskriterien-review': B1ErfolgskriterienReview,
  'b1-test-evidenz': B1TestEvidenz,
  'b1-export': B1TestEvidenz,
  c: CIdeationOverview,
  c1: CIdeationOverview,
  'c1-ideation-dokumentation': C1IdeationDokumentation,
  'c2-teamwork-reflexion': C2TeamworkReflexion,
  'c3-priorisierung-entscheid': C3PriorisierungEntscheid,
  d1: () => <Placeholder title="D1-D2: Prototyping" />,
  e1: () => <Placeholder title="E1-F1: Testing & Bewertung" />,
  h1: () => <Placeholder title="H1: Pitch" />,
};

type DashboardContentProps = {
  section: string;
};

export default function DashboardContent({ section }: DashboardContentProps) {
  const { isLoaded, isSectionVisible, firstVisibleSection } = useSectionVisibility();
  const [thinkingNotes, setThinkingNotes] = useState(defaultSiteContent.thinkingNotes);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/api/content', { cache: 'no-store' });

        if (!response.ok) {
          return;
        }

        const content = (await response.json()) as { thinkingNotes?: Record<string, string[]> };

        if (content?.thinkingNotes && typeof content.thinkingNotes === 'object') {
          setThinkingNotes(content.thinkingNotes);
        }
      } catch {
        // Bei Fehlern bleibt der Default-Inhalt aktiv.
      }
    };

    void loadContent();
  }, []);

  const resolvedSection = isLoaded && !isSectionVisible(section) ? firstVisibleSection : section;
  const Component = sections[resolvedSection] || sections.a1;

  const notes = useMemo(() => {
    return thinkingNotes[resolvedSection] || defaultSiteContent.thinkingNotes[resolvedSection] || defaultSiteContent.thinkingNotes.a1;
  }, [resolvedSection, thinkingNotes]);

  return (
    <div className="p-4 md:p-8 space-y-6">
      <section className="rounded-xl border border-blue-300 bg-blue-50 p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-blue-900 mb-2">Unsere Denkweise und Begründung</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-blue-900/90">
          {notes.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
      <Component />
    </div>
  );
}
