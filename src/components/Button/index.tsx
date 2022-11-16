import { Container } from "./style";
import { ButtonHTMLAttributes } from "react";
import { IGenericProps } from "../../types";

export type ButtonProps = {
  variant?: "generic" | "ghost";
  bgColor?: string;
  color?: string;
} & IGenericProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "generic",
  bgColor = "#20CDCD",
  color = "#ffffff",
  ...rest
}: ButtonProps) {
  return (
    <Container
      variant={variant}
      className={variant}
      bgColor={bgColor}
      color={color}
      {...rest}
    />
  );
}
