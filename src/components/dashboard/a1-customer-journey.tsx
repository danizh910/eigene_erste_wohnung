import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingDown } from 'lucide-react';

const journeyData = [
  {
    phase: '1. Awareness',
    aktionen: 'Erhält Wohnungszusage; liest Mietvertrag.',
    touchpoints: 'E-Mail, Mietvertrag-PDF.',
    gedanken: '„Juhu! Aber wie zahlen wir 4’500 CHF Kaution bis Freitag?“',
    emotionen: '🎉 Euphorie / 😟 Stress',
    painPoint: 'Liquiditäts-Schock durch hohe Kautionssumme.',
  },
  {
    phase: '2. Consideration',
    aktionen: 'Vergleich Bankdepot vs. Kautionsversicherung.',
    touchpoints: 'Google, UBS Webseite, WhatsApp.',
    gedanken: '„Braucht die Bank von jedem eine Unterschrift?“',
    emotionen: '🤔 Nachdenklich / 😕 Verwirrt',
    painPoint: 'Unklare Informationen für WG-Kollektiv.',
  },
  {
    phase: '3. Purchase (kritisch)',
    aktionen: 'Versucht Online-Eröffnung; koordiniert Unterschriften.',
    touchpoints: 'UBS Filiale, Postversand.',
    gedanken: '„Wir schaffen den physischen Termin nie!“',
    emotionen: '😫 Frustration / 😰 Angst',
    painPoint: 'Medienbruch: Physische Unterschriftenpflicht blockiert den Prozess.',
  },
  {
    phase: '4. Retention',
    aktionen: 'Kaution hinterlegt; Verwaltung laufender WG-Kosten.',
    touchpoints: 'E-Banking App, WG-Küche.',
    gedanken: '„Warum muss ich jedem wegen Geld hinterherrennen?“',
    emotionen: '😐 Neutral / 😒 Genervt',
    painPoint: 'Intransparenz bei der Aufteilung laufender Kosten.',
  },
  {
    phase: '5. Advocacy',
    aktionen: 'Erzählt Freund:innen vom Umzug.',
    touchpoints: 'Persönliches Gespräch, Social Media.',
    gedanken: '„Wohnung super, aber der Bankprozess war mühsam.“',
    emotionen: '👎 Enttäuscht',
    painPoint: 'Negative Mundpropaganda trotz gutem Kernprodukt.',
  },
];

export default function A1CustomerJourney() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">A1.3 Customer Journey Map</h1>

      <Card>
        <CardHeader>
          <CardTitle>Journey von WG-Kund:innen</CardTitle>
          <CardDescription>
            Die grösste Reibung entsteht in der Kaufphase durch sequentielle und analoge Prozessschritte.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[170px] font-bold">Phase</TableHead>
                  <TableHead className="font-bold">Aktionen / Touchpoints</TableHead>
                  <TableHead className="font-bold">Gedanken / Emotionen</TableHead>
                  <TableHead className="font-bold">Pain Point</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {journeyData.map((item) => (
                  <TableRow key={item.phase} className={item.phase.includes('Purchase') ? 'bg-destructive/5' : ''}>
                    <TableCell className="font-semibold">{item.phase}</TableCell>
                    <TableCell>
                      <div className="text-xs font-medium">{item.aktionen}</div>
                      <div className="text-[10px] text-muted-foreground mt-1">{item.touchpoints}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-xs italic">{item.gedanken}</div>
                      <div className="text-[10px] mt-1">{item.emotionen}</div>
                    </TableCell>
                    <TableCell className={`text-xs font-medium ${item.phase.includes('Purchase') ? 'text-destructive' : ''}`}>
                      {item.painPoint}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-yellow-700 mt-4 flex items-center gap-2">
            <TrendingDown className="size-4" />
            <strong>Abwanderungsrisiko:</strong> Je langsamer die Kaufphase, desto höher die Wechselwahrscheinlichkeit.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
