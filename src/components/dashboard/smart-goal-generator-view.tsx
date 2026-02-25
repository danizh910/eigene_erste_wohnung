'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateSmartGoal, type SmartGoalGeneratorOutput } from '@/ai/flows/smart-goal-generator-flow';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  initialObjective: z.string().min(10, {
    message: 'Bitte beschreiben Sie Ihr Ziel ausführlicher.',
  }),
});

export default function SmartGoalGeneratorView() {
  const [generationResult, setGenerationResult] = useState<SmartGoalGeneratorOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      initialObjective: 'Einen Prozess für digitale Kautions-Signaturen für WGs entwickeln.',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGenerationResult(null);
    try {
      const result = await generateSmartGoal(values);
      setGenerationResult(result);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Fehler bei der Generierung',
        description: 'Das SMART-Ziel konnte nicht erstellt werden. Bitte versuchen Sie es erneut.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">SMART Goal Generator</h1>
        <Card>
          <CardHeader>
            <CardTitle>SMART-Ziel entwerfen</CardTitle>
            <CardDescription>
              Nutzen Sie KI, um aus einem einfachen Ziel ein vollständiges SMART-Ziel zu formulieren.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                <FormField
                  control={form.control}
                  name="initialObjective"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ursprüngliches Ziel</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="z.B. WG-Budgeting vereinfachen"
                          {...field}
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isLoading ? 'Wird generiert...' : 'SMART-Ziel generieren'}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

        {isLoading && (
            <div className="flex items-center justify-center rounded-lg border p-8 min-h-[300px]">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  <span>Analysiere Ziel und erstelle SMART-Komponenten...</span>
                </div>
            </div>
        )}

        {generationResult && (
          <Card>
            <CardHeader>
              <CardTitle>Ihr generiertes SMART-Ziel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-primary/10 border-primary/20">
                <AlertTitle className="text-primary font-semibold">Vollständiges SMART-Ziel</AlertTitle>
                <AlertDescription className="text-foreground">
                  {generationResult.fullSmartGoal}
                </AlertDescription>
              </Alert>

              <Accordion type="single" collapsible defaultValue="specific" className="w-full">
                <AccordionItem value="specific">
                  <AccordionTrigger>Specific (Spezifisch)</AccordionTrigger>
                  <AccordionContent>{generationResult.specific}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="measurable">
                  <AccordionTrigger>Measurable (Messbar)</AccordionTrigger>
                  <AccordionContent>{generationResult.measurable}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="achievable">
                  <AccordionTrigger>Achievable (Erreichbar)</AccordionTrigger>
                  <AccordionContent>{generationResult.achievable}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="relevant">
                  <AccordionTrigger>Relevant (Relevant)</AccordionTrigger>
                  <AccordionContent>{generationResult.relevant}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="time-bound">
                  <AccordionTrigger>Time-bound (Terminiert)</AccordionTrigger>
                  <AccordionContent>{generationResult.timeBound}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        )}
    </div>
  );
}
