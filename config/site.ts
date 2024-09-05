export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Servicios Especiales Para su Casa',
  description:
    'Mantenimiento, reparación y construción para todo tipo de espacios, desde colgar la base del televisor hasta una remodelación completa de tu hogar.',
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
      label: 'Precio',
      href: '/precios',
    },

    {
      label: 'Nosotros',
      href: '/nosotros',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    whatsapp: 'https://wa.me/1234567890',
    facebook: 'https://facebook.com/yourpage',
    instagram: 'https://instagram.com/yourprofile',
  },
};
