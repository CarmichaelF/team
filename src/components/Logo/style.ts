import styled from "styled-components";
import Link from "next/link";

export const Container = styled(Link)`
  font-weight: 800;
  font-size: 1rem;
  line-height: 19px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;

  > span {
    color: #20cdcd;
  }
`;
