import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Lightbulb, Route, TrendingDown } from 'lucide-react';

type JourneyPhase = {
  phase: string;
  situation: string;
  microSteps: string[];
  microSubSteps?: string[];
  touchpoints: string[];
  emotion: string;
  painPoint: string;
  opportunity: string[];
};

const phases: JourneyPhase[] = [
  {
    phase: 'Phase 1: Awareness',
    situation: 'Jan hat Zusage, liest Mietvertrag, realisiert Kaution & Frist.',
    microSteps: [
      'Nachricht: „Du bekommst das Zimmer.“',
      'Jan freut sich, teilt es evtl. Eltern/Freunden.',
      'Mietvertrag PDF kommt per Mail.',
      'Jan scannt Dokument: Betrag, Frist, Kontaktdaten Vermieter.',
      'Jan googelt Begriffe (Kaution / Depot / Sperrkonto).',
      'Jan fragt WG: „Wie machen wir das mit der Kaution?“',
    ],
    touchpoints: ['E-Mail', 'PDF', 'WhatsApp', 'Google', 'Vermieter'],
    emotion: '„Juhu!“ -> „Wie zahlen wir 4’500 CHF bis Freitag?“',
    painPoint: 'Liquiditäts-Schock + fehlende Orientierung (keine klare Schrittfolge).',
    opportunity: ['UBS Life Moment Trigger + „Erste Wohnung“ Einstieg.', 'Sofort: klare Checkliste + „so läuft WG-Kaution“.'],
  },
  {
    phase: 'Phase 2: Consideration',
    situation: 'Jan vergleicht Bankdepot vs. Kautionsversicherung, sucht Info.',
    microSteps: [
      'Jan hört von Freunden: „Mach doch Versicherung, geht schneller.“',
      'Jan googelt: „UBS Kautionskonto“ vs. „Kautionsversicherung“.',
      'Jan versucht zu verstehen: Kosten/Prämie vs. gebundenes Geld.',
      'Jan fragt Mitbewohner: „Müssen wir alle zur Bank?“',
      'Jan wird unsicher, weil Infos nicht WG-spezifisch sind.',
    ],
    microSubSteps: ['rechtliche Wirkung', 'Unterschriftenpflicht'],
    touchpoints: ['Google', 'Vergleichsportale', 'UBS Website', 'WhatsApp'],
    emotion: '„Braucht die Bank von jedem eine Unterschrift?“ -> Verwirrung',
    painPoint: 'Informationslage erklärt Standardfälle, nicht den WG-Kollektivfall.',
    opportunity: ['WG-spezifische Entscheidungs-Hilfe (klarer Vergleich).', '„In WGs gilt: So löst UBS die Multi-Party-Signatur“.'],
  },
  {
    phase: 'Phase 3: Purchase (kritisch)',
    situation: 'Konto eröffnen, Unterschriften koordinieren. Hier scheitert es häufig.',
    microSteps: [
      'Jan startet Online-Prozess (oder versucht es).',
      'System verlangt Daten / Dokumente.',
      'System verlangt Unterschriften (oft physisch oder sequentiell).',
      'Jan versucht Termine zu koordinieren.',
      'Jan merkt: „Das blockiert die Frist.“',
      'Jan sucht Alternativen.',
      'Stress eskaliert: Schuldzuweisungen drohen.',
    ],
    microSubSteps: [
      'Mitbewohner haben Arbeit/Uni.',
      'niemand hat gleiche Zeit.',
      'Kautionsversicherung (schnell).',
      'andere Bank.',
      'Vermieter um Frist bitten (unangenehm).',
    ],
    touchpoints: ['UBS App', 'Filiale', 'Post', 'E-Mail', 'Mitbewohnergeräte'],
    emotion: '„Wir schaffen den physischen Termin nie!“ -> Angst',
    painPoint: 'Medienbruch + fehlende asynchrone Multi-Party-Unterzeichnung.',
    opportunity: [
      '100% digital + simultan (jeder unabhängig).',
      'Invite-Links + Status + Reminder.',
      'Bestätigung an Vermieter automatisch.',
    ],
  },
  {
    phase: 'Phase 4: Retention',
    situation: 'Kaution liegt, jetzt kommt Alltag und Fixkosten.',
    microSteps: [
      'Jan richtet Miete ein.',
      'Erste Rechnungen kommen (Internet/Strom).',
      'Einer zahlt vor.',
      'Rückzahlungen verzögern sich.',
      'Jan will Übersicht (wer schuldet wem was).',
      'Jan nervt es, ständig nachzufragen.',
    ],
    touchpoints: ['E-Banking', 'WG-Chat', 'Rechnungs-PDFs'],
    emotion: '„Warum muss ich immer nachfragen?“ -> Genervt',
    painPoint: 'Intransparenz + manuelle Koordination -> sozialer Stress.',
    opportunity: ['WG-Finanzübersicht (Split, offene Beträge).', 'Fairness-Logik & klare Nachweise.'],
  },
  {
    phase: 'Phase 5: Advocacy',
    situation: 'Jan erzählt Freunden vom Umzug.',
    microSteps: [
      'Freunde fragen: „Wie war’s?“',
      'Jan erzählt Wohnung toll.',
      'Dann: „Aber der Bankkram war die Hölle.“',
      'Empfehlung kippt negativ -> Versicherungsprodukt wird empfohlen.',
    ],
    touchpoints: ['Freundeskreis', 'Social Media', 'Mundpropaganda'],
    emotion: 'Enttäuschung trotz gutem Endresultat.',
    painPoint: 'Negative Mundpropaganda trotz grundsätzlich gutem Produkt.',
    opportunity: [
      '„Delight Moment“: schneller Abschluss + saubere Bestätigung + „Du hast es geschafft!“.',
      'Positive Story statt Fruststory.',
    ],
  },
];

export default function A1CustomerJourney() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">A1.3 Customer Journey Map</h1>

      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Route className="size-5 text-primary" /> Warum Journey?
          </CardTitle>
          <CardDescription>
            Pain Points stecken oft nicht im Produkt, sondern in den Übergängen zwischen Touchpoints (Medienbrüche).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>Zentraler Befund:</strong> Phase „Purchase“ hat das höchste Abwanderungsrisiko.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Micro-Steps</li>
            <li>Touchpoints</li>
            <li>Gedanken/Emotion</li>
            <li>Pain Point (root cause)</li>
            <li>Design Opportunity (was UBS tun kann)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-yellow-500/40 bg-yellow-50 dark:bg-yellow-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="size-5 text-yellow-700" /> Abwanderungsrisiko (warum es wirklich passiert)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-base leading-7">
          <p>
            <strong>Hypothese aus Journey:</strong> Nicht das Produkt ist schlecht, sondern der Prozess ist zu langsam/kompliziert
            im Moment maximalen Zeitdrucks.
          </p>
          <p>Daher wechseln junge Menschen zu Kautionsversicherungen (wahrgenommen schnell + unkompliziert).</p>
          <p>
            <strong>Denkweise dahinter:</strong> Wenn wir Abwanderung verhindern wollen, müssen wir den kritischen Moment gewinnen:
            Purchase/Onboarding.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {phases.map((item) => (
          <Card key={item.phase} className={item.phase.includes('Purchase') ? 'border-destructive/40 bg-destructive/5' : ''}>
            <CardHeader>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <CardTitle>{item.phase}</CardTitle>
                {item.phase.includes('Purchase') && (
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <AlertTriangle className="size-3" /> Kritischer Moment
                  </Badge>
                )}
              </div>
              <CardDescription>
                <strong>Situation:</strong> {item.situation}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <section>
                <h3 className="font-semibold mb-2">Micro-Steps</h3>
                <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                  {item.microSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                {item.microSubSteps && (
                  <ul className="list-disc list-inside text-muted-foreground mt-2 ml-4 space-y-1">
                    {item.microSubSteps.map((sub) => (
                      <li key={sub}>{sub}</li>
                    ))}
                  </ul>
                )}
              </section>

              <section>
                <h3 className="font-semibold mb-2">Touchpoints</h3>
                <ul className="flex flex-wrap gap-2">
                  {item.touchpoints.map((tp) => (
                    <li key={tp} className="rounded-full border px-3 py-1 text-xs text-muted-foreground bg-muted/40">
                      {tp}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Gedanken/Emotion</h3>
                <p className="text-muted-foreground">{item.emotion}</p>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Pain Point (Root Cause)</h3>
                <p className="text-muted-foreground">{item.painPoint}</p>
              </section>

              <section>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb className="size-4 text-primary" /> Opportunity
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {item.opportunity.map((opp) => (
                    <li key={opp}>{opp}</li>
                  ))}
                </ul>
              </section>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
