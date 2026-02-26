export default function DokumentationPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 md:p-10 space-y-6">
      <h1 className="text-3xl font-bold">Dokumentation – WG-Kautionsprozess</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Executive Summary</h2>
        <p>
          Junge Erwachsene in WGs erleben bei der Kautions-Eröffnung unter Fristdruck sequentielle,
          medienbruchanfällige Abläufe. Das erhöht Stress und Abwanderung zu Alternativen.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Ist-Analyse</h2>
        <ul className="list-disc list-inside">
          <li>Kontext: Life Moment mit hoher finanzieller und rechtlicher Unsicherheit.</li>
          <li>Stakeholder: Hauptmieter:in, Mitbewohner:innen, Vermieter:in, UBS-Prozess, Rechtsdienst.</li>
          <li>Journey: Kritisch ist die Phase „Purchase“.</li>
          <li>Pain Points: Signatur-Blockade, fehlende Status-Transparenz, geringe rechtliche Klarheit.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Problemstatement</h2>
        <p>
          Junge Erwachsene in WGs erleben bei der Eröffnung eines Mietkautionskontos unter Fristdruck langsame,
          sequentielle und medienbruchanfällige Prozesse. Dies führt zu Koordinationsproblemen,
          Unsicherheit und erhöhter Abwanderung.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">HMW</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Wie könnten wir eine rechtlich anerkannte, simultane Multi-Party-Signatur ohne Medienbruch ermöglichen?</li>
          <li>Wie könnten wir eine durchgängige Status-Transparenz für alle Beteiligten bereitstellen?</li>
          <li>Wie könnten wir die rechtliche Logik für Erstmieter:innen verständlich und prüfbar darstellen?</li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">SMART</h2>
        <ul className="list-disc list-inside">
          <li>≥ 80% der Testpersonen schliessen den Prozess in ≤ 10 Minuten ab (Tag 4).</li>
          <li>100% der Testpersonen lösen Invite und erkennen Status ohne Hilfe (Tag 4).</li>
          <li>≥ 80% bewerten Rechtssicherheit mit 4/5 oder 5/5 (Tag 5).</li>
        </ul>
      </section>
    </main>
  );
}
