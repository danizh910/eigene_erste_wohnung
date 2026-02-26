import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, FileText, Target, Users, Zap } from 'lucide-react';

export default function A1Zieldefinition() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">A1.4 Problem Statement, HMW & SMART-Ziele</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertTriangle className="text-primary size-5" />
              Problem Statement & POV
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              <strong>Problem:</strong> Junge Erwachsene in WGs erleben langsame, papierbasierte Prozesse
              bei der Kautionseröffnung. Das erhöht Stress und Friktion mit Vermieter:innen.
            </p>
            <p className="border-t pt-4 italic text-muted-foreground">
              <strong>POV:</strong> Jan braucht eine schnelle, simultane und rechtssichere digitale Abwicklung,
              da die heutige sequentielle Signatur ein zentraler Stressfaktor ist.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="text-primary size-5" />
              Top 3 HMW-Fragen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Wie könnten wir die Kautions-Signatur 100% digital und simultan machen?</li>
              <li>Wie könnten wir WG-Finanzen transparent und fair für alle abbilden?</li>
              <li>Wie könnten wir das Budget-Setup automatisieren und vereinfachen?</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="text-primary" /> SMART-Ziele
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2 text-primary">
              <Zap className="size-4" /> 1. Digitaler Prozess
            </h3>
            <p className="text-muted-foreground">
              Entwicklung eines Prototyps, der die Eröffnungszeit auf <strong className="text-foreground">unter 10 Minuten</strong> reduziert.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2 text-primary">
              <Users className="size-4" /> 2. Usability
            </h3>
            <p className="text-muted-foreground">
              <strong className="text-foreground">100% Task Success</strong> beim Mitbewohner-Invite im Test.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2 text-primary">
              <Target className="size-4" /> 3. Vertrauen
            </h3>
            <p className="text-muted-foreground">
              Mindestens <strong className="text-foreground">80% positives Feedback</strong> zur Rechtssicherheit.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
