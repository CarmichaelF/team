import { PropsWithChildren } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "./style";

export default function Base({ children }: PropsWithChildren) {
  return (
    <Container as="footer">
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
