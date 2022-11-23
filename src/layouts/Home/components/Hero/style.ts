import styled from "styled-components";

interface IContainerProps {
  backgroundURL: string;
}

export const Container = styled.section<IContainerProps>`
  background-image: ${({ backgroundURL }) => `url(${backgroundURL})`};
  background-repeat: no-repeat;
  background-position: 70%;
  min-height: 568px;
  background-size: cover;
  position: relative;

  @media (min-width: 1024px) {
    min-height: 815px;
    background-position: top center;
  }

  @media (min-width: 1440px) {
    background-position: 50% 50%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      25.73% 52.62% at 72.07% 48.01%,
      rgba(33, 40, 59, 0) 0%,
      rgba(33, 40, 59, 0.4) 100%
    );
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 655px;
  padding-top: 130px;
  z-index: 10;
  position: relative;

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
