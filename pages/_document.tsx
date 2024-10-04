import clsx from 'clsx';
import { Html, Head, Main, NextScript } from 'next/document';
import { fontSans, fontMono, fontPoppins } from '@/config/fonts';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={clsx('min-h-screen antialiased', fontSans.variable, fontMono.variable, fontPoppins.variable)}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
