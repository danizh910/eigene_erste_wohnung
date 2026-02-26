import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, Calendar, ListChecks, Target, CheckCircle } from 'lucide-react';

const successCriteria = [
  {
    criterion: 'Task Completion Time',
    min: '< 12 Min.',
    goal: '< 8 Min.',
    stretch: '< 5 Min.',
    method: 'Stoppuhr / Usability Test'
  },
  {
    criterion: 'Task Success Rate',
    min: '80%',
    goal: '95%',
    stretch: '100%',
    method: 'Beobachtung'
  },
  {
    criterion: 'Mitbewohner-Invite',
    min: 'Funktional',
    goal: 'Intuitiv',
    stretch: '"Begeisternd"',
    method: 'Adjektiv-Karten'
  },
  {
    criterion: 'Rechtssicherheit',
    min: '"Neutral"',
    goal: '"Sicher"',
    stretch: '"UBS-Standard"',
    method: 'Post-Test Interview'
  },
];

const milestones = [
    { zeitpunkt: 'Ende Tag 2', ziel: 'Ideen validiert & priorisiert' },
    { zeitpunkt: 'Ende Tag 3', ziel: 'Prototyp klickbar' },
    { zeitpunkt: 'Tag 4', ziel: 'Usability-Test' },
    { zeitpunkt: 'Tag 5', ziel: 'Optimierung & Präsentation' },
]

const reviewLeitfaden = [
    { bereich: 'Klarheit', fragen: ['Ist das Problem präzise formuliert?', 'Ist der POV nutzerzentriert?'] },
    { bereich: 'Relevanz', fragen: ['Sind die HMW-Fragen lösungsneutral?', 'Decken sie die Haupt-Pain-Points ab?'] },
    { bereich: 'Messbarkeit', fragen: ['Sind die SMART-Ziele wirklich messbar?', 'Sind Erfolgskriterien realistisch?'] },
    { bereich: 'Konsistenz', fragen: ['Passen Erfolgskriterien zu den Zielen?', 'Unterstützen sie Markenwerte?'] },
]

export default function Erfolgskriterien() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">B1: Erfolgskriterien-Set</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Target className="text-primary" />1. Schwellenwert-Tabelle</CardTitle>
          <CardDescription>Messbare Erfolgskriterien für den Design Sprint.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold">Kriterium</TableHead>
                  <TableHead className="font-bold">Min</TableHead>
                  <TableHead className="font-bold text-primary">Ziel (Target)</TableHead>
                  <TableHead className="font-bold">Stretch</TableHead>
                  <TableHead className="font-bold">Methode</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {successCriteria.map((item) => (
                  <TableRow key={item.criterion}>
                    <TableCell className="font-medium">{item.criterion}</TableCell>
                    <TableCell>{item.min}</TableCell>
                    <TableCell className="font-bold text-primary">{item.goal}</TableCell>
                    <TableCell>{item.stretch}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{item.method}</TableCell>
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
                <CardTitle className="flex items-center gap-2 text-lg"><Calendar className="text-primary size-5" />2. Meilensteine</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-sm">
                    {milestones.map(item => (
                         <li key={item.zeitpunkt} className="flex items-start gap-3">
                            <Check className="size-4 text-primary mt-1" />
                            <div>
                                <p className="font-semibold">{item.zeitpunkt}</p>
                                <p className="text-xs text-muted-foreground">{item.ziel}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg"><ListChecks className="text-primary size-5" />3. Peer-Review Leitfaden</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 text-xs">
                {reviewLeitfaden.map(item => (
                  <div key={item.bereich}>
                      <h4 className="font-bold border-b pb-1 mb-1">{item.bereich}</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-0.5">
                          {item.fragen.map(frage => <li key={frage}>{frage}</li>)}
                      </ul>
                  </div>
                ))}
              </div>
            </CardContent>
        </Card>
      </div>

       <Card className="border-primary/50 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg"><CheckCircle className="text-primary size-5" />Review-Routine</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Wir prüfen diese Kriterien am Ende jedes Sprint-Tages (Check-out), um sicherzustellen, dass unser Prototyp die Markenwerte <strong className="text-foreground">Vertrauen, Kompetenz und Nähe</strong> erfüllt.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
