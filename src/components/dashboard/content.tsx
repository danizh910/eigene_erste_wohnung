'use client';

import { useSearchParams } from 'next/navigation';
import Situationsanalyse from './a1-situationsanalyse';
import A1IstAnalyse from './a1-ist-analyse';
import A1StakeholderMap from './a1-stakeholder-map';
import A1CustomerJourney from './a1-customer-journey';
import A1Zieldefinition from './a1-zieldefinition';
import Erfolgskriterien from './b1-erfolgskriterien';
import Placeholder from './placeholder';

const sections: { [key: string]: React.ComponentType<{ title?: string }> } = {
  a1: Situationsanalyse,
  'a1-ist-analyse': A1IstAnalyse,
  'a1-stakeholder-map': A1StakeholderMap,
  'a1-customer-journey': A1CustomerJourney,
  'a1-zieldefinition': A1Zieldefinition,
  b1: Erfolgskriterien,
  c1: () => <Placeholder title="C1-C3: Ideation" />,
  d1: () => <Placeholder title="D1-D2: Prototyping" />,
  e1: () => <Placeholder title="E1-F1: Testing & Bewertung" />,
  h1: () => <Placeholder title="H1: Pitch" />,
};

export default function DashboardContent() {
  const searchParams = useSearchParams();
  const section = searchParams.get('section') || 'a1';
  const Component = sections[section] || sections.a1;

  return (
    <div className="p-4 md:p-8">
      <Component />
    </div>
  );
}
