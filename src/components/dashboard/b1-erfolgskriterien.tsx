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

const criteria = [
  {
    goal: 'Beschleunigte Kautionseröffnung',
    criterion: 'Task Completion Time < 10 Min',
    type: 'Quanti',
    method: 'Usability-Test-Messung',
    min: '15 Min',
    ziel: '10 Min',
    stretch: '8 Min',
  },
  {
    goal: 'Erhöhtes Nutzervertrauen',
    criterion: 'Nutzervertrauen in Rechtsicherheit',
    type: 'Quali',
    method: 'Post-Task-Befragung (Skala 1-5)',
    min: '3.5/5',
    ziel: '4.2/5',
    stretch: '4.7/5',
  },
  {
    goal: 'Reduzierte Supportanfragen',
    criterion: 'Anzahl der Anfragen zur Kautionseröffnung',
    type: 'Quanti',
    method: 'Analyse von Support-Tickets',
    min: '-15%',
    ziel: '-30%',
    stretch: '-50%',
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
                  <TableHead>Ziel</TableHead>
                  <TableHead>Erfolgskriterium</TableHead>
                  <TableHead>Art</TableHead>
                  <TableHead>Messmethode</TableHead>
                  <TableHead>Min</TableHead>
                  <TableHead>Ziel</TableHead>
                  <TableHead>Stretch</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {criteria.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.goal}</TableCell>
                    <TableCell>{item.criterion}</TableCell>
                    <TableCell>
                      <Badge variant={item.type === 'Quanti' ? 'default' : 'secondary'} className={item.type === 'Quanti' ? 'bg-primary' : ''}>
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.method}</TableCell>
                    <TableCell>{item.min}</TableCell>
                    <TableCell className="font-semibold text-primary">{item.ziel}</TableCell>
                    <TableCell>{item.stretch}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
