'use client';

import { useSearchParams } from 'next/navigation';
import Situationsanalyse from './a1-situationsanalyse';
import Erfolgskriterien from './b1-erfolgskriterien';
import Placeholder from './placeholder';
import SmartGoalGeneratorView from './smart-goal-generator-view';

const sections: { [key: string]: React.ComponentType<{title?: string}> } = {
  a1: Situationsanalyse,
  b1: Erfolgskriterien,
  tag2: () => <Placeholder title="Tag 2: Ideation & Priorisierung" />,
  tag3: () => <Placeholder title="Tag 3: Prototyping-Logbuch" />,
  tag4: () => <Placeholder title="Tag 4: Testergebnisse" />,
  tag5: () => <Placeholder title="Tag 5: Pitch Deck" />,
  'smart-goal-generator': SmartGoalGeneratorView,
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
