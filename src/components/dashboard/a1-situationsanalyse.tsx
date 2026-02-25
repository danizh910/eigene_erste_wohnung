import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, AlertTriangle, Lightbulb, CheckSquare, User, Map, MoveRight } from 'lucide-react';

export default function Situationsanalyse() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">A1: Situationsanalyse &amp; Zieldefinition</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="text-primary" />
              <span>Problem Statement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              "Junge Erwachsene in WGs [Zielgruppe] erleben langsame und papierlastige Prozesse [Problem] bei der Kautionseröffnung [Kontext], was zu Frust mit Vermietern und finanzieller Unsicherheit führt [negative Auswirkung]."
            </p>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="text-primary" />
              <span>Point of View (POV)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              "Jan (21, WG-Neuling) braucht einen rechtlich sicheren Weg, die Kaution mit Freunden zu teilen, weil er Angst vor unfairen Kosten bei Mitbewohnerwechseln hat."
            </p>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              <span>Stakeholder-Map: Power-Interest-Matrix</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 text-center text-sm">
              <div className="border p-4 rounded-md bg-secondary/50">
                <h4 className="font-semibold">Keep Satisfied</h4>
                <p className="text-xs text-muted-foreground">(High Power, Low Interest)</p>
              </div>
              <div className="border p-4 rounded-md bg-primary/10">
                <h4 className="font-semibold">Manage Closely</h4>
                <p className="text-xs text-muted-foreground">(High Power, High Interest)</p>
                <ul className="mt-2 text-left list-disc list-inside text-xs">
                    <li>Hauptmieter</li>
                    <li>UBS-Berater</li>
                    <li>Vermieter</li>
                </ul>
              </div>
              <div className="border p-4 rounded-md bg-secondary/50">
                <h4 className="font-semibold">Monitor</h4>
                <p className="text-xs text-muted-foreground">(Low Power, Low Interest)</p>
              </div>
              <div className="border p-4 rounded-md bg-secondary/50">
                <h4 className="font-semibold">Keep Informed</h4>
                <p className="text-xs text-muted-foreground">(Low Power, High Interest)</p>
                <ul className="mt-2 text-left list-disc list-inside text-xs">
                    <li>WG-Mitglieder</li>
                    <li>Eltern</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="text-primary" />
              <span>Customer Journey (Ist-Zustand)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between overflow-x-auto pb-4 -mx-4 px-4">
              {['Awareness', 'Consideration', 'Purchase', 'Retention', 'Advocacy'].map((phase, index, arr) => (
                <div key={phase} className="flex items-center shrink-0">
                  <div className={`text-center px-2 ${phase === 'Purchase' ? 'text-primary' : ''}`}>
                    <div className={`font-semibold ${phase === 'Purchase' ? 'text-primary font-bold' : ''}`}>{phase}</div>
                    {phase === 'Purchase' && (
                      <div className="text-xs mt-1 text-red-500 whitespace-nowrap">Pain Point: <br />Physisches Unterschreiben</div>
                    )}
                  </div>
                  {index < arr.length - 1 && <MoveRight className="mx-2 shrink-0 text-muted-foreground" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="text-primary" />
              <span>HMW-Fragen (Top 3)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Wie könnten wir die Kautions-Signatur 100% digital gestalten?</li>
              <li>Wie könnten wir WG-Finanzen für alle Bewohner transparent machen?</li>
              <li>Wie könnten wir das Budget-Setup automatisieren?</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckSquare className="text-primary" />
              <span>SMART-Ziele</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Ziel 1: Digitaler Prototyp</h4>
                <p className="text-muted-foreground">Digitaler Prototyp für WG-Kautionen in &lt; 10 Min. bis Tag 5.</p>
              </li>
              <li>
                <h4 className="font-semibold">Ziel 2: Task-Erfolgsrate</h4>
                <p className="text-muted-foreground">100% Task-Erfolgsrate beim Mitbewohner-Invite in Usability-Tests.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
