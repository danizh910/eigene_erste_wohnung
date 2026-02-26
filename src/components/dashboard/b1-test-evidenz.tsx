import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const evidence = [
  { id: 'T1', duration: '08:40', invite: 'Ja', trust: '5/5', note: 'Durchlauf ohne Hilfestellung' },
  { id: 'T2', duration: '09:55', invite: 'Ja', trust: '4/5', note: 'Kurze Rückfrage zu Begrifflichkeit' },
  { id: 'T3', duration: '11:10', invite: 'Ja', trust: '3/5', note: 'Statushinweis zu spät erkannt' },
  { id: 'T4', duration: '09:20', invite: 'Ja', trust: '4/5', note: 'Rechtliche Darstellung verständlich' },
  { id: 'T5', duration: '10:05', invite: 'Nein', trust: '4/5', note: 'Invite-Einstieg initial übersehen' },
];

export default function B1TestEvidenz() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">B1.4 Test-Evidenz</h1>

      <Card>
        <CardHeader>
          <CardTitle>Testresultate</CardTitle>
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

          <div className="text-sm space-y-1">
            <p><strong>Zitat 1:</strong> „Ich sehe sofort, wer noch offen ist.“</p>
            <p><strong>Zitat 2:</strong> „Der Invite ist klar, aber der Einstieg darf prominenter sein.“</p>
            <p><strong>Zitat 3:</strong> „Die rechtlichen Hinweise sind kurz und verständlich.“</p>
            <p className="text-muted-foreground">
              Kurzfazit: Vertrauen ist im Zielbereich, Prozessdauer ist knapp darunter, Invite-Task bleibt Hauptfokus der nächsten Iteration.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>B1.5 Export / Dokumentation</CardTitle></CardHeader>
        <CardContent className="text-sm">
          <p>
            Die statische Dokumentation ist ohne Login verfügbar unter{' '}
            <Link href="/dokumentation" className="text-primary underline">/dokumentation</Link>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
