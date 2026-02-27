import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function A1IstAnalyse() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">A1.1 Ist-Analyse</h1>

      <Card>
        <CardHeader>
          <CardTitle>Kontext</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg leading-8">
          <p className="text-base text-muted-foreground">
            Strategische Einordnung: Der Life Moment „erste eigene Wohnung“ ist aus Business-Sicht ein Entscheidungsfenster mit hoher Wechselwahrscheinlichkeit.
            In unserer Analyse wurde deutlich, dass Prozessgeschwindigkeit, Verständlichkeit und Verbindlichkeit in dieser Phase direkter auf die Abschlussquote wirken als zusätzliche Produktfeatures.
          </p>
          <div>
            <h3 className="font-semibold mb-2">Warum ist die erste eigene Wohnung ein kritischer Life Moment?</h3>
            <p>
              Der erste eigene Wohnraum markiert den Übergang in finanzielle Selbstständigkeit und hat hohe strategische Relevanz,
              weil in kurzer Zeit mehrere irreversible Entscheidungen mit hoher finanzieller Tragweite getroffen werden.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Charakteristisch sind:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>neue Fixkosten (Miete, Nebenkosten, Strom, Internet)</li>
              <li>hohe Einmalzahlungen (Kaution, Umzug, Möbel)</li>
              <li>rechtliche Unsicherheit (Vertragsbegriffe, Fristen, Haftung)</li>
            </ul>
          </div>
          <p>
            In solchen Übergangssituationen steigt die Entscheidungsanfälligkeit für einfache, schnelle Lösungen.
            Komplexe Prozesse erhöhen die Abwanderungswahrscheinlichkeit.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>WG-Spezifika</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg leading-8">
          <div>
            <h3 className="font-semibold">A) Solidarhaftung</h3>
            <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
              <li>Gefühl in vielen WGs: „Wenn jemand nicht zahlt, betrifft es alle.“</li>
              <li>Unklare juristische Begriffe werden als persönliches Risiko interpretiert.</li>
              <li>Folge: Starkes Bedürfnis nach Sicherheit und klaren Regeln.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">B) Mieterwechsel (WG ist dynamisch)</h3>
            <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
              <li>WGs wechseln häufiger Mitbewohner:innen.</li>
              <li>Es braucht klare Regeln bei Wechseln und Anteilsrückzahlungen.</li>
              <li>Dokumentation muss sauber, transparent und schnell sein.</li>
            </ul>
          </div>
          <p>
            <strong>Interpretation:</strong> Wir interpretieren WG als Mehrparteien-Prozess mit wiederkehrender Veränderung – daher digital prädestiniert.
            Diese Entscheidung basiert auf der Kombination aus wiederholten Abstimmungen, rechtlicher Nachweispflicht und hoher Fehleranfälligkeit in manuellen Übergaben.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
