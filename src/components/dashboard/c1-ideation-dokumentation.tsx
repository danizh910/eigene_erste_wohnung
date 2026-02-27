import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ideationRules = [
  'Quantität vor Qualität: In der Divergenzphase zählt die Breite des Lösungsraums, nicht die Perfektion einzelner Ideen.',
  'Bewertung aussetzen: Kritik und Ranking wurden während der Ideengenerierung bewusst ausgeklammert.',
  'Aufeinander aufbauen: Ideen wurden kombiniert, erweitert und systemisch weiterentwickelt.',
  'Nutzerproblem fokussieren: Jede Idee musste auf den Stresspunkt im Purchase-Moment einzahlen.',
  'Innovativ und umsetzbar denken: Radikale und pragmatische Ansätze wurden parallel zugelassen.',
  'Explizit dokumentieren: Alle Ideen wurden klar notiert, um spätere Priorisierung nachvollziehbar zu machen.',
];

const ideationOutput = [
  '10-minütiges Walk-and-Talk-Brainstorming zur Aktivierung divergenten Denkens.',
  'Anschliessendes Brainwriting in stiller Einzelarbeit für gleichwertige Beteiligung.',
  '36 strukturierte Ideen entlang der priorisierten HMW-Fragen (Signatur, Transparenz, Budget-Setup).',
  'Häufigste Cluster: simultane Orchestrierung, Status-Transparenz, rechtliche Nachvollziehbarkeit, Koordinationsentlastung.',
  'Methodische Regel: Keine Bewertung in der Divergenzphase; Selektion erst in der Konvergenz.',
];

export default function C1IdeationDokumentation() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">C1 – Ideation-Dokumentation</h1>

      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle>Strategische Einordnung</CardTitle>
          <CardDescription>
            C1 dokumentiert die systematische Generierung von Lösungsoptionen vor jeder Priorisierung.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <p>
            In unserer Analyse wurde deutlich, dass der stärkste Hebel im prozessualen Engpass der Purchase-Phase liegt.
            Daher wurde die Ideation gezielt auf Mehrparteien-Koordination, Transparenz und Rechtssicherheit ausgerichtet.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Durchführung der Kreativtechniken</CardTitle>
          <CardDescription>Dokumentierte Methodik für Divergenz im Lösungsraum.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-6">
          <div>
            <h3 className="font-semibold mb-2">Ideation-Grundregeln (6)</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {ideationRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Ergebnisse</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {ideationOutput.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Artefakte für LearningView</CardTitle>
          <CardDescription>Dokumentationspflicht gemäss Aufgabenstellung.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-6 space-y-2">
          <p>
            Hochzuladen sind die Ergebnisse der Ideation mit Nachweisen der Kreativtechniken, einschliesslich Fotos/Screenshots,
            Ideenliste und kurzer Clustering-Dokumentation.
          </p>
          <p>
            Referenzdokument: <strong>C1 – Ideation-Dokumentation (Team)</strong> und <strong>C3 – Priorisierungsmatrix & Entscheidungsdoku (Team)</strong> in LearningView.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
