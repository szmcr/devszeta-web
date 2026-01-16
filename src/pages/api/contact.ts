import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export const prerender = false;

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
  timestamp?: string;
}

interface ValidationError {
  field: string;
  message: string;
}

const MIN_FORM_FILL_TIME = 3000; // 3 seconds minimum to fill form

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Honeypot check (anti-spam)
  if (data.honeypot) {
    errors.push({ field: 'honeypot', message: 'Spam detected' });
    return errors;
  }

  // Time-based validation (anti-spam)
  if (data.timestamp) {
    const submitTime = Date.now();
    const formLoadTime = parseInt(data.timestamp, 10);
    const timeDiff = submitTime - formLoadTime;

    if (timeDiff < MIN_FORM_FILL_TIME) {
      errors.push({ field: 'timestamp', message: 'Form submitted too quickly' });
      return errors;
    }

    // Also check if timestamp is too old (more than 1 hour)
    if (timeDiff > 60 * 60 * 1000) {
      errors.push({ field: 'timestamp', message: 'Form session expired' });
      return errors;
    }
  }

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'El nombre debe tener al menos 2 caracteres' });
  } else if (data.name.length > 100) {
    errors.push({ field: 'name', message: 'El nombre es demasiado largo' });
  }

  // Email validation
  if (!data.email || !validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Por favor ingresa un email válido' });
  } else if (data.email.length > 100) {
    errors.push({ field: 'email', message: 'El email es demasiado largo' });
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length < 3) {
    errors.push({ field: 'subject', message: 'El asunto debe tener al menos 3 caracteres' });
  } else if (data.subject.length > 200) {
    errors.push({ field: 'subject', message: 'El asunto es demasiado largo' });
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'El mensaje debe tener al menos 10 caracteres' });
  } else if (data.message.length > 2000) {
    errors.push({ field: 'message', message: 'El mensaje es demasiado largo' });
  }

  // Check for spam patterns
  const spamPatterns = [
    /viagra/i,
    /casino/i,
    /lottery/i,
    /\b(buy|cheap|discount)\s+(now|here)\b/i,
    /click\s+here/i,
  ];

  const fullText = `${data.name} ${data.subject} ${data.message}`.toLowerCase();
  if (spamPatterns.some(pattern => pattern.test(fullText))) {
    errors.push({ field: 'message', message: 'Contenido sospechoso detectado' });
  }

  return errors;
}

async function sendToSupabase(data: ContactFormData): Promise<boolean> {
  const supabaseUrl = import.meta.env.SUPABASE_URL;
  const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase credentials not configured');
    console.error('SUPABASE_URL:', supabaseUrl ? 'Set' : 'Missing');
    console.error('SUPABASE_ANON_KEY:', supabaseKey ? 'Set' : 'Missing');
    console.error('Please create a .env file with your Supabase credentials');
    return false;
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: result, error } = await supabase
      .from('contacts')
      .insert({
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        subject: data.subject.trim(),
        message: data.message.trim(),
        submitted_at: new Date().toISOString(),
        status: 'New',
      })
      .select();

    if (error) {
      console.error('Supabase insert error:', error.message);
      console.error('Error details:', error);
      return false;
    }

    console.log('Message saved to Supabase:', result);
    return true;
  } catch (error) {
    console.error('Error sending to Supabase:', error);
    return false;
  }
}

async function sendEmailNotification(data: ContactFormData): Promise<boolean> {
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const notificationEmail = import.meta.env.NOTIFICATION_EMAIL || 'info@devszeta.com';

  if (!resendApiKey) {
    console.error('Resend API key not configured');
    console.error('RESEND_API_KEY:', resendApiKey ? 'Set' : 'Missing');
    return false;
  }

  try {
    const resend = new Resend(resendApiKey);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
          Nuevo mensaje de contacto
        </h2>
        
        <div style="margin: 20px 0;">
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Asunto:</strong> ${data.subject}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
    `;

    const { data: result, error } = await resend.emails.send({
      from: 'DevSZeta <info@devszeta.com>',
      to: [notificationEmail],
      subject: `Nuevo contacto: ${data.subject}`,
      html: emailHtml,
      replyTo: data.email,
    });

    if (error) {
      console.error('Resend email error:', error);
      return false;
    }

    console.log('Email notification sent:', result);
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('Contact API called');
    console.log('Environment check:', {
      SUPABASE_URL: import.meta.env.SUPABASE_URL ? 'Set' : 'Missing',
      SUPABASE_ANON_KEY: import.meta.env.SUPABASE_ANON_KEY ? 'Set' : 'Missing',
    });
    
    // Parse form data
    const contentType = request.headers.get('content-type');
    let formData: ContactFormData;

    if (contentType?.includes('application/json')) {
      formData = await request.json();
    } else if (contentType?.includes('multipart/form-data') || contentType?.includes('application/x-www-form-urlencoded')) {
      const form = await request.formData();
      formData = {
        name: form.get('name') as string,
        email: form.get('email') as string,
        subject: form.get('subject') as string,
        message: form.get('message') as string,
        honeypot: form.get('website') as string,
        timestamp: form.get('timestamp') as string,
      };
    } else {
      // Default to JSON if content-type is not specified
      formData = await request.json();
    }

    // Validate form data
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          errors: validationErrors,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Send to Supabase
    const supabaseSuccess = await sendToSupabase(formData);

    if (!supabaseSuccess) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Error al enviar el mensaje. Por favor intenta de nuevo más tarde.',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Send email notification
    const emailSuccess = await sendEmailNotification(formData);
    
    if (!emailSuccess) {
      console.warn('Email notification failed, but message was saved to database');
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: '¡Mensaje enviado exitosamente! Te contactaremos pronto.',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Error al procesar el formulario. Por favor intenta de nuevo.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
