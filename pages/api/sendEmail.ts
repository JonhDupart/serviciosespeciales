// pages/api/sendEmail.ts

import emailjs from 'emailjs-com';
import type { NextApiRequest, NextApiResponse } from 'next';

emailjs.init(process.env.EMAILJS_USER_ID || '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      await emailjs.send(process.env.EMAILJS_SERVICE_ID || '', process.env.EMAILJS_TEMPLATE_ID || '', {
        from_name: name,
        to_name: 'Zipaquira Digital',
        from_email: email,
        message,
      });

      res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
      res.status(500).json({ error: 'Error al enviar el correo' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
