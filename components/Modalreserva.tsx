import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from "@nextui-org/react";
import { MdOutlineCalendarMonth } from "react-icons/md";

interface Question {
  question: string;
  type: 'select' | 'textarea' | 'date' | 'time';
  options?: string[];
  required?: boolean;
}

const baseQuestions: Question[] = [
  { question: '¿Cuál es tu dirección?', type: 'select', options: ['Cajica', 'Zipaquirá', 'Chía', 'Sopo', 'Cogua', 'Tabio', 'Tenjo', 'Nemocón', 'Gachanzipa', 'Tocanzipa'], required: true },
  { question: 'Selecciona la categoría de tu servicio', type: 'select', options: ['Electricidad domestica', 'Acabados', 'Construcción en estructura metálica', 'Jardinería'], required: true },
  { question: '¿Tipo de visita?', type: 'select', options: ['Cotización Virtual', 'Cotización Física'], required: true },
  { question: '¿Qué día prefieres para la visita?', type: 'date', required: true },
  { question: '¿Qué horario prefieres?', type: 'select', options: ['Temprano 8 AM - 11 AM', 'Medio Día 11 AM - 2 PM', 'Tarde 2 PM - 5 PM'], required: true },
];

const prices: Record<string, number> = {
  'Cotización Virtual': 11000,
  'Cotización Física': 22000,
};

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionsLength = baseQuestions.length;
  const [responses, setResponses] = useState<string[]>(Array(questionsLength).fill(''));
  const [error, setError] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = e.target.value;

    if (currentQuestionIndex === 0) {
      setSelectedCity(e.target.value);
    }
    
    setResponses(updatedResponses);
    setError('');

    if (currentQuestionIndex === 2) {
      const selectedVisitType: keyof typeof prices = e.target.value as keyof typeof prices;
      setPrice(prices[selectedVisitType] || 0);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    const updatedResponses = [...responses];

    updatedResponses[currentQuestionIndex] = date ? date.toISOString().split('T')[0] : '';
    setResponses(updatedResponses);
  };

  const handleNext = () => {
    const currentQuestion = baseQuestions[currentQuestionIndex];

    // Validación de dirección solo si estamos en la primera pregunta
    if (currentQuestionIndex === 0 && !responses[0]) {
      setError('Debes seleccionar una ciudad.');
      return;
    }

    if (currentQuestion.required && !responses[currentQuestionIndex]) {
      setError('Esta pregunta es obligatoria.');
      return;
    }

    if (currentQuestionIndex < questionsLength - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setError(''); // Limpiar el error al avanzar
    } else {
      const selectedVisitType = responses[2];
      const message = `Hola, me gustaría reservar un servicio\n\n` +
                      `1. Ubicación: ${responses[0]}\n` +
                      `2. Categoría: ${responses[1]}\n` +
                      `3. Tipo de visita: ${selectedVisitType} - Precio: $${price}\n` +
                      `4. Fecha: ${responses[3]}\n` +
                      `5. Horario: ${responses[4]}`;

      window.open(`https://api.whatsapp.com/send/?phone=573204749676&text=${encodeURIComponent(message)}`);
      onOpenChange();
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setError('');
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="warning" endContent={<MdOutlineCalendarMonth />}>Agendar servicio</Button>
      <Modal className='w-full h-auto mb-52' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="progress-bar w-full mb-2">
                  <span className="txt_pasos">Paso {currentQuestionIndex + 1} de {questionsLength}</span>
                  <div className="progress">
                    <div
                      className="progress-bar pb_wizard"
                      role="progressbar"
                      aria-valuenow={currentQuestionIndex + 1}
                      aria-valuemin={1}
                      aria-valuemax={questionsLength}
                      style={{ width: `${((currentQuestionIndex + 1) / questionsLength) * 100}%` }}
                    />
                  </div>
                </div>
                Completa los pasos 
              </ModalHeader>
              <ModalBody className="flex flex-col items-center w-full">
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex flex-col items-center"
                >
                  <h2 className="text-xl font-bold text-center mb-4">{baseQuestions[currentQuestionIndex].question}</h2>
                  {baseQuestions[currentQuestionIndex].type === 'select' ? (
                    <select
                      className="border border-gray-300 rounded p-2 mt-2 w-full"
                      onChange={handleChange}
                      value={responses[currentQuestionIndex]}
                    >
                      <option value="">Seleccione una opción</option>
                      {baseQuestions[currentQuestionIndex].options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : baseQuestions[currentQuestionIndex].type === 'date' ? (
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      inline
                      closeOnScroll={(e) => e.target === document}
                      dateFormat="yyyy-MM-dd"
                      minDate={new Date()} // Establecer la fecha mínima a hoy
                      className="border border-gray-300 rounded p-2 mt-2 w-full"
                    />
                  ) : (
                    <textarea
                      className="border border-gray-300 rounded p-2 mt-2 w-full"
                      onChange={handleChange}
                      value={responses[currentQuestionIndex]}
                      rows={4}
                    />
                  )}
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </motion.div>
              </ModalBody>
              <ModalFooter>
                {currentQuestionIndex >= 1 && responses[2] && (
                  <p className="mt-2 text-center">Precio por visita: ${price}</p>
                )}
                <Button color="danger" variant="light" onPress={handleBack} disabled={currentQuestionIndex === 0}>
                  Volver
                </Button>
                <Button color="warning" onPress={handleNext}>
                  Continuar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
