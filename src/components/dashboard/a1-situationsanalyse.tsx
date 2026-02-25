import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Lightbulb, FileText, User, AlertTriangle, Zap, Smile, ShieldCheck, TrendingDown, GanttChartSquare } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const journeyData = [
    {
        phase: "1. Awareness",
        aktionen: "Erhält Wohnungszusage; liest Mietvertrag.",
        touchpoints: "E-Mail, Mietvertrag-PDF.",
        gedanken: "\"Juhu! Aber wie zahlen wir 4'500 CHF Kaution bis Freitag?\".",
        emotionen: "🎉 Euphorie schlägt um in 😟 Stress.",
        painPoint: "Liquiditäts-Schock durch hohe Kautionssumme."
    },
    {
        phase: "2. Consideration",
        aktionen: "Vergleich Bankdepot vs. Kautionsversicherung; WG-Chat-Diskussion.",
        touchpoints: "Google, UBS Webseite, WhatsApp.",
        gedanken: "\"Braucht die Bank von jedem Mitbewohner eine Unterschrift?\".",
        emotionen: "🤔 Nachdenklich, 😕 Verwirrt.",
        painPoint: "Unklare Informationen für den Spezialfall WG-Kollektiv."
    },
    {
        phase: "3. Purchase",
        aktionen: "Versucht Online-Eröffnung; muss Termin für physische Unterschriften aller 3 Personen koordinieren.",
        touchpoints: "UBS Filiale (Schalter), Postversand.",
        gedanken: "\"Sarah arbeitet, Lukas ist im Militär – wir schaffen den Termin nie!\".",
        emotionen: "😫 Frustration, 😰 Angst vor Wohnungsverlust.",
        painPoint: "Medienbruch & Koordination: Physische Unterschriftenpflicht blockiert den Prozess."
    },
    {
        phase: "4. Retention",
        aktionen: "Kaution hinterlegt; Jan verwaltet laufende Fixkosten (Strom, WLAN) manuell.",
        touchpoints: "E-Banking App, WG-Küche.",
        gedanken: "\"Warum muss ich immer jedem wegen Geld hinterherrennen?\"",
        emotionen: "😐 Neutral bis 😒 Genervt.",
        painPoint: "Intransparenz bei der Aufteilung laufender WG-Kosten."
    },
    {
        phase: "5. Advocacy",
        aktionen: "Berichtet Freunden vom Umzug.",
        touchpoints: "Persönliches Gespräch.",
        gedanken: "\"Wohnung super, aber der Bankkram war die Hölle.\"",
        emotionen: "👎 Enttäuscht vom Erlebnis.",
        painPoint: "Negative Mundpropaganda trotz gutem Bankprodukt."
    }
];

export default function Situationsanalyse() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">A1: Situationsanalyse & Zieldefinition</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GanttChartSquare className="text-primary" />
            <span>1. Ist-Analyse (Situationsanalyse)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Kontext & Persona</h3>
            <p className="text-muted-foreground mb-4">Der Lebensmoment „Erste eigene Wohnung“ ist für junge Erwachsene emotional bedeutend und finanziell anspruchsvoll. Besonders bei Wohngemeinschaften (WGs) sind die <strong className="text-foreground">Solidarhaftung</strong> und die Koordination der Mietkaution bei <strong className="text-foreground">Mieterwechseln</strong> die grössten emotionalen Schmerzpunkte.</p>
             <div className="border-l-4 border-primary pl-4 py-2 bg-primary/5">
                <h4 className="font-semibold flex items-center gap-2"><User className="size-5 text-primary"/>Persona: Jan (21), Student, gründet seine erste 3er-WG.</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    <li><strong className="text-foreground">Bedürfnis:</strong> Jan braucht einen rechtlich sicheren Weg, die Kaution mit seinen Freunden zu teilen, ohne die gesamte finanzielle Last allein zu tragen.</li>
                    <li><strong className="text-foreground">Insight:</strong> Er fühlt sich trotz digitalem Zeitalter von den analogen Bankprozessen im Stich gelassen.</li>
                </ul>
             </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Users className="text-primary" /><span>Erweiterte Stakeholder-Map</span></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="border-2 border-primary rounded-lg p-4 bg-primary/5 shadow-md">
                <h4 className="font-bold text-lg text-primary">Manage Closely</h4>
                <p className="text-xs text-muted-foreground">(High Power / High Interest)</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>Hauptmieter:in: Trägt das finanzielle Risiko und die rechtliche Verantwortung.</li>
                    <li>UBS-Kundenberater:in: Schnittstelle für Rückfragen und Validierung.</li>
                    <li>Vermieter:in / Verwaltung: Verlangt Kautionsbestätigung.</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4 bg-card">
                <h4 className="font-bold text-lg">Keep Satisfied</h4>
                <p className="text-xs text-muted-foreground">(High Power / Low Interest)</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>Rechtsdienst (UBS): Prüft Rechtmässigkeit.</li>
                    <li>Versicherungen: Konkurrenz durch Kautionsversicherungen.</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4 bg-card">
                <h4 className="font-bold text-lg">Keep Informed</h4>
                <p className="text-xs text-muted-foreground">(Low Power / High Interest)</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>WG-Mitglieder: Finanziell beteiligt.</li>
                    <li>Eltern / Bürgen: Stellen oft Liquidität sicher.</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4 bg-card">
                <h4 className="font-bold text-lg">Monitor</h4>
                <p className="text-xs text-muted-foreground">(Low Power / Low Interest)</p>
              </div>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GanttChartSquare className="text-primary" />
            <span>Detaillierte Customer Journey Map</span>
          </CardTitle>
           <CardDescription>Die kritischsten Phasen sind "Purchase" und "Retention", wo die grössten Pain Points und das höchste Abwanderungsrisiko liegen.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">Phase</TableHead>
                  <TableHead>Aktionen</TableHead>
                  <TableHead>Touchpoints</TableHead>
                  <TableHead>Gedanken</TableHead>
                  <TableHead>Emotionen</TableHead>
                  <TableHead>Pain Point</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {journeyData.map((item) => (
                  <TableRow key={item.phase} className={item.phase.includes('Purchase') ? 'bg-destructive/5' : ''}>
                    <TableCell className="font-semibold">{item.phase}</TableCell>
                    <TableCell>{item.aktionen}</TableCell>
                    <TableCell>{item.touchpoints}</TableCell>
                    <TableCell className="italic text-muted-foreground">{item.gedanken}</TableCell>
                    <TableCell>{item.emotionen}</TableCell>
                    <TableCell className={`font-medium ${item.phase.includes('Purchase') ? 'text-destructive' : ''}`}>{item.painPoint}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
           <p className="text-sm text-yellow-600/90 mt-4 flex items-center gap-2"><TrendingDown className="size-4" /> <strong>Abwanderungsrisiko:</strong> Der langsame, physische Prozess in Phase 3 (Purchase) führt oft dazu, dass Kunden zu schnelleren Kautionsversicherungen abwandern.</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><AlertTriangle className="text-primary" /><span>Problem Statement</span></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Junge Erwachsene in WGs erleben langsame, papierlastige Prozesse bei der Eröffnung von Mietkautionskonten, was zu Stress mit Vermietern und finanzieller Unsicherheit führt.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><FileText className="text-primary" /><span>Top HMW-Frage</span></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">"Wie könnten wir die Kautions-Signatur so gestalten, dass alle WG-Bewohner gleichzeitig und ortsunabhängig digital signieren können?".</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><Target className="text-primary"/><span>SMART-Ziele</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div>
                <h4 className="font-semibold flex items-center gap-2"><Zap className="size-4 text-primary" />Ziel 1 – Prototyp</h4>
                <p className="text-muted-foreground pl-6">Klickbarer Prototyp für WG-Kautionseröffnung in &lt; 10 Min. bis Tag 5.</p>
            </div>
            <div>
                <h4 className="font-semibold flex items-center gap-2"><Smile className="size-4 text-primary" />Ziel 2 – Usability</h4>
                <p className="text-muted-foreground pl-6">100% Task Success Rate beim "Mitbewohner-Invite" im Test an Tag 4.</p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}