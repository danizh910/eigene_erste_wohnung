import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Check, Calendar, ListChecks, Target, CheckCircle } from 'lucide-react';

const schwellenwerte = [
  { criterion: 'Task Completion Time', min: '< 12 Min.', ziel: '< 8 Min.', stretch: '< 5 Min.', methode: 'Stoppuhr / Usability Test' },
  { criterion: 'Task Success Rate', min: '80%', ziel: '95%', stretch: '100%', methode: 'Beobachtung' },
  { criterion: 'Mitbewohner-Invite', min: 'Funktional', ziel: 'Intuitiv', stretch: '"Begeisternd"', methode: 'Adjektiv-Karten' },
  { criterion: 'Rechtssicherheit', min: '"Neutral"', ziel: '"Sicher"', stretch: '"UBS-Standard"', methode: 'Post-Test Interview' },
];

const milestones = [
    { zeitpunkt: 'Ende Tag 2', ziel: 'Ideen validiert & priorisiert' },
    { zeitpunkt: 'Ende Tag 3', ziel: 'Prototyp klickbar' },
    { zeitpunkt: 'Tag 4', ziel: 'Usability-Test' },
    { zeitpunkt: 'Tag 5', ziel: 'Optimierung & Präsentation' },
]

const reviewLeitfaden = [
    { bereich: 'Klarheit', fragen: ['Ist das Problem präzise formuliert?', 'Ist der POV nutzerzentriert?'] },
    { bereich: 'Relevanz', fragen: ['Sind die HMW-Fragen lösungsneutral formuliert?', 'Decken sie die Haupt-Pain-Points ab?'] },
    { bereich: 'Messbarkeit', fragen: ['Sind die SMART-Ziele wirklich messbar?', 'Sind die Erfolgskriterien realistisch?'] },
    { bereich: 'Konsistenz', fragen: ['Passen Erfolgskriterien zu den Zielen?', 'Unterstützen sie die Markenwerte Vertrauen, Kompetenz, Nähe?'] },
]

export default function Erfolgskriterien() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">B1: Erfolgskriterien-Set</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Target className="text-primary" />1. Schwellenwerte der Erfolgskriterien</CardTitle>
          <CardDescription>Diese Tabelle definiert, wann wir unsere Ziele als erreicht, übertroffen oder verfehlt betrachten.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Erfolgskriterium</TableHead>
                  <TableHead>Minimum (Min)</TableHead>
                  <TableHead className="text-primary/90">Zielwert (Ziel)</TableHead>
                  <TableHead>Stretch-Ziel</TableHead>
                  <TableHead>Messmethode</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schwellenwerte.map((item) => (
                  <TableRow key={item.criterion}>
                    <TableCell className="font-medium">{item.criterion}</TableCell>
                    <TableCell>{item.min}</TableCell>
                    <TableCell className="font-semibold text-primary">{item.ziel}</TableCell>
                    <TableCell>{item.stretch}</TableCell>
                    <TableCell>{item.methode}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Calendar className="text-primary" />2. Meilensteine & Review-Zeitpunkte</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {milestones.map(item => (
                         <li key={item.zeitpunkt} className="flex items-center gap-3">
                            <Check className="size-5 text-primary" />
                            <div>
                                <p className="font-semibold">{item.zeitpunkt}</p>
                                <p className="text-sm text-muted-foreground">{item.ziel}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><ListChecks className="text-primary" />3. Peer-Review Leitfaden</CardTitle>
              <CardDescription>Für die Prüfung von A1 + B1 durch das andere Team.</CardDescription>
            </CardHeader>
            <CardContent>
              {reviewLeitfaden.map(item => (
                <div key={item.bereich} className="mb-4 last:mb-0">
                    <h4 className="font-semibold">{item.bereich}</h4>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mt-1">
                        {item.fragen.map(frage => <li key={frage}>{frage}</li>)}
                    </ul>
                </div>
              ))}
            </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><CheckCircle className="text-primary" />Review-Routine</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Wir prüfen diese Kriterien am Ende jedes Sprint-Tages (Check-out), um sicherzustellen, dass unser Prototyp die Markenwerte Vertrauen, Kompetenz und Nähe erfüllt.
          </p>
        </CardContent>
      </Card>

    </div>
  );
}
