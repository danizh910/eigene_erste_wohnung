import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function StakeholderBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {children}
    </div>
  );
}

export default function A1StakeholderMap() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">A1.2 Erweiterte Stakeholder-Map (mit Denklogik)</h1>

      <Card>
        <CardHeader>
          <CardTitle>1.1 Manage Closely (High Power / High Interest)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <StakeholderBlock title="Hauptmieter:in">
            <ul className="list-disc list-inside space-y-1">
              <li>trägt Verantwortung, will Kontrolle und Nachweise.</li>
              <li>erwartet einen rechtlich sauberen Prozess.</li>
              <li>Pain: muss alle koordinieren.</li>
            </ul>
          </StakeholderBlock>
          <StakeholderBlock title="UBS-Berater:in / UBS Prozess">
            <ul className="list-disc list-inside space-y-1">
              <li>Rolle: Validierung, Compliance, Qualität.</li>
              <li>Pain: will Standardisierung und weniger Sonderfälle.</li>
              <li>Risiko: unsauberer Digitalprozess bedeutet Reputations-/Rechtsrisiko.</li>
            </ul>
          </StakeholderBlock>
          <StakeholderBlock title="Vermieter:in / Verwaltung">
            <ul className="list-disc list-inside space-y-1">
              <li>Ziel: Kaution verbindlich und fristgerecht erhalten.</li>
              <li>Interesse hoch: verlangt Bestätigung.</li>
              <li>Macht hoch: ohne Bestätigung kein Schlüssel.</li>
            </ul>
          </StakeholderBlock>
          <p>
            <strong>Denkweise dahinter:</strong> Diese Stakeholder definieren die Spielregeln.
            Der Prozess muss so gestaltet werden, dass sie nicht blockieren.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>1.2–1.4 Weitere Stakeholder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <StakeholderBlock title="Keep Satisfied (High Power / Low Interest)">
            <ul className="list-disc list-inside space-y-1">
              <li>Rechtsdienst UBS: will korrekte Vertragslogik.</li>
              <li>Versicherungen: indirekter Stakeholder mit Konkurrenzdruck.</li>
            </ul>
          </StakeholderBlock>
          <StakeholderBlock title="Keep Informed (Low Power / High Interest)">
            <ul className="list-disc list-inside space-y-1">
              <li>WG-Mitglieder: Teil des Prozesses, können faktisch blockieren.</li>
              <li>Eltern/Bürgen: geben oft Liquidität oder Sicherheit.</li>
            </ul>
          </StakeholderBlock>
          <StakeholderBlock title="Monitor (Low Power / Low Interest)">
            <ul className="list-disc list-inside space-y-1">
              <li>Verbände und Marktbegleiter sind im Sprint weniger relevant.</li>
              <li>Als Kontextgeber dennoch wichtig für Positionierung.</li>
            </ul>
          </StakeholderBlock>
        </CardContent>
      </Card>
    </div>
  );
}
