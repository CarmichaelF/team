import styled from "styled-components";
import { IGenericProps } from "../../../types";

interface ITitleProps extends IGenericProps {
  highlightColor?: string;
}

export const Title = styled.h1<ITitleProps>`
  font-weight: 800;
  font-size: 1.4375rem;
  line-height: 29px;
  color: #21283b;
  ${({ sx }) => sx && sx};

  span {
    color: ${({ highlightColor }) =>
      highlightColor ? `#${highlightColor}` : "#20cdcd"};
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 67px;
  }
`;
