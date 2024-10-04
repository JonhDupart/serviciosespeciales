export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Servicios Especiales Para su Casa',
  description:
    'Mantenimiento, reparación y construcción para todo tipo de espacios, desde colgar la base del televisor hasta la remodelación completa de tu hogar.',
  navItems: [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Servicios',
      href: '/servicios',
    },
   
    {
      label: 'Nosotros',
      href: '/nosotros', // Corregido 'nosotro' a 'nosotros'
    },
  ],
  navMenuItems: [
    {
      label: 'Servicios',
      href: '/servicios',
    },
    {
      label: 'Precios',
      href: '/precios',
    },
    {
      label: 'Trabajos',
      href: '/trabajos',
    },
    {
      label: 'Nosotros',
      href: '/nosotros', // Corregido 'nosotros' de nuevo
    },
    {
      label: 'Contáctanos',
      href:'contactanos',
    },
  ],
  links: {
    whatsapp: 'https://wa.me/573015360531', // Corregido el número de teléfono
    facebook: 'https://facebook.com/yourpage',
    instagram: 'https://instagram.com/yourprofile',
  },
};
