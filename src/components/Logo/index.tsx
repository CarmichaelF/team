import { Container } from "./style";
import { LinkProps } from "next/link";

export default function Logo({
  href,
  replace,
  scroll,
  shallow,
  passHref,
}: LinkProps) {
  return (
    <Container
      href={href}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      className="logo"
    >
      Team<span>.</span>
    </Container>
  );
}
