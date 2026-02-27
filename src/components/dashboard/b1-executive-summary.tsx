import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const executiveSummary = [
  'Kernhypothese: Abwanderung entsteht primär durch prozessuale Reibung (sequentielle Mehrparteien-Signatur, fehlende Status-Transparenz, rechtliche Unsicherheit) und nicht durch das Produktversprechen selbst.',
  'Problemfokus: Wir adressieren bewusst den Prozess im kritischen Moment und nicht die Produktgrundlogik, da dort der grösste Hebel auf Abschlussquote und Vertrauen liegt.',
  'Kontext: Der Life Moment „erste eigene Wohnung“ verbindet Fristdruck, neue finanzielle Verantwortung und rechtliche Unsicherheit.',
  'Zielgruppe: Junge Erwachsene in WGs mit mehreren Beteiligten und gemeinsamem Koordinationsbedarf.',
  'Projektziel: Abschluss in maximal 10 Minuten testbar machen, Medienbrüche eliminieren und Rechtssicherheit messbar absichern.',
  'Risikofokus: Höchstes Abbruchrisiko in der Purchase-Phase durch Signatur- und Statusprobleme.',
  'Priorisierungsentscheidung: Die Top-3 Pain Points wurden gewählt, weil sie den grössten Einfluss auf Time-to-Completion, Task Success und wahrgenommenes Risiko haben.',
  'Steuerungslogik: Drei priorisierte Pain Points, drei priorisierte HMW-Fragen, drei messbare SMART-Ziele.',
  'Review-Rhythmus: Sprint Tag 4 (Prototyp-Test) und Tag 5 (Final Review) mit klaren Go/No-Go-Kriterien.',
  'Entscheidungsregel (Go/No-Go): Freigabe nur bei Erreichen der definierten Mindestschwellen; bei Zielverfehlung wird der Blocker priorisiert iteriert und erneut gemessen.',
];

const painPoints = [
  { rank: 1, title: 'Sequentielle Mehrparteien-Signatur unter Fristdruck', rationale: 'Direkter Blocker in der Purchase-Phase mit dem grössten Einfluss auf Abbruch und Verzögerung.' },
  { rank: 2, title: 'Fehlende Status-Transparenz für alle Beteiligten', rationale: 'Verursacht Rückfragen, Parallelkommunikation und zusätzliche Koordinationsschleifen.' },
  { rank: 3, title: 'Unklare rechtliche Einordnung bei Erstmieter:innen', rationale: 'Erhöht Unsicherheit und senkt die Bereitschaft, den Prozess ohne Alternativsuche abzuschliessen.' },
];

export default function B1ExecutiveSummary() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">B1.1 Executive Summary & Ist-Analyse</h1>

      <Card className="border-primary/40 bg-primary/5">
        <CardHeader><CardTitle>Executive Summary</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm leading-6 mb-3 text-muted-foreground">
            Strategische Einordnung: Diese Projektarbeit folgt einer klaren Entscheidungslogik von Problemstruktur zu messbaren Steuerungspunkten.
            Der Fokus liegt auf dem wirksamsten Hebel im Funnel: der stabilen Conversion im Purchase-/Onboarding-Moment.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm leading-6">
            {executiveSummary.map((line) => <li key={line}>{line}</li>)}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Ist-Analyse</CardTitle></CardHeader>
        <CardContent className="space-y-5 text-sm leading-6">
          <section><h3 className="font-semibold text-base">Kontext</h3><p className="text-muted-foreground">Die erste eigene Wohnung ist ein High-Pressure-Life-Moment mit Fristdruck, begrenzter Erfahrung und hoher finanzieller Relevanz; genau dort entscheidet sich die Anbieterwahl innerhalb weniger Tage.</p></section>
          <section><h3 className="font-semibold text-base">Stakeholder Map</h3><p className="text-muted-foreground">Hauptmieter:in, Mitbewohner:innen, Vermieter:in und UBS-Prozess bestimmen den Ablauf; Rechtsdienst und Bürgschaften beeinflussen Vertrauen und Entscheidung. Eine rein nutzerzentrierte Optimierung ist daher unzureichend, wenn High-Power-Stakeholder nicht blockierungsfrei integriert sind.</p></section>
          <section><h3 className="font-semibold text-base">Customer Journey</h3><p className="text-muted-foreground">Kritischer Bruchpunkt ist die Phase „Purchase“: Signaturkoordination und Medienwechsel verzögern den Abschluss. Daraus folgt die fokussierte Interventionsstrategie auf einen einzigen, hochwirksamen Moment.</p></section>
          <section><h3 className="font-semibold text-base">Pain Points</h3><ul className="list-disc list-inside text-muted-foreground space-y-1">{painPoints.map((p)=><li key={p.title}>{p.title}</li>)}</ul></section>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Top 3 Pain Points (priorisiert)</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm">
          {painPoints.map((item) => (
            <div key={item.title} className="rounded-lg border p-3">
              <p className="font-semibold">{item.rank}. {item.title}</p>
              <p className="text-muted-foreground">Begründung: {item.rationale}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Problemstatement</CardTitle></CardHeader>
        <CardContent className="text-sm leading-6">
          Junge Erwachsene in WGs erleben bei der Eröffnung eines Mietkautionskontos unter Fristdruck langsame,
          sequentielle und medienbruchanfällige Prozesse. Dies verursacht Koordinationsprobleme,
          Unsicherheit und eine erhöhte Abwanderung zu alternativen Anbietern.
        </CardContent>
      </Card>
    </div>
  );
}
