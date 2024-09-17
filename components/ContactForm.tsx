// components/ContactForm.tsx
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Input, Textarea } from '@nextui-org/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Function to validate form fields
  const validateForm = (): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name) newErrors.name = 'El nombre es obligatorio';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Por favor, ingresa un correo electrónico válido';
    if (!message) newErrors.message = 'El mensaje es obligatorio';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const result = await emailjs.send(
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

      setStatus('Correo fue enviado con éxito');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } catch (error) {
     
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">Formulario de Contacto</h3>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tu nombre</label>
          <Input
            id="name"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            aria-label="Tu nombre"
            className="mb-1"
          />
          {errors.name && <p className="text-yellow-500 mt-1 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Tu correo electrónico</label>
          <Input
            id="email"
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            aria-label="Tu correo electrónico"
            className="mb-1"
          />
          {errors.email && <p className="text-yellow-500 mt-1 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tu mensaje</label>
          <Textarea
            id="message"
            placeholder="Tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            fullWidth
            aria-label="Tu mensaje"
            className="mb-1"
          />
          {errors.message && <p className="text-yellow-500 mt-1 text-sm">{errors.message}</p>}
        </div>

        <Button type="submit" color="primary" size="lg">
          Enviar
        </Button>

        {status && <p className="mt-4 text-yellow-500">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
