import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const decisionFlow = [
  'Übergang von Divergenz zu Konvergenz: Redundanzen clustern, Optionen verdichten, dann priorisieren.',
  'Dot-Voting priorisierte die wirksamsten Bausteine für den Purchase-Engpass: Multi-Party-Signatur, Invite, Live-Status, Vermieter-Bestätigung.',
  'Impact/Effort ordnete die Massnahmen in Quick Wins, Kerninvestitionen und späteren Scope ein.',
  'MoSCoW definierte den MVP-Umfang und schützte den Fokus gegen Scope-Drift.',
  'Finale Auswahl: WG-Kaution Express als priorisierter Lösungsansatz mit klarer Stakeholder- und Zielausrichtung.',
];

const finalScope = [
  '100% digitale simultane Multi-Party-Signatur',
  'Invite-System für alle WG-Beteiligten',
  'Live-Status und Reminder im Fristfenster',
  'Automatische Vermieter-Bestätigung',
  'Einfache rechtliche Erklärung im Flow',
];

export default function C3PriorisierungEntscheid() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">C3 – Priorisierung & Entscheidungsdoku</h1>

      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle>Strategische Einordnung</CardTitle>
          <CardDescription>
            C3 übersetzt Ideen in belastbare Entscheidungen mit klarer Governance und Business-Logik.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <p>
            Diese Entscheidung basiert auf dem höchsten Abwanderungsrisiko in Purchase, den Anforderungen von High-Power-Stakeholdern
            und den SMART-Zielen als Validierungsrahmen.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Priorisierungslogik</CardTitle>
          <CardDescription>Bewertungsmatrix und Entscheidungsbegründung.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            {decisionFlow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gewählter Lösungsansatz</CardTitle>
          <CardDescription>WG-Kaution Express (Must-Have-Scope).</CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            {finalScope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Artefakt für LearningView</CardTitle>
          <CardDescription>Abgabeformat gemäss Aufgabenstellung.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <p>
            In LearningView werden die Bewertungsmatrix sowie die begründete Entscheidungsdokumentation als Teamartefakt abgelegt,
            inklusive Priorisierungsannahmen und Scope-Entscheid.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
