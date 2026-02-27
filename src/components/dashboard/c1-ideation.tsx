import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ideationRules = [
  'Quantität vor Qualität: In der Divergenzphase zählt die Breite des Lösungsraums, nicht die Perfektion einzelner Ideen.',
  'Bewertung aussetzen: Kritik und Ranking wurden während der Ideengenerierung bewusst ausgeklammert.',
  'Aufeinander aufbauen: Ideen wurden kombiniert, erweitert und systemisch weiterentwickelt.',
  'Nutzerproblem fokussieren: Jede Idee musste auf den Stresspunkt im Purchase-Moment einzahlen.',
  'Innovativ und umsetzbar denken: Radikale und pragmatische Ansätze wurden parallel zugelassen.',
  'Explizit dokumentieren: Alle Ideen wurden klar notiert, um spätere Priorisierung nachvollziehbar zu machen.',
];

const c1Highlights = [
  'Brainstorming als 10-minütiger Walk-and-Talk zur Aktivierung divergenten Denkens und Reduktion von Meeting-Fixierung.',
  'Anschliessendes Brainwriting in stiller Einzelarbeit, um gleichwertige Beteiligung und methodische Tiefe zu sichern.',
  '36 dokumentierte Ideen entlang der drei priorisierten HMW-Fragen (Signatur, Transparenz, Budget-Setup).',
  'Dominante Cluster: simultane Orchestrierung, Status-Transparenz, rechtliche Nachvollziehbarkeit und Koordinationsentlastung.',
  'Methodisches Fazit: Der Lösungsraum wurde bewusst breit geöffnet; Bewertung erfolgte erst in der Konvergenzphase.',
];

const c3DecisionFlow = [
  'Übergang Divergenz → Konvergenz: Redundanzen clustern, Journey-relevante Optionen verdichten, dann priorisieren.',
  'Dot-Voting priorisierte die Bausteine mit dem höchsten Einfluss auf den Purchase-Engpass: Multi-Party-Signatur, Invite, Live-Status, Vermieter-Bestätigung.',
  'Impact/Effort-Logik bestätigte den Fokus auf High-Impact-Funktionen mit direktem Effekt auf Conversion und Fristfähigkeit.',
  'MoSCoW definierte verbindlichen Scope: Must = Signatur, Invite, Status/Reminder, Vermieter-Bestätigung, rechtliche Erklärung.',
  'Finaler Entscheid: „WG-Kaution Express“ als fokussierte Lösung für den kritischen Onboarding-Moment.',
];

const c2Reflection = [
  'Rollenklarheit als Produktivitätshebel: Daniel strukturierte Entscheidungslogik und Umsetzbarkeit, Noelia stärkte Nutzerfokus und kreative Vielfalt.',
  'Die Kombination aus bewegtem Brainstorming und stiller Vertiefung erhöhte sowohl Ideenbreite als auch Präzision.',
  'Die Teamdynamik verbesserte sich sichtbar, sobald Kriterien (Journey-Risiko, Stakeholder-Macht, SMART-Ziele) früh transparent gesetzt wurden.',
  'Verbesserungspotenziale: früheres Compliance-Feedback, schärferes Assumption Mapping, standardisierte Bewertungsrubrik vor Voting.',
  'Lernpunkt: Methodische Disziplin im Wechsel zwischen Divergieren und Konvergieren steigert Entscheidungsqualität messbar.',
];

export default function C1Ideation() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">C1-C3: Ideation</h1>

      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle>Strategische Einordnung</CardTitle>
          <CardDescription>
            Die Phase C macht die Denkarbeit explizit: vom breiten Lösungsraum über priorisierte Entscheidungen bis zur Teamreflexion.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-6 space-y-2">
          <p>
            In unserer Analyse wurde deutlich, dass nicht das Produktversprechen das Hauptproblem ist, sondern ein blockierender Prozess im
            zeitkritischen Purchase-Moment. Daher priorisieren wir systematisch jene Lösungsbausteine, die Abwanderungstreiber direkt reduzieren:
            sequentielle Signatur, fehlende Transparenz und rechtliche Unsicherheit.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>C1 Ideation-Dokumentation</CardTitle>
          <CardDescription>Divergieren im Lösungsraum mit klaren Kreativregeln und dokumentierter Ideenbasis.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-6">
          <p>
            Die Ideation wurde im zweiten Diamond als divergente Phase durchgeführt. Ziel war nicht frühe Selektion, sondern maximale
            Lösungsbreite entlang der drei HMW-Fragen.
          </p>
          <div>
            <h3 className="font-semibold mb-2">6 Ideation-Grundregeln</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {ideationRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Durchführung und Ergebnis</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {c1Highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>C3 Priorisierung & Entscheid</CardTitle>
          <CardDescription>Konvergieren mit expliziter Entscheidungslogik und Governance-Orientierung.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-6">
          <p>
            Die Priorisierung wurde als Entscheidungsprozess und nicht als Ideensammlung behandelt: Jede Entscheidung wurde am Journey-Risiko
            in Purchase, an Stakeholder-Macht und an SMART-Zielen gespiegelt.
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {c3DecisionFlow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Daraus ergibt sich als priorisierter Lösungsansatz «WG-Kaution Express» mit 100% digitaler simultaner Multi-Party-Signatur,
            Invite-System, Live-Status mit Reminder, automatischer Vermieter-Bestätigung und einfacher rechtlicher Erklärung.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>C2 Teamwork-Reflexion</CardTitle>
          <CardDescription>Meta-kognitive Reflexion zu Rollen, Methodenwirkung und Verbesserung der Teamleistung.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-6">
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {c2Reflection.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Diese Reflexion macht Lernfähigkeit und Methodenbewusstsein sichtbar: Divergenz und Konvergenz wurden bewusst getrennt,
            um sowohl kreative Breite als auch belastbare Entscheidungsqualität zu sichern.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
