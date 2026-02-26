import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle2, FileText, Target, Users, Zap } from 'lucide-react';

export default function A1Zieldefinition() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">A1.4 Problem Statement, HMW & SMART-Ziele</h1>

      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <AlertTriangle className="text-primary size-5" />
            Problem Statement & POV
          </CardTitle>
          <CardDescription>Sachlich, präzise und auf den Kern der Problemstruktur ausgerichtet.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 text-base leading-7">
          <div>
            <h3 className="font-semibold text-lg">Problem Statement</h3>
            <p>
              Junge Erwachsene in WGs erleben bei der Eröffnung eines Mietkautionskontos langsame, papierbasierte
              und sequentielle Prozesse. Dies führt unter Fristdruck zu Stress, Koordinationsproblemen und
              Abwanderung zu Kautionsversicherungen.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">POV (Nutzerperspektive)</h3>
            <p>
              Jan braucht eine schnelle, simultane und rechtssichere digitale Abwicklung, da die heutige
              sequentielle Signatur unter Zeitdruck einen erheblichen Stressfaktor darstellt.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Ziel des Projekts</h3>
            <p>
              Reduktion der Prozessdauer, Eliminierung von Medienbrüchen und messbare Absicherung der
              wahrgenommenen Rechtssicherheit bei der WG-Kautionseröffnung.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileText className="text-primary size-5" /> Top 3 HMW-Fragen
          </CardTitle>
          <CardDescription>Präzise und lösungsorientierte Leitfragen für die Konzeptarbeit.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border p-4 space-y-3">
            <h3 className="font-semibold text-lg">HMW 1: Digitale simultane Signatur</h3>
            <p className="text-muted-foreground">Wie könnten wir die Kautions-Signatur 100% digital und simultan ermöglichen?</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>rechtlich anerkannte digitale Identifikation ohne Medienbruch</li>
              <li>simultane Signatur ohne sequentielle Blockade</li>
              <li>transparente Statusanzeige für alle Beteiligten</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4 space-y-3">
            <h3 className="font-semibold text-lg">HMW 2: Transparenz & Fairness in WG-Finanzen</h3>
            <p className="text-muted-foreground">Wie könnten wir WG-Finanzen für alle Bewohner transparent und fair abbilden?</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>automatische Split-Logik für WG-Anteile</li>
              <li>dokumentierte Mitbewohnerwechsel</li>
              <li>klare Nachweise für Vermieter und Bewohner</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4 space-y-3">
            <h3 className="font-semibold text-lg">HMW 3: Budget-Setup automatisieren</h3>
            <p className="text-muted-foreground">Wie könnten wir das Budget-Setup automatisieren und vereinfachen?</p>
            <p>
              Erstmieter erleben kognitive Überlast in einer neuen Lebensphase. Eine automatisierte,
              nachvollziehbare Führung reduziert Fehler und erhöht Sicherheit.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Target className="text-primary size-5" /> SMART-Ziele
          </CardTitle>
          <CardDescription>Messbar, präzise und prüfungstauglich formuliert.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-lg border p-4 space-y-3">
            <Badge variant="secondary" className="gap-1"><Zap className="size-3" /> SMART-Ziel 1</Badge>
            <h3 className="font-semibold text-lg">Prozessdauer</h3>
            <p>
              Die vollständige Eröffnung inklusive Multi-Party-Signatur dauert im Test maximal 10 Minuten.
            </p>
            <p className="text-muted-foreground">
              Messung: Start „WG-Kaution starten“ → Ende „Bestätigung versendet“.
            </p>
          </div>

          <div className="rounded-lg border p-4 space-y-3">
            <Badge variant="secondary" className="gap-1"><Users className="size-3" /> SMART-Ziel 2</Badge>
            <h3 className="font-semibold text-lg">Task Success</h3>
            <p>
              100% der Testpersonen können einen Mitbewohner erfolgreich einladen und den Status nachvollziehen.
            </p>
            <p className="text-muted-foreground">
              Messung: Invite ausgelöst + Status ersichtlich + keine Hilfestellung erforderlich.
            </p>
          </div>

          <div className="rounded-lg border p-4 space-y-3">
            <Badge variant="secondary" className="gap-1"><CheckCircle2 className="size-3" /> SMART-Ziel 3</Badge>
            <h3 className="font-semibold text-lg">Vertrauen</h3>
            <p>
              Mindestens 80% der Testpersonen bewerten die Rechtssicherheit mit 4 oder 5 auf einer 5er-Skala.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
