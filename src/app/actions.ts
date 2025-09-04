"use client";  //ensures this runs in the browser

export async function sendEmailAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const whatsapp = formData.get("whatsapp") as string | null;
  const message = formData.get("message") as string;

  const recipient = "maleeshshanuka@gmail.com";
  const subject = `New Message from ${name}`;

  let body = `New message from portfolio contact form:\n\n`;
  body += `Name: ${name}\n`;
  body += `Email: ${email}\n`;
  if (whatsapp) {
    body += `WhatsApp: ${whatsapp}\n`;
  }
  body += `\nMessage:\n${message}\n`;

  //open the user's email client
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}
