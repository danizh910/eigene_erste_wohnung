'use server';
/**
 * @fileOverview This file implements a Genkit flow to assist project managers in drafting SMART goals.
 *
 * - generateSmartGoal - A function that generates a SMART goal based on an initial objective.
 * - SmartGoalGeneratorInput - The input type for the generateSmartGoal function.
 * - SmartGoalGeneratorOutput - The return type for the generateSmartGoal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartGoalGeneratorInputSchema = z.object({
  initialObjective: z.string().describe('The initial objective for which a SMART goal needs to be drafted. Examples include digital deposit signatures and WG-budgeting.'),
});
export type SmartGoalGeneratorInput = z.infer<typeof SmartGoalGeneratorInputSchema>;

const SmartGoalGeneratorOutputSchema = z.object({
  specific: z.string().describe('Describes the goal in a clear and specific manner, answering who, what, where, when, why.'),
  measurable: z.string().describe('Defines how progress will be measured and when the goal will be achieved, answering how much, how many, how will I know when it is accomplished.'),
  achievable: z.string().describe('Indicates that the goal is realistic and attainable given available resources and constraints.'),
  relevant: z.string().describe('Explains why the goal matters to the overall project or organization, answering is this the right time, is this applicable to current environment.'),
  timeBound: z.string().describe('Sets a clear deadline for when the goal should be achieved, answering when will it be done.'),
  fullSmartGoal: z.string().describe('The complete SMART goal statement, combining all components into a coherent sentence.'),
});
export type SmartGoalGeneratorOutput = z.infer<typeof SmartGoalGeneratorOutputSchema>;

export async function generateSmartGoal(input: SmartGoalGeneratorInput): Promise<SmartGoalGeneratorOutput> {
  return smartGoalGeneratorFlow(input);
}

const smartGoalGeneratorPrompt = ai.definePrompt({
  name: 'smartGoalGeneratorPrompt',
  input: {schema: SmartGoalGeneratorInputSchema},
  output: {schema: SmartGoalGeneratorOutputSchema},
  prompt: `You are an expert project manager and goal-setting specialist. Your task is to transform a given initial objective into a well-structured SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goal.

Analyze the following initial objective and break it down into its five SMART components. Then, combine these components into a single, cohesive SMART goal statement.

Initial Objective: {{{initialObjective}}}

Consider examples such as streamlining digital deposit signatures for apartment shares or optimizing WG-budgeting processes when drafting the goal.`,
});

const smartGoalGeneratorFlow = ai.defineFlow(
  {
    name: 'smartGoalGeneratorFlow',
    inputSchema: SmartGoalGeneratorInputSchema,
    outputSchema: SmartGoalGeneratorOutputSchema,
  },
  async input => {
    const {output} = await smartGoalGeneratorPrompt(input);
    if (!output) {
      throw new Error('Failed to generate SMART goal.');
    }
    return output;
  }
);
