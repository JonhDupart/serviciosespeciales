import * as React from 'react';
import { useTheme } from 'next-themes'; // Importa useTheme
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '@/public/logo.svg'; // Logo claro
import logoImage from '@/public/logowhite.svg'; // Logo oscuro
import { IconSvgProps } from '@/types';
import Image from 'next/image';

// Iconos de Font Awesome
export const WhatsAppIcon: React.FC<IconSvgProps> = ({
  size = 36,
  ...props
}) => <FaWhatsapp size={size} {...props} />;

export const FacebookIcon: React.FC<IconSvgProps> = ({
  size = 36,
  ...props
}) => <FaFacebookF size={size} {...props} />;

export const InstagramIcon: React.FC<IconSvgProps> = ({
  size = 36,
  ...props
}) => <FaInstagram size={size} {...props} />;

// Componente Logo
export const Logo: React.FC<Omit<IconSvgProps, 'onCopy' | 'height' | 'width'>> = ({
  size = 86,
  ...props
}) => {
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = React.useState(logo); // Valor predeterminado

  React.useEffect(() => {
    // Actualiza el logo según el tema
    setLogoSrc(theme === 'dark' ? logoImage : logo);
  }, [theme]); // Se ejecuta cuando el tema cambia

  return (
    <Image
      src={logoSrc}
      alt="Logo"
      width={size}
      height={size}
      {...props}
    />
  );
};

// Icono de Twitter
export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
      fill="currentColor"
    />
  </svg>
);

// Icono de Github
export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

// Otros íconos
export const MoonFilledIcon = ({
  size = 36,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 36,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 .96zM12 4.08a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 .96zM5.93 6.071a.969.969 0 01-.57-1.356l.05-.082a1 1 0 011.4-.287 1.038 1.038 0 01.3 1.48l-.051.082a.971.971 0 01-1.38.144zM18.07 17.928a.971.971 0 01-1.38-.144l-.051-.082a1.038 1.038 0 01.3-1.48 1 1 0 011.4.287l.05.082a.969.969 0 01-.57 1.356zM18.93 6.071a.969.969 0 01-1.356-.57l-.082-.05a1 1 0 01.287-1.4 1.038 1.038 0 011.48.3l.082.051a.971.971 0 01-.144 1.38zM5.07 17.928a.971.971 0 01-.144-1.38l.051-.082a1.038 1.038 0 011.48.3 1 1 0 01-.287 1.4l-.082.05a.969.969 0 01-1.356-.57zM20.29 12a1 1 0 01-.96-1H19a1 1 0 010-2h.33a1 1 0 01.96-1.43 1.038 1.038 0 011.22 1.22 1 1 0 01-.96 1.43H19a1 1 0 010 2h.33a1 1 0 01.96 1.43 1.038 1.038 0 01-1.22-1.22zM4.71 12a1 1 0 01-.96-1H4a1 1 0 010-2h.33a1 1 0 01.96-1.43 1.038 1.038 0 011.22 1.22 1 1 0 01-.96 1.43H4a1 1 0 010 2h.33a1 1 0 01.96 1.43 1.038 1.038 0 01-1.22-1.22z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 36,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="currentColor"
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={36}
    role="presentation"
    viewBox="0 0 24 24"
    width={36}
    {...props}
  >
    <path
      d="M11 18a7 7 0 100-14 7 7 0 000 14zm-1 2h2v-2h-2v2zm1-16a9 9 0 11-9 9 9 9 0 019-9z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M24.48 1.18C23.41 1.12 22.31 1.12 21.22 1.12H16.72C15.63 1.12 14.53 1.12 13.44 1.12C12.36 1.12 11.26 1.12 10.17 1.12H5.63C4.53 1.12 3.44 1.12 2.34 1.12H1.3C.58 1.12 0 1.7 0 2.42V9.1C0 9.82.58 10.4 1.3 10.4H2.34C3.44 10.4 4.53 10.4 5.63 10.4H10.17C11.26 10.4 12.36 10.4 13.44 10.4H16.72C17.8 10.4 18.89 10.4 19.98 10.4H21.22C22.31 10.4 23.41 10.4 24.48 10.4C25.24 10.4 26 9.68 26 8.92V3.54C26 2.82 25.24 1.18 24.48 1.18Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M18.66 13.64C19.41 12.89 20.51 12.3 21.41 12.3C22.1 12.3 22.84 12.68 23.38 13.28L27.99 18.76C28.77 19.63 28.43 20.95 27.53 21.5L23.15 25.03C22.41 25.78 21.31 26.3 20.41 26.3C19.73 26.3 19 25.93 18.47 25.34L14.45 20.68C13.74 19.85 14.08 18.53 15.04 18.19L18.66 13.64Z"
      />
    </svg>
  );
};
