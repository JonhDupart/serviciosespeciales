import { Link } from '@nextui-org/link';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import clsx from 'clsx';
import NextLink from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

import { Logo } from '@/components/icons';
import { ThemeSwitch } from '@/components/theme-switch';

import { siteConfig } from '@/config/site';

import useScrollDirection from './useScrollDirection';

export const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        window.pageYOffset || document.documentElement.scrollTop;

      setScrollY(currentScrollY);

      if (currentScrollY > 666) {
        if (scrollDirection === 'down') {
          setIsVisible(false);
        } else if (scrollDirection === 'up') {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true); // Always show the Navbar if scroll position is less than 600px
      }
    };

    // Inicializar scroll al cargar la página
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection, scrollY]);

  const navbarClasses = clsx(
    'fixed top-0 left-0 w-full transition-transform transition-opacity duration-300 ease-in-out p-4',
    {
      'transform translate-y-[-10%] opacity-0': !isVisible,
      'transform translate-y-0 opacity-100': isVisible,
    }
  );

  const iconStyle = { fontSize: '24px' };

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className={navbarClasses}>
      <NavbarContent className="shouldHideOnScroll flex justify-between items-center">
        {/* Logo on the left */}
        <NavbarBrand className="flex gap-3">
          <NextLink className="flex items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">S E P S C</p>
          </NextLink>
        </NavbarBrand>

        {/* Navigation links and menu aligned to the right (for larger screens) */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          {/* Navigation links */}
          <div className="flex gap-4">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    'text-foreground',
                    'data-[active=true]:text-primary data-[active=true]:font-medium'
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </div>

          {/* Icons and ThemeSwitch */}
          <NavbarItem className="flex gap-2">
            <Link isExternal href={siteConfig.links.whatsapp}>
              <FaWhatsapp style={iconStyle} className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.facebook}>
              <FaFacebook style={iconStyle} className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.instagram}>
              <FaInstagram style={iconStyle} className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>

          {/* NavbarMenu aligned to the right */}
          <NavbarItem>
            <NavbarMenu>
              <div className="mx-4 mt-20 flex flex-col gap-2">
                {siteConfig.navMenuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                      color={
                        index === 2
                          ? 'primary'
                          : index === siteConfig.navMenuItems.length - 1
                            ? 'danger'
                            : 'foreground'
                      }
                      href="#"
                      size="lg"
                    >
                      {item.label}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </div>
            </NavbarMenu>
          </NavbarItem>
        </div>

        {/* Mobile view */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeSwitch />
          <div className="relative">
            {/* A wrapper to increase click area */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-transparent">
              <NavbarMenuToggle className="text-3xl" />
            </div>
          </div>
        </div>
      </NavbarContent>
    </NextUINavbar>
  );
};
