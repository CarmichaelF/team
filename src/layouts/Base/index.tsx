import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "./style";

export default function Base({ children }: PropsWithChildren) {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  return (
    <Container>
      <Header isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
