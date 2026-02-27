'use client';

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

const thinkingNotes: Record<string, string[]> = {
  a1: [
    'In unserer Analyse wurde zuerst die Problemstruktur geklärt, bevor Lösungen diskutiert wurden.',
    'Die Situationsanalyse wurde als Entscheidungsgrundlage aufgebaut: Kontext, Stakeholder, Journey und Zieldefinition greifen logisch ineinander.',
  ],
  'a1-ist-analyse': [
    'Diese Seite zeigt die Begründung, warum der Life Moment «erste eigene Wohnung» strategisch relevant ist und warum WG als dynamisches Mehrparteien-System betrachtet wird.',
    'Diese Sichtweise verhindert vorschnelle Feature-Ideen und fokussiert auf die reale Prozesslogik unter Zeitdruck.',
  ],
  'a1-stakeholder-map': [
    'Die Stakeholder wurden nicht nur beschrieben, sondern nach Blockade- und Freigabemacht bewertet.',
    'Daraus folgt: Eine gute UX allein reicht nicht; High-Power-Stakeholder müssen im Lösungsdesign aktiv mitgeführt werden.',
  ],
  'a1-customer-journey': [
    'Die Journey wurde genutzt, um den kritischen Moment empirisch zu lokalisieren: Purchase als Engpass mit maximalem Abwanderungsrisiko.',
    'Der Fokus auf einen Moment ist eine bewusste Priorisierung, um Wirkung im Sprint zu maximieren.',
  ],
  'a1-zieldefinition': [
    'Problem Statement und POV wurden als Design-Treiber formuliert, nicht als reine Beschreibung.',
    'SMART-Ziele übersetzen die Hypothese in messbare Erfolgskriterien für den Entscheid über Go/No-Go.',
  ],
  b1: [
    'B1 macht die Steuerungslogik sichtbar: von der Kernhypothese über Kriterien bis zur Test-Evidenz.',
    'Das Ziel ist nachvollziehbare Entscheidungsfähigkeit statt allgemeiner Projektbeschreibung.',
  ],
  'b1-executive-summary': [
    'Die Executive Summary priorisiert bewusst die drei stärksten Reibungsfaktoren im Prozess statt allgemeiner Verbesserungswünsche.',
    'Damit wird klar, welche Annahmen getestet werden und welche nicht im aktuellen Scope liegen.',
  ],
  'b1-hmw-smart': [
    'HMW und SMART wurden aus denselben Pain Points abgeleitet, damit Kreativität und Messbarkeit in einer Linie bleiben.',
    'Die strenge Invite-Metrik ist bewusst gesetzt, weil ein einzelner Fehler den gesamten Mehrparteien-Prozess blockiert.',
  ],
  'b1-erfolgskriterien-review': [
    'Erfolgskriterien dienen als Entscheidungsinstrument mit Governance-Charakter und nicht als nachträgliches Reporting.',
    'Bei Nichterreichung wird iteriert und mit identischem Messdesign erneut geprüft.',
  ],
  'b1-test-evidenz': [
    'Die Evidenz wird interpretativ gelesen: Welche Teile der Hypothese sind bestätigt und wo bleibt ein kritischer Blocker.',
    'Die nächste Iteration priorisiert deshalb den Invite-Einstieg und die frühe Statussicht.',
  ],
  c: [
    'Kapitel C zeigt den vollständigen Denkpfad von Divergenz (Ideenbreite) zu Konvergenz (begründeter Entscheid).',
    'Die Unterpunkte C1 bis C3 sind getrennt, damit Methodenkompetenz, Reflexion und Entscheidungslogik klar prüfbar sind.',
  ],
  c1: [
    'Kapitel C zeigt den vollständigen Denkpfad von Divergenz (Ideenbreite) zu Konvergenz (begründeter Entscheid).',
    'Die Unterpunkte C1 bis C3 sind getrennt, damit Methodenkompetenz, Reflexion und Entscheidungslogik klar prüfbar sind.',
  ],
  'c1-ideation-dokumentation': [
    'In C1 wurde absichtlich breit gedacht und erst später bewertet, um keine frühen Denkbarrieren zu erzeugen.',
    'Die dokumentierten Techniken und Artefakte belegen, dass die Ideation methodisch und nicht zufällig erfolgte.',
  ],
  'c2-teamwork-reflexion': [
    'C2 reflektiert Rollenwirkung und Teamdynamik als Teil der methodischen Qualität, nicht als persönliche Randnotiz.',
    'Die Reflexion dient der Verbesserung der nächsten Iteration und macht Lernfähigkeit sichtbar.',
  ],
  'c3-priorisierung-entscheid': [
    'C3 begründet den finalen Lösungsentscheid mit Matrixlogik, Stakeholder-Anforderungen und SMART-Validierung.',
    'Der Scope von WG-Kaution Express ist eine Priorisierungsentscheidung gegen Komplexität, nicht gegen Innovation.',
  ],
  d1: [
    'Der Bereich bleibt im aktuellen Sprint in Arbeit; der Fokus lag auf Problemklarheit und Entscheidungsreife in A bis C.',
  ],
  e1: [
    'Der Bereich bleibt im aktuellen Sprint in Arbeit; Testvertiefung erfolgt nach Umsetzung der priorisierten Blocker.',
  ],
  h1: [
    'Der Pitch wird nach Abschluss der Iteration entlang der dokumentierten Entscheidungslogik finalisiert.',
  ],
};

type DashboardContentProps = {
  section: string;
};

export default function DashboardContent({ section }: DashboardContentProps) {
  const { isLoaded, isSectionVisible, firstVisibleSection } = useSectionVisibility();
  const resolvedSection = isLoaded && !isSectionVisible(section) ? firstVisibleSection : section;
  const Component = sections[resolvedSection] || sections.a1;

  return (
    <div className="p-4 md:p-8 space-y-6">
      <section className="rounded-xl border border-blue-300 bg-blue-50 p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-blue-900 mb-2">Unsere Denkweise und Begründung</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-blue-900/90">
          {note.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
      <Component />
    </div>
  );
}
