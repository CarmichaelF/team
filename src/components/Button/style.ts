import { transparentize } from "polished";
import styled from "styled-components";
import { ButtonProps } from ".";

export const Container = styled.button<ButtonProps>`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ color }) => (color ? color : "#ffffff")};
  background-color: ${({ bgColor, variant }) =>
    variant === "ghost" ? transparentize(0.7, bgColor as string) : bgColor};
  border-radius: 5px;
  padding: 10px 16px;
  transition: 0.5s;
  ${({ sx }) => sx && sx};
`;
