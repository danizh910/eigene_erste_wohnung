'use client';

import { useMemo, useState } from 'react';
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

type Language = 'de' | 'en';

type PersonShare = {
  id: number;
  name: string;
  amount: string;
};

const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4'];

const content = {
  de: {
    title: 'Erste Wohnung Assistent',
    subtitle: 'Plane deinen Umzug Schritt für Schritt.',
    progress: 'Fortschritt',
    steps: ['Budget planen', 'Dokumente hochladen', 'Daueraufträge', 'Zusammenfassung'],
    next: 'Weiter',
    back: 'Zurück',
    budgetTitle: 'Budget planen',
    budgetIncome: 'Monatliches Einkommen',
    budgetRent: 'Miete',
    budgetUtilities: 'Nebenkosten',
    docsTitle: 'Dokumente hochladen',
    rentalContract: 'Mietvertrag (Pflicht)',
    depositProof: 'Kautionsnachweis (optional)',
    docsHint: 'Nur der Mietvertrag ist erforderlich, Kaution ist optional.',
    standingTitle: 'Daueraufträge',
    iban: 'IBAN',
    landlordName: 'Empfängername',
    executionDate: 'Ausführungsdatum',
    standingHint: 'Bestätigen ist erst verfügbar, wenn alle Felder ausgefüllt sind.',
    confirm: 'Bestätigen',
    summaryTitle: 'Zusammenfassung & Aufteilung',
    addPerson: 'Person hinzufügen',
    personName: 'Name',
    personAmount: 'Betrag (CHF)',
    total: 'Gesamt',
    finished: 'Setup abgeschlossen',
  },
  en: {
    title: 'First Apartment Assistant',
    subtitle: 'Plan your move step by step.',
    progress: 'Progress',
    steps: ['Plan budget', 'Upload documents', 'Standing orders', 'Summary'],
    next: 'Next',
    back: 'Back',
    budgetTitle: 'Plan budget',
    budgetIncome: 'Monthly income',
    budgetRent: 'Rent',
    budgetUtilities: 'Utilities',
    docsTitle: 'Upload documents',
    rentalContract: 'Rental agreement (required)',
    depositProof: 'Deposit proof (optional)',
    docsHint: 'Only the rental agreement is required, deposit proof is optional.',
    standingTitle: 'Standing orders',
    iban: 'IBAN',
    landlordName: 'Recipient name',
    executionDate: 'Execution date',
    standingHint: 'Confirm becomes available only when all fields are complete.',
    confirm: 'Confirm',
    summaryTitle: 'Summary & split',
    addPerson: 'Add person',
    personName: 'Name',
    personAmount: 'Amount (CHF)',
    total: 'Total',
    finished: 'Setup completed',
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>('de');
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);

  const [budget, setBudget] = useState({ income: '', rent: '', utilities: '' });
  const [rentalFile, setRentalFile] = useState('');
  const [depositFile, setDepositFile] = useState('');
  const [standingOrder, setStandingOrder] = useState({ iban: '', recipient: '', date: '' });
  const [people, setPeople] = useState<PersonShare[]>([
    { id: 1, name: 'Person 1', amount: '1200' },
    { id: 2, name: 'Person 2', amount: '800' },
  ]);

  const t = content[language];
  const progressValue = finished ? 100 : (step / t.steps.length) * 100;

  const standingOrderComplete = Boolean(standingOrder.iban && standingOrder.recipient && standingOrder.date);

  const peopleData = useMemo(() => {
    return people
      .map((person) => ({
        name: person.name || `#${person.id}`,
        value: Number(person.amount) || 0,
      }))
      .filter((entry) => entry.value > 0);
  }, [people]);

  const totalAmount = useMemo(() => peopleData.reduce((sum, item) => sum + item.value, 0), [peopleData]);

  const addPerson = () => {
    setPeople((prev) => [...prev, { id: prev.length + 1, name: `${t.personName} ${prev.length + 1}`, amount: '' }]);
  };

  return (
    <main className="mx-auto min-h-screen max-w-4xl space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>
        <div className="flex gap-2">
          <Button variant={language === 'de' ? 'default' : 'outline'} onClick={() => setLanguage('de')}>DE</Button>
          <Button variant={language === 'en' ? 'default' : 'outline'} onClick={() => setLanguage('en')}>EN</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t.progress}: {Math.round(progressValue)}%</CardTitle>
          <CardDescription>{finished ? t.finished : t.steps[step]}</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressValue} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t.steps[step]}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            {step === 0 && (
              <>
                <Label>{t.budgetIncome}</Label>
                <Input value={budget.income} onChange={(e) => setBudget((prev) => ({ ...prev, income: e.target.value }))} />
                <Label>{t.budgetRent}</Label>
                <Input value={budget.rent} onChange={(e) => setBudget((prev) => ({ ...prev, rent: e.target.value }))} />
                <Label>{t.budgetUtilities}</Label>
                <Input value={budget.utilities} onChange={(e) => setBudget((prev) => ({ ...prev, utilities: e.target.value }))} />
              </>
            )}

            {step === 1 && (
              <>
                <Label>{t.rentalContract}</Label>
                <Input type="file" onChange={(e) => setRentalFile(e.target.files?.[0]?.name ?? '')} />
                {rentalFile ? <p className="text-sm">{rentalFile}</p> : null}
                <Label>{t.depositProof}</Label>
                <Input type="file" onChange={(e) => setDepositFile(e.target.files?.[0]?.name ?? '')} />
                {depositFile ? <p className="text-sm">{depositFile}</p> : null}
                <p className="text-sm text-muted-foreground">{t.docsHint}</p>
              </>
            )}

            {step === 2 && (
              <>
                <Label>{t.iban}</Label>
                <Input value={standingOrder.iban} onChange={(e) => setStandingOrder((prev) => ({ ...prev, iban: e.target.value }))} />
                <Label>{t.landlordName}</Label>
                <Input value={standingOrder.recipient} onChange={(e) => setStandingOrder((prev) => ({ ...prev, recipient: e.target.value }))} />
                <Label>{t.executionDate}</Label>
                <Input type="date" value={standingOrder.date} onChange={(e) => setStandingOrder((prev) => ({ ...prev, date: e.target.value }))} />
                <p className="text-sm text-muted-foreground">{t.standingHint}</p>
                {standingOrderComplete ? <Button>{t.confirm}</Button> : null}
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="text-lg font-semibold">{t.summaryTitle}</h3>
                <div className="space-y-3">
                  {people.map((person, index) => (
                    <div className="grid grid-cols-2 gap-3" key={person.id}>
                      <Input
                        value={person.name}
                        onChange={(e) => {
                          const value = e.target.value;
                          setPeople((prev) => prev.map((entry, i) => (i === index ? { ...entry, name: value } : entry)));
                        }}
                        placeholder={t.personName}
                      />
                      <Input
                        value={person.amount}
                        onChange={(e) => {
                          const value = e.target.value;
                          setPeople((prev) => prev.map((entry, i) => (i === index ? { ...entry, amount: value } : entry)));
                        }}
                        placeholder={t.personAmount}
                      />
                    </div>
                  ))}
                </div>
                <Button variant="outline" onClick={addPerson}>{t.addPerson}</Button>
                <p className="font-medium">{t.total}: CHF {totalAmount.toFixed(2)}</p>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={peopleData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
                        {peopleData.map((entry, index) => (
                          <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => [`CHF ${value.toFixed(2)}`, t.personAmount]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </>
            )}

            <div className="flex justify-between pt-4">
              <Button variant="outline" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>{t.back}</Button>
              {step < t.steps.length - 1 ? (
                <Button
                  onClick={() => {
                    setFinished(false);
                    setStep((s) => s + 1);
                  }}
                  disabled={(step === 1 && !rentalFile) || (step === 2 && !standingOrderComplete)}
                >
                  {t.next}
                </Button>
              ) : (
                <Button onClick={() => setFinished(true)}>{t.finished}</Button>
              )}
            </div>
          </CardContent>
        </Card>
    </main>
  );
}
