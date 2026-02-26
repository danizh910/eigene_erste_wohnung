export default function DokumentationPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 md:p-10 space-y-6">
      <h1 className="text-3xl font-bold">Dokumentation – B1 Abgabeformat</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Executive Summary</h2>
        <p>
          Junge Erwachsene in WGs erleben unter Fristdruck sequentielle und medienbruchanfällige
          Kautionsprozesse. Das erhöht Koordinationsaufwand und Abwanderungsrisiko.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Ist-Analyse</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Kontext: High-Pressure-Life-Moment mit finanzieller und rechtlicher Unsicherheit.</li>
          <li>Stakeholder: Hauptmieter:in, Mitbewohner:innen, Vermieter:in, UBS-Prozess, Rechtsdienst.</li>
          <li>Journey: Höchstes Risiko in der Purchase-Phase.</li>
          <li>Pain Points: Signatur-Blockade, fehlende Status-Transparenz, rechtliche Unklarheit.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Problemstatement</h2>
        <p>
          Junge Erwachsene in WGs erleben bei der Eröffnung eines Mietkautionskontos unter Fristdruck langsame,
          sequentielle und medienbruchanfällige Prozesse. Dies verursacht Koordinationsprobleme,
          Unsicherheit und eine erhöhte Abwanderung.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">HMW</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Rechtlich anerkannte simultane Multi-Party-Signatur ohne Medienbruch.</li>
          <li>Durchgängige Status-Transparenz für alle Beteiligten.</li>
          <li>Verständliche und prüfbare rechtliche Logik für Erstmieter:innen.</li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">SMART</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>≥ 80% (mind. 4/5) schliessen in ≤ 10 Minuten ab – Review Tag 4.</li>
          <li>100% (5/5) lösen Invite + Status ohne Hilfe – Review Tag 4.</li>
          <li>≥ 80% (mind. 4/5) bewerten Rechtssicherheit mit 4 oder 5 – Review Tag 5.</li>
        </ul>
      </section>
    </main>
  );
}
