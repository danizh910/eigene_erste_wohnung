import Link from 'next/link';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardList, ListChecks, Users } from 'lucide-react';

type CDeliverable = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  preview: string[];
};

const deliverables: CDeliverable[] = [
  {
    id: 'c1-ideation-dokumentation',
    title: 'C1 – Ideation-Dokumentation (Team)',
    description: 'Ergebnisse der Kreativtechniken mit dokumentierter Ideenbasis und Nachweisen (Fotos/Screenshots).',
    icon: ClipboardList,
    preview: [
      'Divergenz im Lösungsraum entlang priorisierter HMW-Fragen.',
      'Dokumentierte Kreativregeln, Technik-Setup und Ideencluster.',
      'Artefakt-Hinweis: Fotos/Screenshots und Ideenliste in LearningView hochladen.',
    ],
  },
  {
    id: 'c2-teamwork-reflexion',
    title: 'C2 – Teamwork-Reflexion (individuell)',
    description: 'Rollenbeitrag, Wirksamkeit der Zusammenarbeit, Lernpunkte und konkrete Verbesserungen.',
    icon: Users,
    preview: [
      'Rollenklärung und Beitrag zur Entscheidungsqualität.',
      'Methodenwirkung: Brainstorming/Brainwriting und Teamdynamik.',
      'Artefakt-Hinweis: individueller Reflexionstext in LearningView.',
    ],
  },
  {
    id: 'c3-priorisierung-entscheid',
    title: 'C3 – Priorisierung & Entscheidungsdoku (Team)',
    description: 'Bewertungslogik, Priorisierungsmatrix und finaler Lösungsentscheid mit Begründung.',
    icon: ListChecks,
    preview: [
      'Übergang von Divergenz zu Konvergenz mit Governance-Logik.',
      'Dot-Voting, Impact/Effort und MoSCoW als Entscheidungsinstrumente.',
      'Artefakt-Hinweis: Bewertungsmatrix und Entscheid in LearningView hochladen.',
    ],
  },
];

export default function CIdeationOverview() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">C: Ideation & Priorisierung</h1>

      <Card>
        <CardHeader>
          <CardTitle>Überblick C</CardTitle>
          <CardDescription>
            Wie bei A1 und B1 ist Kapitel C in Unterpunkte gegliedert. Jeder Unterpunkt enthält eine eigene, vollständige Dokumentation.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {deliverables.map((item) => (
            <div key={item.id} className="rounded-xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold flex items-center gap-2 text-base">
                <item.icon className="size-5 text-primary" />
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {item.preview.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t">
                <Button asChild size="sm" className="w-full sm:w-auto">
                  <Link href={`/?section=${item.id}`}>
                    Öffnen <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
