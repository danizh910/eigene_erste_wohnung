import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const criteria = [
  { title: 'Kriterium 1 – End-to-End-Dauer', statement: 'Mindestens 4 von 5 Testpersonen absolvieren den vollständigen Eröffnungsprozess in maximal 10 Minuten.', smartRef: 'SMART-Ziel 1', method: 'Messung (Start-/Endzeit je Durchlauf)', review: 'Sprint Tag 4 – Prototyp-Test' },
  { title: 'Kriterium 2 – Invite-Erfolg', statement: '5 von 5 Testpersonen senden einen Invite und identifizieren den offenen Status ohne Unterstützung.', smartRef: 'SMART-Ziel 2', method: 'Beobachtung + Messung (Task Completion)', review: 'Sprint Tag 4 – Prototyp-Test' },
  { title: 'Kriterium 3 – Fehlerquote Signaturfluss', statement: 'Die kritische Fehlerquote im Signaturfluss liegt über alle Durchläufe bei maximal 10%.', smartRef: 'SMART-Ziel 1', method: 'Messung (Fehlerprotokoll)', review: 'Sprint Tag 4 – Prototyp-Test' },
  { title: 'Kriterium 4 – Rechtliches Vertrauen', statement: 'Mindestens 4 von 5 Testpersonen vergeben für „rechtlich sicher“ eine Bewertung von 4 oder 5.', smartRef: 'SMART-Ziel 3', method: 'Befragung (Likert 1–5)', review: 'Sprint Tag 5 – Final Review' },
  { title: 'Kriterium 5 – Prozessverständnis', statement: 'Mindestens 4 von 5 Testpersonen können die nächsten zwei Prozessschritte korrekt wiedergeben.', smartRef: 'SMART-Ziel 3', method: 'Befragung + Beobachtung (Comprehension Check)', review: 'Sprint Tag 5 – Final Review' },
];

export default function B1ErfolgskriterienReview() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">B1.3 Erfolgskriterien & Review-Plan</h1>

      <Card>
        <CardHeader>
          <CardTitle>Erfolgskriterien</CardTitle>
          <CardDescription>5 Kriterien mit quantitativer und qualitativer Abdeckung.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          {criteria.map((item) => (
            <div key={item.title} className="rounded-lg border p-3 space-y-1">
              <p className="font-semibold">{item.title}</p>
              <p><strong>Präzise Aussage:</strong> {item.statement}</p>
              <p><strong>Zugeordnetes SMART-Ziel:</strong> {item.smartRef}</p>
              <p><strong>Überprüfungsmethode:</strong> {item.method}</p>
              <p><strong>Review-Zeitpunkt:</strong> {item.review}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Review-Plan</CardTitle>
          <CardDescription>Review & Entscheidungslogik</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-6">
          <p><strong>Wann wird reviewed?</strong> Sprint Tag 4 (Prototyp-Test) und Sprint Tag 5 (Final Review).</p>
          <p><strong>Wer entscheidet?</strong> Produktverantwortung, UX-Lead und Prozessverantwortliche im gemeinsamen Review-Board.</p>
          <p><strong>Was passiert bei Nichterreichung?</strong> Das Ziel wird als Blocker markiert; Freigabe erfolgt erst nach Iteration.</p>
          <p><strong>Welche Iteration folgt?</strong> Vereinfachung des Signaturflusses, klarere Statusführung, präzisere Rechtstexte.</p>
          <p><strong>Massnahmen bei Zielverfehlung:</strong> Navigation vereinfachen, Signaturprozess verkürzen, Hinweise sichtbarer machen.</p>
        </CardContent>
      </Card>
    </div>
  );
}
