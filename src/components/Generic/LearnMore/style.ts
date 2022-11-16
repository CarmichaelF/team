import styled from "styled-components";
import { IGenericProps } from "../../../types";

interface IContainerProps extends IGenericProps {
  color: string;
}

export const Container = styled.a<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${({ color }) => color && `#${color}`};
  gap: 10px;
  ${({ sx }) => sx && sx};

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;
