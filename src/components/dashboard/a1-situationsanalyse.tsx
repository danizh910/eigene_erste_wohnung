import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, Target, Lightbulb, CheckSquare, BarChart, User, AlertTriangle, FileText, Smile, Zap, ShieldCheck } from 'lucide-react';

const painPoints = [
    { phase: 'Wohnung gefunden', point: 'Kautionskonto-Eröffnung ist papierlastig', impact: 'Zeitdruck durch Vermieter' },
    { phase: 'Koordination WG', point: 'Alle müssen physisch oder nacheinander signieren', impact: 'Verzögerungen & Stress' },
    { phase: 'Finanzorganisation', point: 'Unklar, wer welchen Anteil zahlt', impact: 'Konfliktpotenzial' },
    { phase: 'Budgetplanung', point: 'Keine Übersicht über neue Fixkosten', impact: 'Finanzielle Unsicherheit' },
    { phase: 'Vertrauen', point: 'Angst vor rechtlichen Fehlern', impact: 'Unsicherheit gegenüber Bankprozess' },
];

export default function Situationsanalyse() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-foreground">A1: Situationsanalyse &amp; Zieldefinition</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart className="text-primary" />
            <span>1. Ist-Analyse (Situationsanalyse)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Kontext</h3>
            <p className="text-muted-foreground">Der Lebensmoment „Erste eigene Wohnung“ ist für junge Erwachsene emotional bedeutend und finanziell anspruchsvoll. Besonders bei Wohngemeinschaften (WGs) entstehen zusätzliche Koordinations- und Vertrauensfragen.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><User /> <span>Zielgruppe: Persona Jan (21)</span></h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Student, WG-Neuling, zieht erstmals aus dem Elternhaus aus</li>
              <li>Begrenztes Budget & wenig Erfahrung mit Verträgen & Kaution</li>
              <li>Will Konflikte mit Mitbewohnern vermeiden</li>
              <li>Erwartet digitale, einfache Lösungen und von UBS Vertrauen, Kompetenz & Sicherheit</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Zentrale Pain Points der Journey</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Phase</TableHead>
                    <TableHead>Pain Point</TableHead>
                    <TableHead>Auswirkung</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {painPoints.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.phase}</TableCell>
                      <TableCell>{item.point}</TableCell>
                      <TableCell className="text-destructive">{item.impact}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Users className="text-primary" /><span>Erweiterte Stakeholder-Map</span></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="border-2 border-primary rounded-lg p-4 bg-primary/5 shadow-md">
                <h4 className="font-bold text-lg text-primary">Manage Closely</h4>
                <p className="text-xs text-muted-foreground">(High Power / High Interest)</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>Hauptmieter:in: Trägt das finanzielle Risiko und die rechtliche Verantwortung.</li>
                    <li>UBS-Kundenberater:in: Schnittstelle für Rückfragen und Validierung.</li>
                    <li>Vermieter:in / Verwaltung: Verlangt Kautionsbestätigung.</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4 bg-card">
                <h4 className="font-bold text-lg">Keep Satisfied</h4>
                <p className="text-xs text-muted-foreground">(High Power / Low Interest)</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>Rechtsdienst (UBS): Prüft Rechtmässigkeit.</li>
                    <li>Versicherungen: Konkurrenz durch Kautionsversicherungen.</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4 bg-card">
                <h4 className="font-bold text-lg">Keep Informed</h4>
                <p className="text-xs text-muted-foreground">(Low Power / High Interest)</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>WG-Mitglieder: Finanziell beteiligt.</li>
                    <li>Eltern / Bürgen: Stellen oft Liquidität sicher.</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4 bg-card">
                <h4 className="font-bold text-lg">Monitor</h4>
                <p className="text-xs text-muted-foreground">(Low Power / Low Interest)</p>
              </div>
            </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><AlertTriangle className="text-primary" /><span>Problem Statement</span></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Junge Erwachsene in WGs erleben langsame, papierbasierte Prozesse bei der Eröffnung von Mietkautionskonten. Die notwendige physische Koordination aller Beteiligten führt zu Verzögerungen, Stress mit Vermietern und finanzieller Unsicherheit.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><FileText className="text-primary" /><span>Point of View (POV)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Jan braucht eine Möglichkeit, die WG-Kaution schnell, simultan und rechtssicher digital abzuwickeln, weil die heutige physische und sequentielle Signatur ein grosser Stress- und Konfliktfaktor ist.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Lightbulb className="text-primary" /><span>2. HMW-Fragen (How Might We)</span></CardTitle>
          <CardDescription>Abgeleitet direkt aus den Pain Points. Top 3 sind für Diamond 2 priorisiert.</CardDescription>
        </CardHeader>
        <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><Badge variant="default" className="mt-1">Top</Badge><span>Wie könnten wir die Kautions-Signatur 100 % digital und simultan ermöglichen?</span></li>
              <li className="flex items-start gap-2"><Badge variant="default" className="mt-1">Top</Badge><span>Wie könnten wir WG-Finanzen für alle Bewohner transparent und fair abbilden?</span></li>
              <li className="flex items-start gap-2"><Badge variant="default" className="mt-1">Top</Badge><span>Wie könnten wir das Budget-Setup für Erstmieter automatisieren und vereinfachen?</span></li>
              <li className="flex items-start gap-2 text-muted-foreground"><Badge variant="secondary" className="mt-1">Prio</Badge><span>Wie könnten wir rechtliche Sicherheit verständlich kommunizieren?</span></li>
              <li className="flex items-start gap-2 text-muted-foreground"><Badge variant="secondary" className="mt-1">Prio</Badge><span>Wie könnten wir Stress bei der Koordination mehrerer Parteien minimieren?</span></li>
            </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><Target className="text-primary"/><span>3. Zieldefinition (SMART)</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div>
                <h4 className="font-semibold flex items-center gap-2"><Zap className="size-4 text-primary" />Ziel 1 – Digitaler WG-Kautionsprozess</h4>
                <p className="text-muted-foreground pl-6">Entwicklung eines klickbaren Prototyps für digitale WG-Kautionseröffnung, der die Eröffnung in &lt; 10 Minuten ermöglicht und bis Ende Tag 5 fertig ist.</p>
            </div>
            <div>
                <h4 className="font-semibold flex items-center gap-2"><Smile className="size-4 text-primary" />Ziel 2 – Usability-Test: Mitbewohner-Invite</h4>
                <p className="text-muted-foreground pl-6">Erreichen einer 100%igen Task Success Rate bei der Kernfunktion «Mitbewohner zur digitalen Mitunterzeichnung einladen» im Usability-Test an Tag 4.</p>
            </div>
            <div>
                <h4 className="font-semibold flex items-center gap-2"><ShieldCheck className="size-4 text-primary" />Ziel 3 – Vertrauen steigern</h4>
                <p className="text-muted-foreground pl-6">Sicherstellen, dass Nutzer den Prozess als rechtssicher & verständlich wahrnehmen, gemessen durch mindestens 80% positive Rückmeldungen im Test an Tag 4.</p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}