'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export async function sendContactEmail(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name    = formData.get('name')?.toString().trim() ?? '';
  const email   = formData.get('email')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  // Validate
  const errors: FormState['errors'] = {};
  if (!name)                          errors.name    = 'Name is required.';
  if (!email)                         errors.email   = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                                      errors.email   = 'Enter a valid email address.';
  if (!message)                       errors.message = 'Message is required.';
  else if (message.length < 10)       errors.message = 'Message must be at least 10 characters.';

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the errors below.', errors };
  }

  try {
    await resend.emails.send({
      from:    'Contact Form <onboarding@resend.dev>',
      to:      'kritikakedia@gmail.com',         // ← your email
      subject: `New message from ${name}`,
      text:    `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html:    `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return { status: 'success', message: "Thanks! I'll get back to you soon." };
  } catch (err) {
    console.error('[sendContactEmail]', err);
    return { status: 'error', message: 'Something went wrong. Please try again.' };
  }
}
