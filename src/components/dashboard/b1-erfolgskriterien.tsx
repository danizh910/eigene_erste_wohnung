import Link from 'next/link';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ClipboardCheck, FileText, ListOrdered, Microscope, Target } from 'lucide-react';

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

const executiveSummary = [
  'Problem: WG-Erstmieter:innen erleben bei der Mietkautions-Eröffnung langsame, sequentielle und medienbruchanfällige Abläufe.',
  'Kontext: Der Life Moment „erste eigene Wohnung“ verbindet Fristdruck, neue finanzielle Verantwortung und rechtliche Unsicherheit.',
  'Zielgruppe: Junge Erwachsene in WGs mit mehreren Beteiligten und gemeinsamem Koordinationsbedarf.',
  'Projektziel: Abschluss in maximal 10 Minuten testbar machen, Medienbrüche eliminieren und Rechtssicherheit messbar absichern.',
  'Risikofokus: Höchstes Abbruchrisiko in der Purchase-Phase durch Signatur- und Statusprobleme.',
  'Steuerungslogik: Drei priorisierte Pain Points, drei priorisierte HMW-Fragen, drei messbare SMART-Ziele.',
  'Review-Rhythmus: Sprint Tag 4 (Prototyp-Test) und Sprint Tag 5 (Final Review) mit klaren Go/No-Go-Kriterien.',
  'Entscheidungsregel: Bei Zielverfehlung folgt eine verpflichtende Iteration vor Freigabe.',
];

const painPoints = [
  {
    rank: 1,
    title: 'Sequentielle Mehrparteien-Signatur unter Fristdruck',
    rationale: 'Direkter Blocker in der Purchase-Phase mit dem grössten Einfluss auf Abbruch und Verzögerung.',
  },
  {
    rank: 2,
    title: 'Fehlende Status-Transparenz für alle Beteiligten',
    rationale: 'Verursacht Rückfragen, Parallelkommunikation und zusätzliche Koordinationsschleifen.',
  },
  {
    rank: 3,
    title: 'Unklare rechtliche Einordnung bei Erstmieter:innen',
    rationale: 'Erhöht Unsicherheit und senkt die Bereitschaft, den Prozess ohne Alternativsuche abzuschliessen.',
  },
];

const hmw = [
  {
    id: 'HMW 1',
    question: 'Wie könnten wir eine rechtlich anerkannte, simultane Multi-Party-Signatur ohne Medienbruch ermöglichen?',
    reason: 'Leitet sich direkt aus Pain Point 1 ab und adressiert den zentralen Abschluss-Blocker.',
  },
  {
    id: 'HMW 2',
    question: 'Wie könnten wir für alle Beteiligten eine durchgängige Status-Transparenz über den Eröffnungsfortschritt bereitstellen?',
    reason: 'Leitet sich aus Pain Point 2 ab und reduziert Koordinationsaufwand messbar.',
  },
  {
    id: 'HMW 3',
    question: 'Wie könnten wir die rechtliche Logik der WG-Kaution für Erstmieter:innen verständlich und prüfbar darstellen?',
    reason: 'Leitet sich aus Pain Point 3 ab und stärkt nachweisbar Vertrauen in den Prozess.',
  },
];

const smartGoals = [
  {
    name: 'SMART-Ziel 1 – Prozessdauer',
    criterion: '≥ 80% der Testpersonen (mind. 4 von 5) schliessen den End-to-End-Prozess in ≤ 10:00 Minuten ab.',
    status: '⚠ Teilweise erreicht',
    reviewDay: 'Sprint Tag 4',
    action: 'Falls nicht erreicht: Prozessschritte kürzen und Reihenfolge im Signaturfluss reduzieren.',
  },
  {
    name: 'SMART-Ziel 2 – Task Success',
    criterion: '100% der Testpersonen (5 von 5) lösen den Mitbewohner-Invite aus und erkennen den Status ohne Hilfestellung.',
    status: '❌ Nicht erreicht',
    reviewDay: 'Sprint Tag 4',
    action: 'Invite-Einstieg sichtbarer machen, Statustexte präzisieren, Fehlerzustände vereinfachen.',
  },
  {
    name: 'SMART-Ziel 3 – Vertrauen',
    criterion: '≥ 80% der Testpersonen (mind. 4 von 5) bewerten „rechtlich sicher“ mit 4 oder 5 auf der 5er-Skala.',
    status: '✅ Erreicht',
    reviewDay: 'Sprint Tag 5',
    action: 'Rechtliche Hinweise beibehalten, nur sprachlich verdichten.',
  },
];

const criteria = [
  {
    title: 'Kriterium 1 – End-to-End-Dauer',
    statement: 'Mindestens 4 von 5 Testpersonen absolvieren den vollständigen Eröffnungsprozess in maximal 10 Minuten.',
    smartRef: 'SMART-Ziel 1',
    method: 'Messung (Start-/Endzeit je Durchlauf)',
    review: 'Sprint Tag 4 – Prototyp-Test',
  },
  {
    title: 'Kriterium 2 – Invite-Erfolg',
    statement: '5 von 5 Testpersonen senden einen Invite und identifizieren den offenen Status ohne Unterstützung.',
    smartRef: 'SMART-Ziel 2',
    method: 'Beobachtung + Messung (Task Completion)',
    review: 'Sprint Tag 4 – Prototyp-Test',
  },
  {
    title: 'Kriterium 3 – Fehlerquote Signaturfluss',
    statement: 'Die kritische Fehlerquote im Signaturfluss liegt über alle Durchläufe bei maximal 10%.',
    smartRef: 'SMART-Ziel 1',
    method: 'Messung (Fehlerprotokoll)',
    review: 'Sprint Tag 4 – Prototyp-Test',
  },
  {
    title: 'Kriterium 4 – Rechtliches Vertrauen',
    statement: 'Mindestens 4 von 5 Testpersonen vergeben für „rechtlich sicher“ eine Bewertung von 4 oder 5.',
    smartRef: 'SMART-Ziel 3',
    method: 'Befragung (Likert 1–5)',
    review: 'Sprint Tag 5 – Final Review',
  },
  {
    title: 'Kriterium 5 – Prozessverständnis',
    statement: 'Mindestens 4 von 5 Testpersonen können die nächsten zwei Prozessschritte korrekt wiedergeben.',
    smartRef: 'SMART-Ziel 3',
    method: 'Befragung + Beobachtung (Comprehension Check)',
    review: 'Sprint Tag 5 – Final Review',
  },
];

const evidence = [
  { id: 'T1', duration: '08:40', invite: 'Ja', trust: '5/5', note: 'Durchlauf ohne Hilfestellung' },
  { id: 'T2', duration: '09:55', invite: 'Ja', trust: '4/5', note: 'Kurze Rückfrage zu Begrifflichkeit' },
  { id: 'T3', duration: '11:10', invite: 'Ja', trust: '3/5', note: 'Statushinweis zu spät erkannt' },
  { id: 'T4', duration: '09:20', invite: 'Ja', trust: '4/5', note: 'Rechtliche Darstellung verständlich' },
  { id: 'T5', duration: '10:05', invite: 'Nein', trust: '4/5', note: 'Invite-Einstieg initial übersehen' },
];

export default function Erfolgskriterien() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">B1: Erfolgskriterien & Review</h1>

      <Card>
        <CardHeader>
          <CardTitle>Überblick B1</CardTitle>
          <CardDescription>
            Wie bei A1 ist B1 in Unterseiten gegliedert. Jedes Thema hat eine eigene Detailseite mit vollständigen Inhalten.
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

      <Card className="border-primary/40 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-xl">Executive Summary</CardTitle>
          <CardDescription>
            Kompakte Management-Übersicht mit Problem, Kontext, Zielgruppe, Projektziel und Entscheidungslogik.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm leading-6 text-foreground">
            {executiveSummary.map((point) => (
              <li key={point} className="list-disc list-inside">
                {point}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top-3 Pain Points</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {painPoints.map((point) => (
            <div key={point.rank} className="rounded-lg border p-3">
              <p className="font-semibold">
                {point.rank}. {point.title}
              </p>
              <p className="text-muted-foreground">{point.rationale}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Problem Statement</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          Junge Erwachsene in WGs erleben bei der Eröffnung eines Mietkautionskontos unter Fristdruck langsame,
          sequentielle und medienbruchanfällige Prozesse. Dies verursacht Koordinationsprobleme,
          Unsicherheit und eine erhöhte Abwanderung zu alternativen Anbietern.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>HMW</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {hmw.map((item) => (
            <div key={item.id} className="rounded-lg border p-3">
              <p className="font-semibold">{item.id}</p>
              <p>{item.question}</p>
              <p className="text-muted-foreground">Begründung: {item.reason}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SMART</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {smartGoals.map((goal) => (
            <div key={goal.name} className="rounded-lg border p-3">
              <p className="font-semibold">{goal.name}</p>
              <p>{goal.criterion}</p>
              <p className="text-muted-foreground">Review-Tag: {goal.reviewDay}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Status-Tabelle</CardTitle>
          <CardDescription>Sind wir auf Kurs?</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SMART-Ziel</TableHead>
                <TableHead>Erfolgskriterium</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Review-Tag</TableHead>
                <TableHead>Massnahme</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {smartGoals.map((goal) => (
                <TableRow key={goal.name}>
                  <TableCell className="font-medium">{goal.name}</TableCell>
                  <TableCell>{goal.criterion}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{goal.status}</Badge>
                  </TableCell>
                  <TableCell>{goal.reviewDay}</TableCell>
                  <TableCell className="text-muted-foreground">{goal.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Erfolgskriterien</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          {criteria.map((item) => (
            <div key={item.title} className="space-y-1 rounded-lg border p-3">
              <p className="font-semibold">{item.title}</p>
              <p>
                <strong>Präzise Aussage:</strong> {item.statement}
              </p>
              <p>
                <strong>Zugeordnetes SMART-Ziel:</strong> {item.smartRef}
              </p>
              <p>
                <strong>Überprüfungsmethode:</strong> {item.method}
              </p>
              <p>
                <strong>Review-Zeitpunkt:</strong> {item.review}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Review-Plan</CardTitle>
          <CardDescription>Review & Entscheidungslogik</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-6">
          <p>
            <strong>Wann wird reviewed?</strong> Sprint Tag 4 (Prototyp-Test) und Sprint Tag 5 (Final Review).
          </p>
          <p>
            <strong>Wer entscheidet?</strong> Produktverantwortung, UX-Lead und Prozessverantwortliche im gemeinsamen Review-Board.
          </p>
          <p>
            <strong>Was passiert bei Nichterreichung?</strong> Das Ziel wird als Blocker markiert; Freigabe erfolgt erst nach Iteration.
          </p>
          <p>
            <strong>Welche Iteration folgt?</strong> Vereinfachung des Signaturflusses, klarere Statusführung, präzisere Rechtstexte.
          </p>
          <p>
            <strong>Massnahmen bei Zielverfehlung:</strong> Navigation vereinfachen, Signaturprozess verkürzen, Hinweise sichtbarer machen.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Test-Evidenz</CardTitle>
          <CardDescription>Stichprobe n = 5 (Anforderung n ≥ 4 erfüllt).</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Testperson</TableHead>
                <TableHead>Dauer</TableHead>
                <TableHead>Invite erfolgreich</TableHead>
                <TableHead>Vertrauen</TableHead>
                <TableHead>Beobachtung</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {evidence.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.invite}</TableCell>
                  <TableCell>{row.trust}</TableCell>
                  <TableCell className="text-muted-foreground">{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="space-y-1 text-sm">
            <p>
              <strong>Zitat 1:</strong> „Ich sehe sofort, wer noch offen ist.“
            </p>
            <p>
              <strong>Zitat 2:</strong> „Der Invite ist klar, aber der Einstieg darf prominenter sein.“
            </p>
            <p>
              <strong>Zitat 3:</strong> „Die rechtlichen Hinweise sind kurz und verständlich.“
            </p>
            <p className="text-muted-foreground">
              Kurzfazit: Vertrauen ist im Zielbereich, Prozessdauer ist knapp darunter, Invite-Task bleibt Hauptfokus der nächsten Iteration.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
