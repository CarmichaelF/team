import type { AppProps } from "next/app";
import "../styles/reset.css";
import "../styles/globals.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/500.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";
import "@fontsource/karla/800.css";
import Base from "../layouts/Base";
import { useEffect } from "react";
import lax from "lax.js";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    lax.init();
    // Add a driver that we use to control our animations
    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    lax.addElements(
      ".product-display, .product-display-reversed",
      {
        scrollY: {
          translateX: [
            ["elInY", "elCenterY", "elOutY"],
            ["screenHeight/9", 0, 0],
            {
              inertia: 10, // Options
            },
          ],
        },
      },
      []
    );

    return () => {
      lax.removeElements(".product-display, .product-display-reversed");
    };
  }, []);

  return (
    <PrismicProvider
      internalLinkComponent={({ href, children, ...rest }) => (
        <Link href={href} {...rest}>
          {children}
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Base>
          <Component {...pageProps} />
        </Base>
      </PrismicPreview>
    </PrismicProvider>
  );
}
