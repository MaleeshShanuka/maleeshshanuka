
'use server';

import { formatEmailFlow } from '@/ai/flows/format-email-flow';

export async function sendEmailAction(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const whatsapp = formData.get('whatsapp') as string | null;
  const message = formData.get('message') as string;

  const mailtoLink = await formatEmailFlow({ name, email, whatsapp, message });

  return { mailtoLink };
}
