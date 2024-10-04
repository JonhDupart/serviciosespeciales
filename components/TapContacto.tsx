import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { FaWhatsapp, FaMailBulk, FaWpforms } from "react-icons/fa";
import Image from "next/image";

const App: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("photos");

  const handleSelectionChange = (key: string | number) => {
    setSelected(key as string);
  };

  return (
    <div className="w-full h-[450px] justify-center items-center ">
      <Tabs
        variant="underlined"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={handleSelectionChange}
        className="h-20 override-inline-flex opacity-100 "
        color={
          selected === "photos" ? "success" :
          selected === "music" ? "primary" :
          selected === "videos" ? "warning" : "default"
        }
      >
        <Tab
          className="h-16"
          key="photos"
          title={
            <div className="flex flex-col items-center p-2">
              <FaWhatsapp className="h-8 w-8 mb-1" />
              <span className="text-sm">Whatsapp</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <div className="flex flex-col items-center md:flex-row md:items-start">
                <div className="rounded-xl flex-shrink-0 mb-4 md:mb-0 md:mr-4 bg-gradient-to-r from-custom-green-dark to-custom-green-light p-2">
                  <Image
                    src="/whatsapp.jpg" // Ruta de la imagen
                    alt="Descripción de la imagen"
                    width={128}
                    height={128}
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="text-sm flex justify-between items-start">
  <div className="flex-grow"> {/* Permite que este div ocupe espacio */}
    <h2 className="text-lg font-semibold mb-2 ">Contáctanos por WhatsApp</h2>
    <p>
    para recibir atención rápida y personalizada.
     Resolvemos tus dudas, coordinamos servicios y brindamos asesoría en tiempo real.</p>
    <a
      href="https://api.whatsapp.com/send/?phone=573015360531&text=Hola%2C+me+gustar%C3%ADa+saber+m%C3%A1s+sobre+sus+servicios.&type=phone_number&app_absent=0" // Cambia "tuNumero" por tu número de WhatsApp
      className="flex items-center mt-4 text-green-600 hover:underline text-base"
    >
      WhatsApp <span className="ml-1">&#8594;</span> {/* Flecha hacia la derecha */}
    </a>
  </div>
  <div className="relative flex items-center"> {/* Alinea verticalmente el botón */}
  <svg
  aria-hidden="true"
  fill="transparent" // Establece el fondo como transparente
  className="fill-warning" // Cambia el color al hacer hover
  focusable="false"
  height="25"
  role="presentation"
  viewBox="0 0 24 24"
  width="25"
>
  <path
    d="M13.73 3.51001L15.49 7.03001C15.73 7.52002 16.37 7.99001 16.91 8.08001L20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.01997 21.35C5.87997 22.62 4.57997 21.67 5.13997 19.25L5.84997 16.18C5.97997 15.6 5.74997 14.79 5.32997 14.37L2.84997 11.89C1.38997 10.43 1.85997 8.95001 3.89997 8.61001L7.08997 8.08001C7.61997 7.99001 8.25997 7.52002 8.49997 7.03001L10.26 3.51001C11.22 1.60001 12.78 1.60001 13.73 3.51001Z"
    fill="warning" // Cambia el color del ícono
  ></path>
</svg>


  </div>
</div>

              </div>
            </CardBody>
          </Card>
        </Tab>

        <Tab
          className="h-16"
          key="music"
          title={
            <div className="flex flex-col items-center p-2">
              <FaMailBulk className="h-8 w-8 mb-1" />
              <span className="text-sm">Email</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <div className="flex flex-col items-center md:flex-row md:items-start">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4 bg-gradient-to-r from-custom-blue-dark to-primary p-2 rounded-lg">
                  <Image
                    src="/email.jpg" // Ruta de la imagen
                    alt="Descripción de la imagen"
                    width={128}
                    height={128}
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="text-sm flex justify-between items-start">
  <div className="flex-grow"> {/* Permite que este div ocupe espacio */}
    <h2 className="text-lg font-semibold mb-2">Contáctanos por Email</h2>
    <p>
     y te responderemos con la información que necesitas, ya sea sobre cotizaciones, dudas o servicios.</p>
    <a
      href="mailto:ejemplo@dominio.com" // Cambia "tuNumero" por tu número de WhatsApp
      className="flex items-center mt-4 text-primary hover:underline text-base"
    >
      Escríbenos un email<span className="ml-1">&#8594;</span> {/* Flecha hacia la derecha */}
    </a>
  </div>
  <div className="relative flex items-center"> {/* Alinea verticalmente el botón */}
  <svg
  aria-hidden="true"
  fill="transparent" // Establece el fondo como transparente
  className="fill-warning" // Cambia el color al hacer hover
  focusable="false"
  height="25"
  role="presentation"
  viewBox="0 0 24 24"
  width="25"
>
  <path
    d="M13.73 3.51001L15.49 7.03001C15.73 7.52002 16.37 7.99001 16.91 8.08001L20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.01997 21.35C5.87997 22.62 4.57997 21.67 5.13997 19.25L5.84997 16.18C5.97997 15.6 5.74997 14.79 5.32997 14.37L2.84997 11.89C1.38997 10.43 1.85997 8.95001 3.89997 8.61001L7.08997 8.08001C7.61997 7.99001 8.25997 7.52002 8.49997 7.03001L10.26 3.51001C11.22 1.60001 12.78 1.60001 13.73 3.51001Z"
    fill="warning" // Cambia el color del ícono
  ></path>
</svg>


  </div>
</div>
              </div>
            </CardBody>
          </Card>
        </Tab>

        <Tab
          className="h-16"
          key="videos"
          title={
            <div className="flex flex-col items-center p-2">
              <FaWpforms className="h-8 w-8 mb-1" />
              <span className="text-sm">Formulario</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <div className="flex flex-col items-center md:flex-row md:items-start">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4 bg-gradient-to-r from-warning to-custom-yellow p-2 rounded-lg ">
                  <Image
                    src="/formulario.jpg" // Ruta de la imagen
                    alt="Descripción de la imagen"
                    width={128}
                    height={128}
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="text-sm flex justify-between items-start">
  <div className="flex-grow"> {/* Permite que este div ocupe espacio */}
    <h2 className="text-lg font-semibold mb-2">Utiliza el Formulario</h2>
    <p>
    Completa nuestro formulario web y nos pondremos en contacto contigo lo antes posible.    </p>
    <a
      href="#formulario" // Cambia "tuNumero" por tu número de WhatsApp
      className="flex items-center mt-4 text-warning hover:underline text-base"
    >
      Completa el formulario <span className="ml-1">&#8594;</span> {/* Flecha hacia la derecha */}
    </a>
  </div>
  <div className="relative flex items-center"> {/* Alinea verticalmente el botón */}
  <svg
  aria-hidden="true"
  fill="transparent" // Establece el fondo como transparente
  className="fill-warning " // Cambia el color al hacer hover
  focusable="false"
  height="25"
  role="presentation"
  viewBox="0 0 24 24"
  width="25"
>
  <path
    d="M13.73 3.51001L15.49 7.03001C15.73 7.52002 16.37 7.99001 16.91 8.08001L20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.01997 21.35C5.87997 22.62 4.57997 21.67 5.13997 19.25L5.84997 16.18C5.97997 15.6 5.74997 14.79 5.32997 14.37L2.84997 11.89C1.38997 10.43 1.85997 8.95001 3.89997 8.61001L7.08997 8.08001C7.61997 7.99001 8.25997 7.52002 8.49997 7.03001L10.26 3.51001C11.22 1.60001 12.78 1.60001 13.73 3.51001Z"
    fill="warning" // Cambia el color del ícono
  ></path>
</svg>


  </div>
</div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
