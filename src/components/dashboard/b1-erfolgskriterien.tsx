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
import { Check, Clock, Smile, TrendingUp } from 'lucide-react';

const criteria = [
  {
    kategorie: 'Effizienz',
    kriterium: 'Task Completion Time',
    art: 'Quanti',
    ziel: '< 5 Min',
    icon: Clock,
  },
  {
    kategorie: 'Zufriedenheit',
    kriterium: 'Nutzer-Feedback',
    art: 'Quali',
    ziel: '"Einfach & Sicher"',
    icon: Smile,
  },
  {
    kategorie: 'Effektivität',
    kriterium: 'Task Success Rate',
    art: 'Quanti',
    ziel: '100%',
    icon: Check,
  },
];

export default function Erfolgskriterien() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">B1: Erfolgskriterien-Set</h1>
      <Card>
        <CardHeader>
          <CardTitle>Erfolgskriterien</CardTitle>
          <CardDescription>
            Messung des Erfolgs unserer Lösungsvorschläge.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kategorie</TableHead>
                  <TableHead>Kriterium</TableHead>
                  <TableHead>Art</TableHead>
                  <TableHead>Zielwert</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {criteria.map((item) => (
                  <TableRow key={item.kriterium}>
                    <TableCell className="font-medium flex items-center gap-2"><item.icon className="size-4 text-primary" /> {item.kategorie}</TableCell>
                    <TableCell>{item.kriterium}</TableCell>
                    <TableCell>
                      <Badge variant={item.art === 'Quanti' ? 'default' : 'secondary'} className={item.art === 'Quanti' ? 'bg-primary text-primary-foreground' : ''}>
                        {item.art}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold text-primary">{item.ziel}</TableCell>
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
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-primary" />
              <span>Schwellenwerte</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <div className="text-center">
                <p className="text-2xl font-bold">70%</p>
                <p className="text-sm text-muted-foreground">Min</p>
              </div>
              <div className="text-center text-primary">
                <p className="text-2xl font-bold">90%</p>
                <p className="text-sm font-semibold">Ziel</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-muted-foreground">Stretch</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Review-Zeitpunkte</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Ende Tag 2 (Ideen-Check)</li>
              <li>Ende Tag 4 (Test-Check)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
