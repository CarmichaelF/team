import styled from "styled-components";
import { IGenericProps } from "../../../types";

export const Text = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 20px;
  color: #21283b;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 30px;
  }
  ${(props: IGenericProps) => props.sx}
`;
