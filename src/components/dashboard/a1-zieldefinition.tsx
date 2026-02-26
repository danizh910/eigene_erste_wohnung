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
          <CardDescription>Objektiv beobachten, nutzerzentriert übersetzen und dann in Designfragen überführen.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-base leading-7">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Problem Statement (objektiv, beobachtbar)</h3>
            <p>
              <strong>Problem:</strong> Junge Erwachsene in WGs erleben langsame, papierbasierte Prozesse bei der
              Kautionseröffnung, was zu Stress mit Vermietern führt.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Warum diese Form?</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>beschreibt <strong className="text-foreground">wer</strong> (junge Erwachsene in WGs)</li>
              <li>beschreibt <strong className="text-foreground">was</strong> (langsamer papierbasierter Prozess)</li>
              <li>beschreibt <strong className="text-foreground">Auswirkung</strong> (Stress, Fristdruck)</li>
              <li>
                ist <strong className="text-foreground">noch keine Lösung</strong> (kein „wir bauen App“)
              </li>
            </ul>
          </div>

          <div className="space-y-2 border-t pt-4">
            <h3 className="font-semibold text-lg">POV (nutzerzentriert, Bedürfnis + Grund)</h3>
            <p>
              <strong>POV:</strong> Jan braucht eine schnelle, simultane und rechtssichere digitale Abwicklung,
              da die heutige sequentielle Signatur ein grosser Stressfaktor ist.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Warum POV extra?</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Problem Statement = System / Beobachtung</li>
              <li>POV = Empathie / Bedürfnis (treibt gute HMW-Fragen)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileText className="text-primary size-5" /> Top 3 HMW-Fragen
          </CardTitle>
          <CardDescription>Mit Begründung und klarer Zielrichtung pro Frage.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border p-4 space-y-3">
            <h3 className="font-semibold text-lg">HMW 1: Digitale simultane Signatur</h3>
            <p className="text-muted-foreground">Wie könnten wir die Kautions-Signatur 100% digital und simultan ermöglichen?</p>
            <p>
              <strong>Denkweise:</strong> Das ist der Blocker im Purchase. Wenn wir ihn entfernen, gewinnen wir Zeit,
              Vertrauen und Abschluss.
            </p>
            <div>
              <h4 className="font-semibold mb-2">Welche Teilprobleme stecken drin?</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Async statt gemeinsamer Termin</li>
                <li>Identifikation/Signatur ohne Medienbruch</li>
                <li>Status sichtbar machen („wer fehlt?“)</li>
                <li>rechtlich sauber dokumentieren</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border p-4 space-y-3">
            <h3 className="font-semibold text-lg">HMW 2: Transparenz & Fairness in WG-Finanzen</h3>
            <p className="text-muted-foreground">Wie könnten wir WG-Finanzen für alle Bewohner transparent und fair abbilden?</p>
            <p>
              <strong>Denkweise:</strong> Retention hängt an Alltagstauglichkeit. Wenn UBS nur einmal Kaution löst,
              ist es „Transaktion“. Wenn UBS danach Transparenz liefert, wird es „Begleitung“ (= Life Moments).
            </p>
          </div>

          <div className="rounded-lg border p-4 space-y-3">
            <h3 className="font-semibold text-lg">HMW 3: Budget-Setup automatisieren</h3>
            <p className="text-muted-foreground">Wie könnten wir das Budget-Setup automatisieren und vereinfachen?</p>
            <p>
              <strong>Denkweise:</strong> Erstmieter haben kognitive Überlast (zu viele neue Dinge). Automation reduziert
              Fehler und gibt Sicherheit.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Target className="text-primary size-5" /> SMART-Ziele (mit Messlogik)
          </CardTitle>
          <CardDescription>Konkrete Sprint-Messung für Zeit, Usability und Vertrauen.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-lg border p-4 space-y-3">
            <Badge variant="secondary" className="gap-1"><Zap className="size-3" /> Ziel 1</Badge>
            <h3 className="font-semibold text-lg">Digitaler Prozess</h3>
            <p>
              <strong>Ziel:</strong> Prototyp, der Eröffnung <strong>&lt; 10 Min</strong> reduziert (bis Tag 5).
            </p>
            <h4 className="font-semibold">Warum &lt;10 Min?</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Realistisch im Sprint testbar</li>
              <li>„Gefühlt schnell genug“ unter Fristdruck</li>
              <li>Benchmark für mobile Prozesse</li>
            </ul>
            <h4 className="font-semibold">Wie messen wir im Test?</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Startzeit: „WG-Kaution starten“</li>
              <li>Endzeit: „Bestätigung anzeigen / versenden“</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4 space-y-3">
            <Badge variant="secondary" className="gap-1"><Users className="size-3" /> Ziel 2</Badge>
            <h3 className="font-semibold text-lg">Usability – Invite Task</h3>
            <p>
              <strong>Ziel:</strong> 100% Task Success Rate beim „Mitbewohner-Invite“ (Tag 4).
            </p>
            <h4 className="font-semibold">Warum so streng (100%)?</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Wenn eine Person scheitert, scheitert der Prozess für alle (Multi-Party)</li>
              <li>Invite ist Kernfunktion, nicht nice-to-have</li>
            </ul>
            <h4 className="font-semibold">Wie messen wir?</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Task: „Lade Mitbewohner ein und prüfe Status“</li>
              <li>Erfolg: Invite ausgelöst + Status ersichtlich + keine Hilfestellung nötig</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4 space-y-3">
            <Badge variant="secondary" className="gap-1"><CheckCircle2 className="size-3" /> Ziel 3</Badge>
            <h3 className="font-semibold text-lg">Vertrauen</h3>
            <p>
              <strong>Ziel:</strong> ≥80% positive Rückmeldungen zur Rechtssicherheit (Tag 4).
            </p>
            <h4 className="font-semibold">Warum Vertrauen als Ziel?</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Banking ist High-Trust</li>
              <li>Bei rechtlichen Themen steigt Unsicherheit besonders</li>
            </ul>
            <h4 className="font-semibold">Messmethode (Sprint-tauglich)</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>1–5 Skala „Ich vertraue, dass das rechtlich korrekt ist“</li>
              <li>Ziel: 4 oder 5 bei ≥80% der Testpersonen</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
