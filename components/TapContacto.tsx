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
    <div className="w-full h-72 justify-center items-center">
      <Tabs
      variant="underlined"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={handleSelectionChange}
        className="h-20 override-inline-flex opacity-100 "
        color={selected === "photos" ? "success" :
               selected === "music" ? "primary" :
               selected === "videos" ? "warning" : "default"}
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
                <div className="text-sm">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
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
                <div className="text-sm">
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
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
                <div className="text-sm">
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
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
