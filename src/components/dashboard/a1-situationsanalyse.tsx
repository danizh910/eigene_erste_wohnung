import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, AlertTriangle, Lightbulb, CheckSquare } from 'lucide-react';

export default function Situationsanalyse() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">A1: Situationsanalyse &amp; Ziele</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="text-primary" />
              <span>Problem Statement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              "Junge Erwachsene in WGs erleben intransparente Prozesse bei der Kautionseröffnung, was zu Stress mit Vermietern führt."
            </p>
          </CardContent>
        </Card>

        <Card>
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
                 <ul className="mt-2 text-left list-disc list-inside text-xs">
                    <li>Bankberater</li>
                </ul>
              </div>
              <div className="border p-4 rounded-md bg-primary/10">
                <h4 className="font-semibold">Manage Closely</h4>
                <p className="text-xs text-muted-foreground">(High Power, High Interest)</p>
                <ul className="mt-2 text-left list-disc list-inside text-xs">
                    <li>WG-Bewohner</li>
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
                    <li>Eltern</li>
                </ul>
              </div>
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
              <li>Wie können wir den Prozess der Kautions-Signatur für alle WG-Mitglieder digital und nahtlos gestalten?</li>
              <li>Wie können wir ein einfaches Tool für das WG-Budgeting bereitstellen, das direkt mit dem Konto verknüpft ist?</li>
              <li>Wie können wir die Transparenz über den Status des Mietkautionskontos für alle Beteiligten (Mieter & Vermieter) erhöhen?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckSquare className="text-primary" />
              <span>SMART-Ziele</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Ziel 1: Beschleunigte Kautionseröffnung</h4>
                <p className="text-muted-foreground">Die Eröffnung eines Mietkautionskontos inkl. digitaler Signatur aller WG-Mitglieder soll bis zum Ende des Sprints (Tag 5) in unter 10 Minuten möglich sein.</p>
              </li>
              <li>
                <h4 className="font-semibold">Ziel 2: Vereinfachtes WG-Budgeting</h4>
                <p className="text-muted-foreground">Innerhalb des Sprints soll ein Prototyp für eine WG-Budgeting-Funktion entwickelt werden, der bei Usability-Tests eine Zufriedenheitsrate von über 80% erreicht.</p>
              </li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
