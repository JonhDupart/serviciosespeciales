import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  width?: number;
  height?: number;
  [key: string]: any; // Para otras props
};
