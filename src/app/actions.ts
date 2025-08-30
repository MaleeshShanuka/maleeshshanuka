
'use server';

import { recommendClasses as recommendClassesFlow, type RecommendClassesInput } from '@/ai/flows/recommend-classes-based-on-interest';
import { z } from 'zod';

const RecommendClassesSchema = z.object({
  interests: z.string().min(10, "Please describe your interests in a bit more detail."),
  experienceLevel: z.string({ required_error: "Please select your experience level."}).min(1, "Please select your experience level."),
  professionalHistory: z.string().optional(),
});

export type RecommendationState = {
  message: string;
  recommendation?: string;
  errors?: {
    interests?: string[];
    experienceLevel?: string[];
    professionalHistory?: string[];
  }
}

export async function getRecommendedClasses(prevState: RecommendationState, formData: FormData): Promise<RecommendationState> {
  const validatedFields = RecommendClassesSchema.safeParse({
    interests: formData.get('interests'),
    experienceLevel: formData.get('experienceLevel'),
    professionalHistory: formData.get('professionalHistory'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await recommendClassesFlow(validatedFields.data as RecommendClassesInput);
    if (!result || !result.recommendedClasses) {
        return { message: "Sorry, we couldn't generate recommendations at this time. Please try again." };
    }
    return {
      message: 'Success!',
      recommendation: result.recommendedClasses,
    };
  } catch (error) {
    console.error('AI Recommendation Error:', error);
    return {
      message: 'An unexpected error occurred while generating recommendations. Please try again later.',
    };
  }
}
