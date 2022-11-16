import styled from "styled-components";

export const Container = styled.section`
  background: url("/assets/hero-background.png") no-repeat 70%;
  min-height: 568px;
  background-size: cover;

  @media (min-width: 1024px) {
    min-height: 815px;
    background-position: top center;
  }

  @media (min-width: 1440px) {
    background-position: 50% 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 655px;
  padding-top: 130px;

  @media (min-width: 768px) {
    padding-top: 230px;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: initial;
    > input {
      max-width: 300px;
    }
  }

  > button {
    width: 100%;
    height: 45px;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;
