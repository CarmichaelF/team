import { InputHTMLAttributes } from "react";
import ChevronRight from "../../../icons/ChevronRight";
import { IGenericProps } from "../../../types";
import { Container, InputTag } from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  IGenericProps & {
    isSubmit?: boolean;
  };

export default function Input({ isSubmit = false, sx, ...rest }: InputProps) {
  return (
    <Container sx={sx}>
      <InputTag {...rest} />
      {isSubmit && (
        <button type="submit">
          <ChevronRight width={20} height={20} fill="#000000" />
        </button>
      )}
    </Container>
  );
}
