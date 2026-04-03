'use server';

import { Resend } from 'resend';
import { CONTACT_INFO } from '@/lib/constants';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return { error: 'Prosím zadejte platný e-mail.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Voňavý Dotek <onboarding@resend.dev>', // Default from Resend for testing
      to: [CONTACT_INFO.email],
      subject: 'Nová registrace k novinkám 🌿',
      html: `
        <div style="font-family: serif; color: #1c1917; padding: 20px; border: 1px solid #e7e5e4; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #44403c; font-style: italic;">Nová duše se k nám přidala!</h2>
          <p style="font-size: 16px; line-height: 1.6;">
            Na vašem webu <strong>Voňavý dotek</strong> se právě někdo registroval k odběru novinek.
          </p>
          <div style="background-color: #f5f5f4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <strong>E-mail klienta:</strong> ${email}
          </div>
          <p style="font-size: 14px; color: #78716c; margin-top: 30px;">
            Toto je automatická zpráva z vašeho webu.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { error: 'Něco se nepovedlo při odesílání.' };
    }

    return { success: true };
  } catch (err) {
    console.error('Subscription error:', err);
    return { error: 'Omlouváme se, došlo k chybě na serveru.' };
  }
}
