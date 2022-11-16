import styled from "styled-components";
import { Wrapper } from "../../../../components/Wrapper";

export const Container = styled.section`
  margin-top: 60px;
  overflow: hidden;
`;

interface IContentWrapperProps {
  direction?: "row" | "row-reverse";
}

export const ContentWrapper = styled(Wrapper)<IContentWrapperProps>`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 120px;
    flex-direction: ${(props) => props.direction};
  }

  @media (max-width: 1200px) {
    gap: 60px;
  }
`;

interface IImageContainerProps {
  offsetLeft?: number;
  offsetRight?: number;
}

export const ImageContainer = styled.div<IImageContainerProps>`
  margin-left: ${({ offsetLeft }) => offsetLeft && `${offsetLeft}px`};
  margin-right: ${({ offsetRight }) => offsetRight && `${offsetRight}px`};

  @media (max-width: 1200px) {
    width: 80vw;
    margin-left: 0;
    margin-right: 0;

    > img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    > img {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    position: initial;
    max-width: 100%;
    overflow: visible;
  }
`;
