// components/ContactForm.tsx
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Input, Textarea } from '@nextui-org/react';
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Hook to track if the component is in view
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

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
      setStatus(`Completa los campos requeridos ${missingFields.join(', ')}.`);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: name,
          from_email: email,
          message,
          to_name: 'Servicios Especiales Para Su Casa',
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
      );

      setStatus('El correo fue enviado con éxito');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } catch (error) {
      setStatus('Error al enviar el correo. Intenta de nuevo más tarde.');
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      className="max-w-lg"
    >
      <form onSubmit={handleSubmit} id='formulario'>
        <h2 className='text-xl p-5 font-semibold uppercase text-start'>Formulario</h2>
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
    </motion.div>
  );
};

export default ContactForm;
