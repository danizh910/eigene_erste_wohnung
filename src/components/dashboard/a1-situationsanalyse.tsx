import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, AlertTriangle, Lightbulb, CheckSquare, Map, Info } from 'lucide-react';

export default function Situationsanalyse() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">A1: Situationsanalyse &amp; Zieldefinition (Detail-Ansicht)</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="text-primary" />
              <span>1. Kontext &amp; Ausgangslage</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Der Übergang in die erste eigene Wohnung ist für junge Erwachsene ein kritischer «Life Moment». In der Schweiz ist dieser Prozess stark durch die Mietkaution (oft 3 Monatsmieten) geprägt, was für Studierende und Lehrabgänger eine enorme finanzielle Hürde darstellt.
            </p>
            <p className="text-muted-foreground">
              <strong>Ist-Zustand:</strong> Der aktuelle Prozess bei der UBS ist reaktiv. Kunden müssen physisch in die Filiale oder Dokumente per Post senden, was bei WGs (Wohngemeinschaften) durch die Koordination mehrerer Personen zu massiven Verzögerungen führt.
            </p>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              <span>2. Erweiterte Stakeholder-Map</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 text-center text-sm">
              <div className="border p-4 rounded-md bg-secondary/50">
                <h4 className="font-semibold">Keep Satisfied</h4>
                <p className="text-xs text-muted-foreground">(High Power, Low Interest)</p>
                <ul className="mt-2 text-left list-disc list-inside text-xs space-y-1">
                    <li>Rechtsdienst (UBS)</li>
                    <li>Versicherungen</li>
                </ul>
              </div>
              <div className="border p-4 rounded-md bg-primary/10">
                <h4 className="font-semibold">Manage Closely</h4>
                <p className="text-xs text-muted-foreground">(High Power, High Interest)</p>
                <ul className="mt-2 text-left list-disc list-inside text-xs space-y-1">
                    <li>Hauptmieter:in</li>
                    <li>UBS-Kundenberater:in</li>
                    <li>Vermieter:in / Verwaltung</li>
                </ul>
              </div>
              <div className="border p-4 rounded-md bg-secondary/50">
                <h4 className="font-semibold">Monitor</h4>
                <p className="text-xs text-muted-foreground">(Low Power, Low Interest)</p>
              </div>
              <div className="border p-4 rounded-md bg-secondary/50">
                <h4 className="font-semibold">Keep Informed</h4>
                <p className="text-xs text-muted-foreground">(Low Power, High Interest)</p>
                <ul className="mt-2 text-left list-disc list-inside text-xs space-y-1">
                    <li>WG-Mitglieder</li>
                    <li>Eltern / Bürgen</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="text-primary" />
              <span>3. Detaillierte Customer Journey &amp; Pain Points</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div>
                <h4 className="font-semibold">Awareness</h4>
                <p className="text-muted-foreground">Suche auf Portalen. Emotion: Vorfreude gemischt mit Stress.</p>
             </div>
             <div>
                <h4 className="font-semibold">Consideration</h4>
                <p className="text-muted-foreground">Vergleich von Bankdepot vs. Versicherung. Touchpoint: UBS Webseite (oft zu komplex für Erst-Mieter).</p>
             </div>
             <div>
                <h4 className="font-semibold text-primary">Purchase (Der kritische Punkt)</h4>
                <p className="text-muted-foreground">Eröffnung des Mietzinsdepots.</p>
                <p className="text-muted-foreground mt-1"><strong>Aktion:</strong> Alle WG-Mitglieder müssen unterschreiben.</p>
                <p className="text-red-500 mt-1"><strong>Pain Point:</strong> Physische Unterschriften-Rallye. Postwege dauern 3-5 Tage. Der Vermieter droht mit Absage, da die Bestätigung fehlt.</p>
             </div>
             <div>
                <h4 className="font-semibold">Retention</h4>
                <p className="text-muted-foreground">Monatliche Mietzahlungen und Budgetverwaltung.</p>
                <p className="text-red-500 mt-1"><strong>Pain Point:</strong> Intransparenz, wer wem wie viel für Internet, Strom und Nebenkosten schuldet.</p>
             </div>
             <div>
                <h4 className="font-semibold">Advocacy</h4>
                <p className="text-muted-foreground">Empfehlung an Freunde. Nur bei reibungslosem Prozess.</p>
             </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="text-primary" />
              <span>4. Problem Statement &amp; POV</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
                <h4 className="font-semibold">Problem Statement</h4>
                <p className="text-muted-foreground">
                "Junge Erwachsene in WGs [Zielgruppe] erleben langsame, papierlastige und intransparente Prozesse [Problem] bei der Kautionseröffnung [Kontext], was zu existenziellem Stress mit Vermietern und potenzieller Obdachlosigkeit führt [negative Auswirkung]."
                </p>
            </div>
            <div>
                <h4 className="font-semibold">Point of View (POV)</h4>
                <p className="text-muted-foreground">
                "Jan (21, WG-Neuling) braucht eine rechtlich sichere und simultan signierbare Lösung für die Kaution [Bedürfnis], weil er trotz langjähriger Bankbeziehung das Gefühl hat, von der Bürokratie im Stich gelassen zu werden [überraschender Insight]."
                </p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="text-primary" />
              <span>5. Strategische HMW-Fragen</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Wie könnten wir die Kautions-Signatur so gestalten, dass alle WG-Bewohner gleichzeitig und ortsunabhängig auf ihrem Smartphone signieren können?</li>
              <li>Wie könnten wir dem Vermieter die Kautionsbestätigung in Echtzeit (Instant Confirmation) digital zustellen?</li>
              <li>Wie könnten wir ein 'Miet-Starter-Budget' integrieren, das automatisch alle Fixkosten (Serafe, Strom, WLAN) für die WG vor-kalkuliert?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckSquare className="text-primary" />
              <span>6. SMART-Ziele</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Ziel 1 (Prototyp)</h4>
                <p className="text-muted-foreground">Bis Freitag (Tag 5) erstellen wir einen klickbaren Prototyp, der die Eröffnungszeit eines WG-Kautionskontos von aktuell ~5 Tagen auf unter 10 Minuten reduziert.</p>
              </li>
              <li>
                <h4 className="font-semibold">Ziel 2 (Usability)</h4>
                <p className="text-muted-foreground">In den Nutzertests am Donnerstag erreichen wir eine Task Success Rate von 100% bei der Funktion «Mitbewohner zur Signatur einladen», gemessen an 5 Testpersonen.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
