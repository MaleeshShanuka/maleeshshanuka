'use server';
/**
 * @fileOverview AI agent that recommends ICT classes based on user interests and experience.
 *
 * - recommendClasses - A function that recommends ICT classes.
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
    .describe('The experience level of the potential student (Beginner, Intermediate, Advanced).'),
  professionalHistory: z.string().optional().describe('The academic or professional history of the potential student, if any.'),
});
export type RecommendClassesInput = z.infer<typeof RecommendClassesInputSchema>;

const RecommendClassesOutputSchema = z.object({
  recommendedClasses: z
    .string()
    .describe('A list of ICT classes recommended for the student.'),
});
export type RecommendClassesOutput = z.infer<typeof RecommendClassesOutputSchema>;

export async function recommendClasses(input: RecommendClassesInput): Promise<RecommendClassesOutput> {
  return recommendClassesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendClassesPrompt',
  input: {schema: RecommendClassesInputSchema},
  output: {schema: RecommendClassesOutputSchema},
  prompt: `You are an expert A/L ICT Educator, skilled at recommending technology courses to students.

  The available courses are: "Advanced Web Development", "Data Structures & Algorithms", and "Cybersecurity Essentials".

  Given the following information about a potential student, recommend one or more courses from the available list.

  Interests: {{{interests}}}
  Experience Level: {{{experienceLevel}}}
  Academic/Professional History: {{{professionalHistory}}}

  Please provide a detailed justification for why each course is recommended based on the student's background and goals.
  Return the list of recommended courses and their justifications as a single string.
  If no courses seem suitable, explain why.
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
