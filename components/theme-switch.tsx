// Importaciones de módulos externos
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { FC, useState, useEffect } from "react";

// Importaciones de módulos internos
import { MoonIcon } from './MoonIcon'; // Asegúrate de que la ruta sea correcta
import { SunIcon } from './SunIcon'; // Asegúrate de que la ruta sea correcta

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const onChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <Switch
      isSelected={theme === 'dark'} // Se selecciona el tema oscuro si el estado actual es oscuro
      onChange={onChange}
      size="lg"
      color="warning"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      className={className}
    />
  );
};
