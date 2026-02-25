'use client';

import { useSearchParams } from 'next/navigation';
import Situationsanalyse from './a1-situationsanalyse';
import Erfolgskriterien from './b1-erfolgskriterien';
import Placeholder from './placeholder';

const sections: { [key: string]: React.ComponentType<{title?: string}> } = {
  a1: Situationsanalyse,
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
