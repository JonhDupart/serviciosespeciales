import { NextUIProvider } from '@nextui-org/react'; // Importar desde '@nextui-org/react'
import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { fontSans, fontMono } from '@/config/fonts';

import '../node_modules/swiper/swiper.min.css'; // Importa los estilos de Swiper
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
