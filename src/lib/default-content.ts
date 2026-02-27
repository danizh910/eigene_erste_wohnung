export type SiteContent = {
  thinkingNotes: Record<string, string[]>;
};

export const defaultSiteContent: SiteContent = {
  thinkingNotes: {
    a1: [
      'In unserer Analyse wurde zuerst die Problemstruktur geklärt, bevor Lösungen diskutiert wurden.',
      'Die Situationsanalyse wurde als Entscheidungsgrundlage aufgebaut: Kontext, Stakeholder, Journey und Zieldefinition greifen logisch ineinander.',
    ],
    'a1-ist-analyse': [
      'Diese Seite zeigt die Begründung, warum der Life Moment «erste eigene Wohnung» strategisch relevant ist und warum WG als dynamisches Mehrparteien-System betrachtet wird.',
      'Diese Sichtweise verhindert vorschnelle Feature-Ideen und fokussiert auf die reale Prozesslogik unter Zeitdruck.',
    ],
    'a1-stakeholder-map': [
      'Die Stakeholder wurden nicht nur beschrieben, sondern nach Blockade- und Freigabemacht bewertet.',
      'Daraus folgt: Eine gute UX allein reicht nicht; High-Power-Stakeholder müssen im Lösungsdesign aktiv mitgeführt werden.',
    ],
    'a1-customer-journey': [
      'Die Journey wurde genutzt, um den kritischen Moment empirisch zu lokalisieren: Purchase als Engpass mit maximalem Abwanderungsrisiko.',
      'Der Fokus auf einen Moment ist eine bewusste Priorisierung, um Wirkung im Sprint zu maximieren.',
    ],
    'a1-zieldefinition': [
      'Problem Statement und POV wurden als Design-Treiber formuliert, nicht als reine Beschreibung.',
      'SMART-Ziele übersetzen die Hypothese in messbare Erfolgskriterien für den Entscheid über Go/No-Go.',
    ],
    b1: [
      'B1 macht die Steuerungslogik sichtbar: von der Kernhypothese über Kriterien bis zur Test-Evidenz.',
      'Das Ziel ist nachvollziehbare Entscheidungsfähigkeit statt allgemeiner Projektbeschreibung.',
    ],
    'b1-executive-summary': [
      'Die Executive Summary priorisiert bewusst die drei stärksten Reibungsfaktoren im Prozess statt allgemeiner Verbesserungswünsche.',
      'Damit wird klar, welche Annahmen getestet werden und welche nicht im aktuellen Scope liegen.',
    ],
    'b1-hmw-smart': [
      'HMW und SMART wurden aus denselben Pain Points abgeleitet, damit Kreativität und Messbarkeit in einer Linie bleiben.',
      'Die strenge Invite-Metrik ist bewusst gesetzt, weil ein einzelner Fehler den gesamten Mehrparteien-Prozess blockiert.',
    ],
    'b1-erfolgskriterien-review': [
      'Erfolgskriterien dienen als Entscheidungsinstrument mit Governance-Charakter und nicht als nachträgliches Reporting.',
      'Bei Nichterreichung wird iteriert und mit identischem Messdesign erneut geprüft.',
    ],
    'b1-test-evidenz': [
      'Die Evidenz wird interpretativ gelesen: Welche Teile der Hypothese sind bestätigt und wo bleibt ein kritischer Blocker.',
      'Die nächste Iteration priorisiert deshalb den Invite-Einstieg und die frühe Statussicht.',
    ],
    c: [
      'Kapitel C zeigt den vollständigen Denkpfad von Divergenz (Ideenbreite) zu Konvergenz (begründeter Entscheid).',
      'Die Unterpunkte C1 bis C3 sind getrennt, damit Methodenkompetenz, Reflexion und Entscheidungslogik klar prüfbar sind.',
    ],
    c1: [
      'Kapitel C zeigt den vollständigen Denkpfad von Divergenz (Ideenbreite) zu Konvergenz (begründeter Entscheid).',
      'Die Unterpunkte C1 bis C3 sind getrennt, damit Methodenkompetenz, Reflexion und Entscheidungslogik klar prüfbar sind.',
    ],
    'c1-ideation-dokumentation': [
      'In C1 wurde absichtlich breit gedacht und erst später bewertet, um keine frühen Denkbarrieren zu erzeugen.',
      'Die dokumentierten Techniken und Artefakte belegen, dass die Ideation methodisch und nicht zufällig erfolgte.',
    ],
    'c2-teamwork-reflexion': [
      'C2 reflektiert Rollenwirkung und Teamdynamik als Teil der methodischen Qualität, nicht als persönliche Randnotiz.',
      'Die Reflexion dient der Verbesserung der nächsten Iteration und macht Lernfähigkeit sichtbar.',
    ],
    'c3-priorisierung-entscheid': [
      'C3 begründet den finalen Lösungsentscheid mit Matrixlogik, Stakeholder-Anforderungen und SMART-Validierung.',
      'Der Scope von WG-Kaution Express ist eine Priorisierungsentscheidung gegen Komplexität, nicht gegen Innovation.',
    ],
    d1: [
      'Der Bereich bleibt im aktuellen Sprint in Arbeit; der Fokus lag auf Problemklarheit und Entscheidungsreife in A bis C.',
    ],
    e1: [
      'Der Bereich bleibt im aktuellen Sprint in Arbeit; Testvertiefung erfolgt nach Umsetzung der priorisierten Blocker.',
    ],
    h1: [
      'Der Pitch wird nach Abschluss der Iteration entlang der dokumentierten Entscheidungslogik finalisiert.',
    ],
  },
};
