import styled from "styled-components";
import { IGenericProps } from "../../../types";

export const Container = styled.form<IGenericProps>`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  button {
    font-size: 0;
    min-height: 45px;
    padding: 0 15px;
    top: 50%;
    position: absolute;
    right: 10px;
    transform: translate(0, -50%);
  }
  ${({ sx }) => sx && sx};
`;

export const InputTag = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  font-size: 0.75rem;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #bbc8d4;
  font-weight: 700;
  padding-left: 12px;
  padding-right: 50px;
  border-radius: 5px;
`;
