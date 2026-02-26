import Link from 'next/link';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardList, Route, Target, Users } from 'lucide-react';

type Deliverable = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  preview: string[];
};

const deliverables: Deliverable[] = [
  {
    id: 'a1-ist-analyse',
    title: 'A1.1 Ist-Analyse (Situationsanalyse)',
    description: 'Kontext + WG-spezifische Problemstruktur (Solidarhaftung, Mieterwechsel, Unsicherheit).',
    icon: ClipboardList,
    preview: [
      'Life Moment mit hoher emotionaler und finanzieller Belastung.',
      'WG-Dynamik verstärkt Komplexität und Koordinationsaufwand.',
      'Fokus auf Klarheit, Sicherheit und einfache Prozessführung.',
    ],
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
    description: 'Stakeholder nach Power/Interest inkl. Denklogik und Blockadepotenzial.',
    icon: Users,
    preview: [
      'Manage Closely: Hauptmieter:in, UBS-Prozess, Vermieter:in.',
      'Keep Satisfied/Informed: Rechtsdienst, WG-Mitglieder, Eltern/Bürgen.',
      'Ziel: Prozess so aufsetzen, dass High-Power-Stakeholder nicht blockieren.',
    ],
    description: 'Einordnung nach Power/Interest inklusive Denklogik und Blockadepotenzial.',
    icon: Users,
  },
  {
    id: 'a1-customer-journey',
    title: 'A1.3 Customer Journey Map',
    description: 'Phasen 1–5 mit Micro-Steps, Touchpoints, Emotionen, Root Causes und Opportunities.',
    icon: Route,
    preview: [
      'Zentraler Befund: Höchstes Abwanderungsrisiko in der Phase Purchase.',
      'Pain entsteht an Übergängen zwischen Touchpoints (Medienbrüche).',
      'Design-Fokus: 100% digital, asynchron/simultan, klare Statusführung.',
    ],
    description: 'Alle Phasen von Awareness bis Advocacy mit Touchpoints, Emotionen und Pain Points.',
    icon: Route,
  },
  {
    id: 'a1-zieldefinition',
    title: 'A1.4 Problem Statement, HMW & SMART-Ziele',
    description: 'POV, priorisierte HMW-Fragen und messbare Ziele für die nächsten Sprint-Schritte.',
    icon: Target,
    preview: [
      'Problemstatement für WG-Kautionsprozess mit Zeitdruck.',
      'HMW-Fragen zu Multi-Party-Signatur, Transparenz und Automatisierung.',
      'SMART-Ziele für Zeit, Usability und Vertrauen/Compliance.',
    ],
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
            Lineare Übersicht: pro Lieferobjekt zuerst Kurzinhalt, darunter direkter Einstieg in die Detailseite.
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
