// components/ContactForm.tsx
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Input, Textarea } from '@nextui-org/react';
import { RainbowButton } from "@/components/magicui/rainbow-button";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Function to validate form fields
  const validateForm = (): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    const nameRegex = /^[A-Za-z\s]+$/; // Regex para solo letras y espacios

    if (!name) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (!nameRegex.test(name)) {
      newErrors.name = 'El nombre solo puede contener letras y espacios';
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Por favor, ingresa un correo electrónico válido';
    }

    if (!message) {
      newErrors.message = 'El mensaje es obligatorio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar antes de enviar
    if (!validateForm()) {
      const missingFields = [];
      if (!name) missingFields.push('nombre');
      if (!email) missingFields.push('correo electrónico');
      if (!message) missingFields.push('mensaje');
      setStatus(`Faltan llenar los siguientes campos: ${missingFields.join(', ')}.`);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', // ID del servicio
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', // ID de la plantilla
        {
          from_name: name,
          from_email: email,
          message,
          to_name: 'Servicios Especiales Para Su Casa', // Nombre del destinatario
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '' // ID del usuario
      );

      // Mostrar mensaje de éxito
      setStatus('El correo fue enviado con éxito');
      // Limpiar los campos
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } catch (error) {
      // Manejar errores de envío
      setStatus('Error al enviar el correo. Intenta de nuevo más tarde.');
    }
  };

  return (
    <div className="max-w-lg mx-auto  items-center justify-center">
      <form onSubmit={handleSubmit}>
        <h2 className=' text-xl p-5 font-semibold uppercase text-start'>Formulario</h2>
        <div>
          <Input
            id="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Nombre"
            className="mb-5"
          />
          {errors.name && <p className="text-yellow-500 mt-1 text-sm">{errors.name}</p>}
        </div>

        <div>
          <Input
            id="email"
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            aria-label="Correo Electrónico"
            className="mb-5"
          />
          {errors.email && <p className="text-yellow-500 mt-1 text-sm">{errors.email}</p>}
        </div>

        <div>
          <Textarea
            id="message"
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            fullWidth
            aria-label="Mensaje"
            className="mb-5"
          />
          {errors.message && <p className="text-yellow-500 mt-1 text-sm">{errors.message}</p>}
        </div>

        <RainbowButton>
          Enviar
        </RainbowButton>

        {status && <p className="mt-4 text-yellow-500">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
