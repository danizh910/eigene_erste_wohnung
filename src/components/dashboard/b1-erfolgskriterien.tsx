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
import { Badge } from '@/components/ui/badge';
import { Check, Clock, Smile, TrendingUp, Zap, Target, HardHat, FileCheck, ThumbsUp, Scale, Building, ListChecks, MessageSquare, Calendar } from 'lucide-react';

const quantCriteria = [
  { kpi: 'Task Completion Time', ziel: '< 5 Minuten', zeitpunkt: 'Usability-Test Tag 4', icon: Clock },
  { kpi: 'Task Success Rate', ziel: '100 %', zeitpunkt: 'Usability-Test Tag 4', icon: Target },
  { kpi: 'Fehlerquote', ziel: '0 kritische Abbrüche', zeitpunkt: 'Usability-Test Tag 4', icon: HardHat },
  { kpi: 'Invite-Funktion funktioniert', ziel: '100 % erfolgreich', zeitpunkt: 'Usability-Test Tag 4', icon: Zap },
];

const qualCriteria = [
  { kriterium: 'Subjektive Verständlichkeit', ziel: '„Selbsterklärend“', icon: FileCheck },
  { kriterium: 'Vertrauen in Rechtssicherheit', ziel: 'Hoch', icon: Scale },
  { kriterium: 'Wahrgenommene Stressreduktion', ziel: 'Spürbar', icon: ThumbsUp },
  { kriterium: 'Markenwahrnehmung UBS', ziel: 'Kompetent & unterstützend', icon: Building },
]

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
          <CardTitle className="flex items-center gap-2"><TrendingUp className="text-primary" />1. Quantitative Erfolgskriterien</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>KPI</TableHead>
                  <TableHead>Zielwert</TableHead>
                  <TableHead>Messzeitpunkt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quantCriteria.map((item) => (
                  <TableRow key={item.kpi}>
                    <TableCell className="font-medium flex items-center gap-2"><item.icon className="size-4 text-muted-foreground" /> {item.kpi}</TableCell>
                    <TableCell className="font-semibold text-primary">{item.ziel}</TableCell>
                    <TableCell>{item.zeitpunkt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Smile className="text-primary" />2. Qualitative Erfolgskriterien</CardTitle>
           <CardDescription>
            Messmethode: Kurzinterview nach Task, 1–5 Skala (Verständlichkeit, Vertrauen, Einfachheit) & offene Feedback-Fragen.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qualCriteria.map((item) => (
                    <div key={item.kriterium} className="flex items-start gap-3 rounded-lg border p-4">
                        <item.icon className="size-5 text-primary mt-1" />
                        <div>
                            <p className="font-semibold">{item.kriterium}</p>
                            <p className="text-sm text-muted-foreground">Ziel: <span className="font-medium text-primary">{`"${item.ziel}"`}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Calendar className="text-primary" />3. Meilensteine & Review-Zeitpunkte</CardTitle>
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
              <CardTitle className="flex items-center gap-2"><ListChecks className="text-primary" />Peer-Review Leitfaden</CardTitle>
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
    </div>
  );
}
