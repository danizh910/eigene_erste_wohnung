import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardCheck, ListOrdered, Microscope, Target, FileText } from 'lucide-react';

type B1Deliverable = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  preview: string[];
};

const deliverables: B1Deliverable[] = [
  {
    id: 'b1-executive-summary',
    title: 'B1.1 Executive Summary & Ist-Analyse',
    icon: FileText,
    description: 'Management-Überblick mit Problem, Kontext, Zielgruppe und priorisierten Pain Points.',
    preview: [
      'Lineare Leselogik ohne Klick-Labyrinth.',
      'Ist-Analyse in den vier Pflichtsektionen.',
      'Top-3 Pain Points mit Begründung.',
    ],
  },
  {
    id: 'b1-hmw-smart',
    title: 'B1.2 HMW & SMART',
    icon: Target,
    description: 'Drei priorisierte HMW-Fragen und messbare SMART-Ziele mit Schwellenwerten.',
    preview: [
      'HMW direkt aus Pain Points abgeleitet.',
      'SMART mit Zahlen, Grenze und Review-Tag.',
      'Status-Tabelle „Sind wir auf Kurs?“',
    ],
  },
  {
    id: 'b1-erfolgskriterien-review',
    title: 'B1.3 Erfolgskriterien & Review-Plan',
    icon: ClipboardCheck,
    description: 'Kriterien-Set, Entscheidungslogik und Massnahmen bei Zielverfehlung.',
    preview: [
      '5 Kriterien mit Aussage, SMART-Zuordnung, Methode, Zeitpunkt.',
      'Quantitative und qualitative Abdeckung.',
      'Konkrete Iterationslogik bei Nichterreichung.',
    ],
  },
  {
    id: 'b1-test-evidenz',
    title: 'B1.4 Test-Evidenz',
    icon: Microscope,
    description: 'Testresultate (n≥4), Zitate und kompaktes Fazit.',
    preview: [
      'Tabelle mit Testresultaten (n = 5).',
      'Drei kurze Nutzerzitate.',
      'Fazit mit klarer Priorisierung der nächsten Iteration.',
    ],
  },
  {
    id: 'b1-export',
    title: 'B1.5 Export / Dokumentation',
    icon: ListOrdered,
    description: 'Statische, loginfreie Dokumentationsseite für die Abgabe.',
    preview: [
      'Ohne Login direkt lesbar.',
      'Inhalte für Management-Review verdichtet.',
      'Als stabile Abgabe-Referenz nutzbar.',
    ],
  },
];

export default function Erfolgskriterien() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">B1: Erfolgskriterien & Review</h1>

      <Card>
        <CardHeader>
          <CardTitle>Überblick B1</CardTitle>
          <CardDescription>
            Wie bei A1 ist B1 jetzt in Unterseiten gegliedert. Jedes Thema hat eine eigene Detailseite mit vollständigen Inhalten.
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
