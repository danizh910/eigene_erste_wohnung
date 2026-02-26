import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function A1IstAnalyse() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">A1.1 Ist-Analyse (Situationsanalyse)</h1>

      <Card>
        <CardHeader>
          <CardTitle>Kontext</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg leading-8">
          <p>
            Der erste eigene Wohnraum ist ein Übergang in Selbstständigkeit: emotional positiv (Freiheit),
            gleichzeitig finanziell riskant (erste grosse Verpflichtungen).
          </p>
          <div>
            <h3 className="font-semibold mb-2">Was typisch passiert:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Neue Fixkosten (Miete, Nebenkosten, Internet, Strom, Möbel).</li>
              <li>Hohe Einmalzahlungen (Kaution, erste Miete, Umzug).</li>
              <li>Unbekannte Prozesse (Mietvertrag, Fristen, rechtliche Begriffe).</li>
            </ul>
          </div>
          <p>
            <strong>Denkweise dahinter:</strong> Ein Life Moment ist ideal für proaktive Begleitung,
            weil Kund:innen in dieser Phase offen für Unterstützung sind, aber schnell frustrieren,
            wenn Prozesse kompliziert werden.
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
            <strong>Denkweise dahinter:</strong> WG bedeutet Mehrparteien-Prozess und wiederkehrende Veränderung.
            Genau deshalb ist der Prozess ideal für digitale Workflows.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
