'use server';
/**
 * @fileOverview A flow to format a contact message into a mailto link.
 *
 * - formatEmailFlow - A function that takes contact details and returns a mailto link.
 * - ContactFormInput - The input type for the formatEmailFlow function.
 * - MailtoOutput - The return type for the formatEmailFlow function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  whatsapp: z.string().optional().nullable().describe('The WhatsApp number of the sender (optional).'),
  message: z.string().describe('The message content.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const MailtoOutputSchema = z.string().describe('The formatted mailto link.');
export type MailtoOutput = z.infer<typeof MailtoOutputSchema>;

export async function formatEmailFlow(input: ContactFormInput): Promise<MailtoOutput> {
  return formatEmailGenkitFlow(input);
}

const formatEmailGenkitFlow = ai.defineFlow(
  {
    name: 'formatEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: MailtoOutputSchema,
  },
  async (input) => {
    const recipient = 'maleeshshanuka@gmail.com';
    const subject = `New Message from ${input.name}`;
    
    let body = `You have received a new message from your portfolio contact form:\n\n`;
    body += `Name: ${input.name}\n`;
    body += `Email: ${input.email}\n`;
    if (input.whatsapp) {
      body += `WhatsApp: ${input.whatsapp}\n`;
    }
    body += `\nMessage:\n${input.message}\n`;

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return mailto;
  }
);
