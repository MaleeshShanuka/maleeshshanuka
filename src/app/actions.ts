'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EmailFormInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  whatsapp: z.string().optional(),
  body: z.string(),
});

type EmailFormInput = z.infer<typeof EmailFormInputSchema>;

const EmailFlowOutputSchema = z.object({
  mailto: z.string(),
});

type EmailFlowOutput = z.infer<typeof EmailFlowOutputSchema>;

const emailSenderFlow = ai.defineFlow(
  {
    name: 'emailSenderFlow',
    inputSchema: EmailFormInputSchema,
    outputSchema: EmailFlowOutputSchema,
  },
  async (input) => {
    const prompt = `You are a helpful assistant that creates mailto links.
      The user's name is ${input.name}.
      The user's email is ${input.email}.
      The user's WhatsApp number is ${input.whatsapp || 'not provided'}.
      The user's message is:
      ${input.body}
      
      Create a mailto link for "maleeshshanuka@gmail.com" with the subject "New message from portfolio contact form" and a body that includes all the user's information.
      The body should be URL-encoded.
      The body should start with "New message from portfolio contact form".
      The response should be just the mailto link, and nothing else.
      `;
    
    const llmResponse = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-1.5-flash',
      config: {
        temperature: 0,
      }
    });
    
    return {
      mailto: llmResponse.text,
    };
  }
);

export async function sendEmail(
  prevState: { mailto: string },
  formData: FormData
) {
  const input: EmailFormInput = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    whatsapp: formData.get('whatsapp') as string,
    body: formData.get('body') as string,
  };
  
  const result = await emailSenderFlow(input);
  return {
    mailto: result.mailto,
  };
}