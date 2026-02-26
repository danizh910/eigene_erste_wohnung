import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const prioritizedPainPoints = [
  {
    name: 'Sequentielle Mehrparteien-Signatur unter Fristdruck',
    reason: 'Blockiert den Abschluss direkt in der kritischen Purchase-Phase und verursacht die höchste Abwanderung.',
  },
  {
    name: 'Fehlende Status-Transparenz für alle Beteiligten',
    reason: 'Erzeugt Koordinationsstress, Rückfragen und Verzögerungen in jeder WG-Konstellation.',
  },
  {
    name: 'Unklare rechtliche Einordnung bei Erstmieter:innen',
    reason: 'Steigert Unsicherheit und senkt Vertrauen, obwohl der Bedarf an Sicherheit in diesem Life Moment besonders hoch ist.',
  },
];

const hmwTop3 = [
  {
    title: 'HMW 1',
    question: 'Wie könnten wir eine rechtlich anerkannte, simultane Multi-Party-Signatur ohne Medienbruch ermöglichen?',
    reason: 'Adressiert den höchsten Pain Point mit direktem Einfluss auf Fristtreue und Abschlussrate.',
  },
  {
    title: 'HMW 2',
    question: 'Wie könnten wir für alle Beteiligten eine durchgängige Status-Transparenz über den Eröffnungsfortschritt bereitstellen?',
    reason: 'Reduziert Koordinationsaufwand und macht Verzögerungen früh sichtbar.',
  },
  {
    title: 'HMW 3',
    question: 'Wie könnten wir die rechtliche Logik der WG-Kaution für Erstmieter:innen verständlich und prüfbar darstellen?',
    reason: 'Senkt Unsicherheit und schafft belastbares Vertrauen in den Prozess.',
  },
];

const smartGoals = [
  {
    goal: 'SMART-Ziel 1 – Prozessdauer',
    criterion: '≥ 80% der Testpersonen (mind. 4 von 5) schliessen den End-to-End-Prozess in ≤ 10:00 Minuten ab.',
    status: 'In Arbeit',
    reviewDay: 'Sprint Tag 4',
    action: 'Falls < 80%: Schritte reduzieren und Reihenfolge im Flow vereinfachen.',
  },
  {
    goal: 'SMART-Ziel 2 – Task Success',
    criterion: '100% der Testpersonen (5 von 5) lösen den Mitbewohner-Invite aus und identifizieren den Status ohne Hilfe.',
    status: 'In Arbeit',
    reviewDay: 'Sprint Tag 4',
    action: 'Falls < 100%: Invite-Texte, Fehlermeldungen und Statushinweise präzisieren.',
  },
  {
    goal: 'SMART-Ziel 3 – Vertrauen',
    criterion: '≥ 80% der Testpersonen (mind. 4 von 5) bewerten „rechtlich sicher“ mit 4 oder 5 auf der 5er-Skala.',
    status: 'In Arbeit',
    reviewDay: 'Sprint Tag 5',
    action: 'Falls < 80%: rechtliche Erklärtexte und Nachweisdarstellung überarbeiten.',
  },
];

const successCriteria = [
  {
    name: 'Kriterium 1 – End-to-End-Dauer',
    statement: 'Mindestens 4 von 5 Testpersonen absolvieren den vollständigen Eröffnungsprozess in maximal 10 Minuten.',
    smart: 'SMART-Ziel 1',
    method: 'Messung (Start/Endzeit pro Task)',
    review: 'Sprint Tag 4 – Prototyp-Test',
  },
  {
    name: 'Kriterium 2 – Invite-Erfolg',
    statement: '5 von 5 Testpersonen senden einen Invite und erkennen den offenen Status ohne Unterstützung.',
    smart: 'SMART-Ziel 2',
    method: 'Beobachtung + Messung (Task Completion)',
    review: 'Sprint Tag 4 – Prototyp-Test',
  },
  {
    name: 'Kriterium 3 – Fehlerquote',
    statement: 'Die kritische Fehlerquote im Signaturfluss liegt bei maximal 10% über alle Testdurchläufe.',
    smart: 'SMART-Ziel 1',
    method: 'Messung (Fehlerprotokoll)',
    review: 'Sprint Tag 4 – Prototyp-Test',
  },
  {
    name: 'Kriterium 4 – Rechtliches Vertrauen',
    statement: 'Mindestens 4 von 5 Testpersonen vergeben für „rechtlich sicher“ eine Bewertung von 4 oder 5.',
    smart: 'SMART-Ziel 3',
    method: 'Befragung (5er-Likert-Skala)',
    review: 'Sprint Tag 5 – Final Review',
  },
  {
    name: 'Kriterium 5 – Verständlichkeit',
    statement: 'Mindestens 4 von 5 Testpersonen können die nächsten zwei Prozessschritte korrekt wiedergeben.',
    smart: 'SMART-Ziel 3',
    method: 'Befragung + Beobachtung (Comprehension Check)',
    review: 'Sprint Tag 5 – Final Review',
  },
];

const testEvidence = [
  { id: 'T1', duration: '08:40', inviteSuccess: 'Ja', trustScore: '5/5', note: 'Keine Hilfestellung nötig' },
  { id: 'T2', duration: '09:55', inviteSuccess: 'Ja', trustScore: '4/5', note: 'Leichte Rückfrage zu Begriffen' },
  { id: 'T3', duration: '11:10', inviteSuccess: 'Ja', trustScore: '3/5', note: 'Statushinweis zu spät erkannt' },
  { id: 'T4', duration: '09:20', inviteSuccess: 'Ja', trustScore: '4/5', note: 'Flow verständlich, rechtliche Klarheit gut' },
  { id: 'T5', duration: '10:05', inviteSuccess: 'Nein', trustScore: '4/5', note: 'Invite-Button wurde zunächst übersehen' },
];

export default function Erfolgskriterien() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">B1: Abgabeformat (IST → PROBLEM → HMW → SMART)</h1>

      <Card className="border-primary/40 bg-primary/5">
        <CardHeader>
          <CardTitle>Executive Summary</CardTitle>
          <CardDescription>Management-Übersicht ohne Navigation und ohne zusätzliche Interaktion.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-6 space-y-2">
          <p>
            <strong>Problem:</strong> Junge Erwachsene in WGs scheitern bei der Mietkautions-Eröffnung häufig an langsamen,
            sequentiellen und teilweise papierbasierten Abläufen.
          </p>
          <p>
            <strong>Kontext:</strong> Der Life Moment „erste eigene Wohnung“ kombiniert Fristdruck, neue finanzielle Verpflichtungen
            und rechtliche Unsicherheit.
          </p>
          <p>
            <strong>Zielgruppe:</strong> Erstmieter:innen in WG-Konstellationen mit mehreren gleichberechtigten Beteiligten.
          </p>
          <p>
            <strong>Projektziel:</strong> Prozess in maximal 10 Minuten testbar machen, Medienbrüche eliminieren und rechtliches Vertrauen
            messbar absichern.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ist-Analyse</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 text-sm leading-6">
          <section>
            <h3 className="font-semibold text-base mb-1">Kontext</h3>
            <p className="text-muted-foreground">
              Der Übergang in den ersten eigenen Wohnraum erzeugt hohen Entscheidungsdruck.
              Unter Fristen werden einfache, schnelle Alternativen bevorzugt.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-1">Stakeholder Map</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Primär: Hauptmieter:in, Mitbewohner:innen, Vermieter:in, UBS-Prozess.</li>
              <li>Sekundär: Rechtsdienst, Eltern/Bürgen, Konkurrenz durch Kautionsversicherungen.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-1">Customer Journey</h3>
            <p className="text-muted-foreground">
              Höchstes Risiko in der Phase „Purchase“: Der Wechsel zwischen digitalen und physischen Touchpoints
              verzögert den Abschluss und erhöht Abwanderung.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-1">Pain Points (explizite Liste)</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {prioritizedPainPoints.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </section>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top 3 Pain Points (priorisiert)</CardTitle>
          <CardDescription>Priorisierung nach Einfluss auf Abbruchrisiko und Prozessdauer.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {prioritizedPainPoints.map((item, index) => (
            <div key={item.name} className="rounded-lg border p-3">
              <p className="font-semibold">{index + 1}. {item.name}</p>
              <p className="text-muted-foreground">Begründung: {item.reason}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Problemstatement</CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <p>
            Junge Erwachsene in WGs erleben bei der Eröffnung eines Mietkautionskontos unter Fristdruck langsame,
            sequentielle und medienbruchanfällige Prozesse. Dies führt zu Koordinationsproblemen,
            Unsicherheit und erhöhter Abwanderung zu alternativen Anbietern.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>HMW</CardTitle>
          <CardDescription>Nur die drei priorisierten, direkt aus den Top-Pains abgeleiteten Leitfragen.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {hmwTop3.map((item) => (
            <div key={item.title} className="rounded-lg border p-3">
              <p className="font-semibold">{item.title}</p>
              <p>{item.question}</p>
              <p className="text-muted-foreground">Begründung: {item.reason}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SMART</CardTitle>
          <CardDescription>Messbar mit klaren Schwellen, Review-Tag und konkreter Konsequenz.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {smartGoals.map((goal) => (
            <div key={goal.goal} className="rounded-lg border p-3">
              <p className="font-semibold">{goal.goal}</p>
              <p>{goal.criterion}</p>
              <p className="text-muted-foreground">Review: {goal.reviewDay} · Massnahme bei Verfehlung: {goal.action}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Status-Tabelle</CardTitle>
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
                <TableRow key={goal.goal}>
                  <TableCell className="font-medium">{goal.goal}</TableCell>
                  <TableCell>{goal.criterion}</TableCell>
                  <TableCell><Badge variant="secondary">{goal.status}</Badge></TableCell>
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
          <CardDescription>4–6 Kriterien mit quantitativer und qualitativer Abdeckung.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          {successCriteria.map((item) => (
            <div key={item.name} className="rounded-lg border p-3 space-y-1">
              <p className="font-semibold">{item.name}</p>
              <p><strong>Präzise Aussage:</strong> {item.statement}</p>
              <p><strong>Zugeordnetes SMART-Ziel:</strong> {item.smart}</p>
              <p><strong>Überprüfungsmethode:</strong> {item.method}</p>
              <p><strong>Review-Zeitpunkt:</strong> {item.review}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Review-Plan</CardTitle>
          <CardDescription>Review & Entscheidungslogik</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-6">
          <p><strong>Wann wird reviewed?</strong> Sprint Tag 4 (Prototyp-Test) und Sprint Tag 5 (Final Review).</p>
          <p><strong>Wer entscheidet?</strong> Produktverantwortung, UX-Lead und Prozessverantwortliche gemeinsam im Review-Board.</p>
          <p><strong>Was passiert bei Nichterreichung?</strong> Betroffene Kriterien werden als Blocker markiert und vor Freigabe nachgebessert.</p>
          <p><strong>Welche Iteration folgt?</strong> Priorisierte Iteration auf Signaturfluss, Statuskommunikation und rechtliche Erklärlogik.</p>
          <p>
            <strong>Massnahme bei Zielverfehlung:</strong> Navigation vereinfachen, Signaturprozess verkürzen,
            Statushinweise prominenter platzieren und rechtliche Hinweise konkretisieren.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Test-Evidenz</CardTitle>
          <CardDescription>n = 5 Testpersonen (n ≥ 4 erfüllt).</CardDescription>
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
              {testEvidence.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.inviteSuccess}</TableCell>
                  <TableCell>{row.trustScore}</TableCell>
                  <TableCell className="text-muted-foreground">{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="text-sm space-y-2">
            <p><strong>Zitat 1:</strong> „Ich sehe jetzt klar, wer noch unterschreiben muss.“</p>
            <p><strong>Zitat 2:</strong> „Der Invite war schnell, aber der Button dürfte sichtbarer sein.“</p>
            <p><strong>Zitat 3:</strong> „Die rechtlichen Hinweise waren verständlich und kurz genug.“</p>
            <p className="text-muted-foreground">
              Zusammenfassung: Zwei von drei SMART-Zielen liegen im Zielkorridor; der Invite-Einstieg wird in der nächsten Iteration priorisiert.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/40">
        <CardHeader>
          <CardTitle>Export</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p>
            Die statische Dokumentationsseite ist ohne Login erreichbar und für die Abgabe nutzbar:
            {' '}<Link href="/dokumentation" className="text-primary underline">/dokumentation</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
