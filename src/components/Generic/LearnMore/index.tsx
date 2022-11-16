import ChevronRight from "../../../icons/ChevronRight";
import { IGenericProps } from "../../../types";
import { Container } from "./style";

interface ILearnMoreProps extends IGenericProps {
  text?: string;
  color?: string;
  href?: string;
}

export default function LearnMore({
  text = "Learn More",
  color = "#20CDCD",
  href = "#",
  ...rest
}: ILearnMoreProps) {
  return (
    <Container color={color} {...rest} href={href}>
      {text}
      <ChevronRight width={12} height={12} fill={color} />
    </Container>
  );
}
