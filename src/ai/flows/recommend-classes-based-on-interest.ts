'use server';
/**
 * @fileOverview AI agent that recommends classes based on user interests and experience.
 *
 * - recommendClasses - A function that recommends classes.
 * - RecommendClassesInput - The input type for the recommendClasses function.
 * - RecommendClassesOutput - The return type for the recommendClasses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendClassesInputSchema = z.object({
  interests: z
    .string()
    .describe('The interests of the potential student.'),
  experienceLevel: z
    .string()
    .describe('The experience level of the potential student.'),
  professionalHistory: z.string().optional().describe('The professional history of the potential student, if any.'),
});
export type RecommendClassesInput = z.infer<typeof RecommendClassesInputSchema>;

const RecommendClassesOutputSchema = z.object({
  recommendedClasses: z
    .string()
    .describe('A list of classes recommended for the student.'),
});
export type RecommendClassesOutput = z.infer<typeof RecommendClassesOutputSchema>;

export async function recommendClasses(input: RecommendClassesInput): Promise<RecommendClassesOutput> {
  return recommendClassesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendClassesPrompt',
  input: {schema: RecommendClassesInputSchema},
  output: {schema: RecommendClassesOutputSchema},
  prompt: `You are an expert at recommending classes to students based on their interests and experience level.

  Given the following information about a potential student, recommend a list of classes that would be most relevant to them.

  Interests: {{{interests}}}
  Experience Level: {{{experienceLevel}}}
  Professional History: {{{professionalHistory}}}

  Please provide a detailed justification for why each class is recommended based on the student's background and goals.
  Return the list of recommended classes and their justifications as a single string.
  `,
});

const recommendClassesFlow = ai.defineFlow(
  {
    name: 'recommendClassesFlow',
    inputSchema: RecommendClassesInputSchema,
    outputSchema: RecommendClassesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
