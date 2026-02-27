import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const reflectionPoints = [
  'Daniel übernahm die technisch-strukturelle Rolle (Struktur, Umsetzbarkeit, Entscheidungslogik).',
  'Noelia übernahm die kreativ-nutzerzentrierte Rolle (Nutzerperspektive, Verständlichkeit, Variantenbreite).',
  'Die Kombination aus Walk-and-Talk und Brainwriting erhöhte Ideenbreite sowie methodische Präzision.',
  'Entscheidungsqualität stieg, sobald Journey-Risiko, Stakeholder-Macht und SMART-Kriterien früh sichtbar waren.',
  'Verbesserungspotenziale: früheres Compliance-Feedback, Assumption Mapping und standardisierte Voting-Rubrik.',
];

export default function C2TeamworkReflexion() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">C2 – Teamwork-Reflexion</h1>

      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle>Strategische Einordnung</CardTitle>
          <CardDescription>
            C2 bewertet nicht nur Zusammenarbeit, sondern auch die Reife der angewendeten Methodenlogik.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <p>
            Die Reflexion wurde als Meta-Ebene zur Qualitätssicherung genutzt: Welche Rollen haben Wirkung erzeugt,
            welche methodischen Entscheidungen waren tragfähig und wo besteht Verbesserungsbedarf für nächste Iterationen.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reflexionskern</CardTitle>
          <CardDescription>Rolle, Wirkung, Lernfähigkeit und nächste Schritte.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            {reflectionPoints.map((point) => (
              <li key={point}>{point}</li>
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
            Der individuelle Reflexionstext wird in LearningView eingetragen und adressiert explizit: Teamrolle,
            funktionierende Elemente der Zusammenarbeit und konkrete Änderungen für den nächsten Sprint.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
