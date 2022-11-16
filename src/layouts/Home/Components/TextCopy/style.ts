import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 575px;

  @media (max-width: 1200px) and (min-width: 768px) {
    max-width: 355px;
    > h1 {
      font-size: 4vw;
      line-height: 5vh;
    }
  }
`;
