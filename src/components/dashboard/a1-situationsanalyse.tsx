import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, FileText, User, AlertTriangle, Zap, Smile, TrendingDown, GanttChartSquare } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const journeyData = [
  {
    phase: "1. Awareness",
    aktionen: "Erhält Wohnungszusage; liest Mietvertrag.",
    touchpoints: "E-Mail, Mietvertrag-PDF.",
    gedanken: "\"Juhu! Aber wie zahlen wir 4'500 CHF Kaution bis Freitag?\".",
    emotionen: "🎉 Euphorie / 😟 Stress",
    painPoint: "Liquiditäts-Schock durch hohe Kautionssumme."
  },
  {
    phase: "2. Consideration",
    aktionen: "Vergleich Bankdepot vs. Kautionsversicherung.",
    touchpoints: "Google, UBS Webseite, WhatsApp.",
    gedanken: "\"Braucht die Bank von jedem eine Unterschrift?\".",
    emotionen: "🤔 Nachdenklich / 😕 Verwirrt",
    painPoint: "Unklare Informationen für WG-Kollektiv."
  },
  {
    phase: "3. Purchase (Kritisch)",
    aktionen: "Versucht Online-Eröffnung; Koordination Unterschriften.",
    touchpoints: "UBS Filiale, Postversand.",
    gedanken: "\"Wir schaffen den physischen Termin nie!\".",
    emotionen: "😫 Frustration / 😰 Angst",
    painPoint: "Medienbruch: Physische Unterschriftenpflicht blockiert Prozess."
  },
  {
    phase: "4. Retention",
    aktionen: "Kaution hinterlegt; Verwaltung Fixkosten.",
    touchpoints: "E-Banking App, WG-Küche.",
    gedanken: "\"Warum muss ich jedem wegen Geld hinterherrennen?\".",
    emotionen: "😐 Neutral / 😒 Genervt",
    painPoint: "Intransparenz bei Aufteilung laufender Kosten."
  },
  {
    phase: "5. Advocacy",
    aktionen: "Berichtet Freunden vom Umzug.",
    touchpoints: "Persönliches Gespräch.",
    gedanken: "\"Wohnung super, aber der Bankkram war die Hölle.\".",
    emotionen: "👎 Enttäuscht",
    painPoint: "Negative Mundpropaganda trotz gutem Produkt."
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
            <h3 className="font-semibold text-lg mb-2 text-primary">Kontext</h3>
            <p className="text-muted-foreground mb-4">Der Lebensmoment „Erste eigene Wohnung“ ist für junge Erwachsene emotional bedeutend und finanziell anspruchsvoll. Bei WGs sind die <strong className="text-foreground">Solidarhaftung</strong> und die Koordination der Kaution bei <strong className="text-foreground">Mieterwechseln</strong> die grössten Schmerzpunkte.</p>
            
            <h3 className="font-semibold text-lg mb-2 text-primary">Zielgruppe</h3>
            <div className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
              <h4 className="font-semibold flex items-center gap-2"><User className="size-5 text-primary"/>Persona: Jan (21), Student, WG-Neuling</h4>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mt-2">
                <li>Zieht erstmals aus dem Elternhaus aus; begrenztes Budget.</li>
                <li>Wenig Erfahrung mit Verträgen; will Konflikte vermeiden.</li>
                <li>Erwartet digitale, einfache Lösungen sowie Sicherheit & Kompetenz von der UBS.</li>
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
            <div className="border-2 border-primary rounded-lg p-4 bg-primary/5 shadow-sm">
              <h4 className="font-bold text-primary">Manage Closely (High Power/Interest)</h4>
              <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
                <li><span className="text-foreground font-medium">Hauptmieter:in:</span> Finanzielles Risiko & Rechtspflicht.</li>
                <li><span className="text-foreground font-medium">UBS-Berater:in:</span> Schnittstelle & Validierung.</li>
                <li><span className="text-foreground font-medium">Vermieter:in:</span> Verlangt Kautionsbestätigung.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-card shadow-sm">
              <h4 className="font-bold">Keep Satisfied (High Power/Low Interest)</h4>
              <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
                <li>Rechtsdienst (UBS): Prüfung der Verträge.</li>
                <li>Versicherungen: Konkurrenzprodukte.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-card shadow-sm">
              <h4 className="font-bold">Keep Informed (Low Power/High Interest)</h4>
              <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
                <li>WG-Mitglieder: Finanziell beteiligt.</li>
                <li>Eltern / Bürgen: Stellen oft Liquidität.</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-card shadow-sm">
              <h4 className="font-bold">Monitor (Low Power/Low Interest)</h4>
              <p className="mt-2 text-muted-foreground italic text-xs">Allgemeine Marktbegleiter & Verbände.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GanttChartSquare className="text-primary" />
            <span>Customer Journey Map</span>
          </CardTitle>
          <CardDescription>Die Phase "Purchase" zeigt das höchste Abwanderungsrisiko durch langsame Prozesse.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[140px] font-bold">Phase</TableHead>
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
                      <div className="text-xs italic">"{item.gedanken}"</div>
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
          <p className="text-xs text-yellow-600 mt-4 flex items-center gap-2">
            <TrendingDown className="size-3" /> 
            <strong>Abwanderungsrisiko:</strong> Langsame physische Prozesse führen oft zum Wechsel zu Kautionsversicherungen.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg"><AlertTriangle className="text-primary size-5" /><span>Problem Statement & POV</span></CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p><strong>Problem:</strong> Junge Erwachsene in WGs erleben langsame, papierbasierte Prozesse bei der Kautionseröffnung, was zu Stress mit Vermietern führt.</p>
            <p className="border-t pt-4 italic text-muted-foreground"><strong>POV:</strong> Jan braucht eine schnelle, simultane und rechtssichere digitale Abwicklung, da die heutige sequentielle Signatur ein grosser Stressfaktor ist.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg"><FileText className="text-primary size-5" /><span>Top 3 HMW-Fragen</span></CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Wie könnten wir die Kautions-Signatur <span className="text-foreground font-medium">100% digital und simultan</span> ermöglichen?</li>
              <li>Wie könnten wir WG-Finanzen für alle Bewohner <span className="text-foreground font-medium">transparent und fair</span> abbilden?</li>
              <li>Wie könnten wir das <span className="text-foreground font-medium">Budget-Setup automatisieren</span> und vereinfachen?</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><Target className="text-primary"/><span>SMART-Ziele</span></CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2 text-primary"><Zap className="size-4" />1. Digitaler Prozess</h4>
                <p className="text-muted-foreground">Entwicklung eines Prototyps, der die Eröffnungszeit auf <strong className="text-foreground">&lt; 10 Min.</strong> reduziert (bis Tag 5).</p>
            </div>
            <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2 text-primary"><Smile className="size-4" />2. Usability</h4>
                <p className="text-muted-foreground"><strong className="text-foreground">100% Task Success Rate</strong> beim "Mitbewohner-Invite" im Test an Tag 4.</p>
            </div>
            <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2 text-primary"><Users className="size-4" />3. Vertrauen</h4>
                <p className="text-muted-foreground">Mindestens <strong className="text-foreground">80% positive Rückmeldungen</strong> zur Rechtssicherheit im Nutzertest.</p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
