import Link from 'next/link';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardList, Route, Target, Users } from 'lucide-react';

const deliverables = [
  {
    id: 'a1-ist-analyse',
    title: 'A1.1 Ist-Analyse (Situationsanalyse)',
    description: 'Kontext, Zielgruppe und die wichtigsten WG-spezifischen Schmerzpunkte im Detail.',
    icon: ClipboardList,
  },
  {
    id: 'a1-stakeholder-map',
    title: 'A1.2 Erweiterte Stakeholder-Map',
    description: 'Einordnung nach Power/Interest inklusive Denklogik und Blockadepotenzial.',
    icon: Users,
  },
  {
    id: 'a1-customer-journey',
    title: 'A1.3 Customer Journey Map',
    description: 'Alle Phasen von Awareness bis Advocacy mit Touchpoints, Emotionen und Pain Points.',
    icon: Route,
  },
  {
    id: 'a1-zieldefinition',
    title: 'A1.4 Problem Statement, HMW & SMART-Ziele',
    description: 'Konkrete Zielsetzung und Leitfragen für die folgenden Lieferobjekte.',
    icon: Target,
  },
];

export default function Situationsanalyse() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">A1: Situationsanalyse & Zieldefinition</h1>

      <Card>
        <CardHeader>
          <CardTitle>Überblick A1</CardTitle>
          <CardDescription>
            Für jedes Lieferobjekt gibt es jetzt einen eigenen Unterpunkt mit separater Seite für detailliertere Inhalte.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {deliverables.map((item) => (
            <div key={item.id} className="rounded-lg border bg-card p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    <item.icon className="size-5 text-primary" />
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
                <Button asChild size="sm" className="shrink-0">
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
