import Link from "next/link";
import { useState, useEffect } from "react";
import Hamburguer from "../../icons/Hamburguer";
import Logo from "../Logo";
import Close from "../../icons/Close";
import {
  CloseMenuButton,
  Container,
  DesktopMenu,
  DesktopMenuItem,
  HamburguerButton,
  MobileMenu,
  MobileMenuItem,
  Navigation,
} from "./style";
import Button from "../Button";
import IsMobile from "../IsMobile";
import { Router } from "next/router";

interface HeaderProps {
  isHome?: boolean;
}

export default function Header({ isHome = false }: HeaderProps) {
  //change background color when scroll
  const [scroll, setScroll] = useState(false);

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  useEffect(() => {
    if (!isHome) return;
    const callback = () => {
      setScroll(window.scrollY > 400);
    };

    window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      setScroll(true);
    }
  }, [isHome]);

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      setIsMobileMenuActive(false);
    });

    return () => {
      Router.events.off("routeChangeComplete", () => {
        setIsMobileMenuActive(false);
      });
    };
  }, []);

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "#",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact Us",
      href: "#",
    },
    {
      label: "Sign Up",
      href: "#",
      variant: "ghost",
    },
  ];

  return (
    <Container scroll={scroll}>
      <Navigation as="nav">
        <Logo href="/" />
        <IsMobile
          desktop={
            <DesktopMenu>
              {links.map(({ href, label, variant }) => {
                return variant === "ghost" ? (
                  <Button
                    sx={{
                      padding: "10px 30px",
                      marginLeft: "15px",
                    }}
                    key={label}
                    variant="ghost"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ) : (
                  <DesktopMenuItem href={href} key={label}>
                    {label}
                  </DesktopMenuItem>
                );
              })}
            </DesktopMenu>
          }
          mobile={
            <>
              <HamburguerButton onClick={toggleMobileMenu}>
                <Hamburguer
                  width={30}
                  height={15}
                  fill={scroll ? "#21283B" : "#ffffff"}
                />
              </HamburguerButton>
              <MobileMenu isActive={isMobileMenuActive}>
                <CloseMenuButton onClick={toggleMobileMenu}>
                  <Close width={20} height={20} />
                </CloseMenuButton>
                {links.map(({ href, label }) => (
                  <MobileMenuItem key={label}>
                    <Link href={href}>{label}</Link>
                  </MobileMenuItem>
                ))}
              </MobileMenu>
            </>
          }
        />
      </Navigation>
    </Container>
  );
}
