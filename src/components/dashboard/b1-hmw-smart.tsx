import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const hmw = [
  { id: 'HMW 1', question: 'Wie könnten wir eine rechtlich anerkannte, simultane Multi-Party-Signatur ohne Medienbruch ermöglichen?', reason: 'Priorisiert, weil dieser Pain Point den Abschluss unmittelbar blockiert und den grössten Einfluss auf Conversion im Purchase-Moment hat.' },
  { id: 'HMW 2', question: 'Wie könnten wir für alle Beteiligten eine durchgängige Status-Transparenz über den Eröffnungsfortschritt bereitstellen?', reason: 'Priorisiert, weil fehlende Transparenz Koordinationsschleifen erzeugt und direkt auf Prozessdauer sowie wahrgenommenen Aufwand wirkt.' },
  { id: 'HMW 3', question: 'Wie könnten wir die rechtliche Logik der WG-Kaution für Erstmieter:innen verständlich und prüfbar darstellen?', reason: 'Priorisiert, weil rechtliche Unsicherheit den Wechsel zu vermeintlich einfacheren Alternativen beschleunigt, selbst bei funktionierendem Produktkern.' },
];

const smartGoals = [
  { name: 'SMART-Ziel 1 – Prozessdauer', criterion: '≥ 80% der Testpersonen (mind. 4 von 5) schliessen den End-to-End-Prozess in ≤ 10:00 Minuten ab.', status: '⚠ Teilweise erreicht', reviewDay: 'Sprint Tag 4', action: 'Falls nicht erreicht: Prozessschritte kürzen und Reihenfolge im Signaturfluss reduzieren.' },
  { name: 'SMART-Ziel 2 – Task Success', criterion: '100% der Testpersonen (5 von 5) lösen den Mitbewohner-Invite aus und erkennen den Status ohne Hilfestellung.', status: '❌ Nicht erreicht', reviewDay: 'Sprint Tag 4', action: 'Invite-Einstieg sichtbarer machen, Statustexte präzisieren, Fehlerzustände vereinfachen.' },
  { name: 'SMART-Ziel 3 – Vertrauen', criterion: '≥ 80% der Testpersonen (mind. 4 von 5) bewerten „rechtlich sicher“ mit 4 oder 5 auf der 5er-Skala.', status: '✅ Erreicht', reviewDay: 'Sprint Tag 5', action: 'Rechtliche Hinweise beibehalten, nur sprachlich verdichten.' },
];

export default function B1HmwSmart() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">B1.2 HMW & SMART</h1>

      <Card>
        <CardHeader>
          <CardTitle>HMW</CardTitle>
          <CardDescription>Drei priorisierte Leitfragen, direkt aus den Top-Pain-Points abgeleitet.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p className="text-muted-foreground">
            Strategische Einordnung: Die drei HMW wurden nicht nach Kreativpotenzial, sondern nach Wirkung auf den kritischen Conversion-Moment priorisiert.
            Diese Entscheidung basiert auf der Hypothese, dass Abwanderung im Purchase/Onboarding durch Prozessfriktion ausgelöst wird.
          </p>
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
        <CardHeader><CardTitle>SMART</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p className="text-muted-foreground">
            Business-Logik der Schwellenwerte: Die 10-Minuten-Grenze operationalisiert Fristtauglichkeit, 80% sichert robuste Reproduzierbarkeit in kleiner Stichprobe,
            und das 100%-Kriterium beim Invite ist bewusst strikt, weil bereits ein einzelner Ausfall den Mehrparteien-Prozess blockiert.
          </p>
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
                  <TableCell><Badge variant="secondary">{goal.status}</Badge></TableCell>
                  <TableCell>{goal.reviewDay}</TableCell>
                  <TableCell className="text-muted-foreground">{goal.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
