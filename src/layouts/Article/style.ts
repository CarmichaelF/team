import styled from "styled-components";
import { Wrapper } from "../../components/Wrapper";

import { IGenericProps } from "../../types";

export const Container = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-top: 120px;

  @media (min-width: 768px) {
    padding-top: 200px;
  }
`;

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

export const AuthorSection = styled.div<IGenericProps>`
  width: 100%;
  max-width: 700px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 0.875rem;
  line-height: 18px;
  margin-top: 60px;

  @media (min-width: 768px) {
    flex-direction: column;
    font-size: 1rem;
  }
  ${({ sx }) => sx}
`;
export const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`;

export const AuthorSectionText = styled.div<IGenericProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > span {
    font-size: inherit;
    line-height: inherit;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  ${({ sx }) => sx}
`;

export const WrittenBy = styled.span`
  font-size: 1rem;
  font-weight: 800;
  line-height: 19px;
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
  color: #dae3ea;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const BlogImageWrapper = styled.div`
  width: 100%;
  min-height: 120px;
  height: auto;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`;

export const ReadingTime = styled.span`
  display: inline-block;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 30px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;

  > span:first-child {
    font-weight: 700;
  }
`;

export const Content = styled(BlogContainer)`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Divider = styled(BlogContainer)`
  width: 100%;
  height: 2px;
  border-radius: 50px;
  background-color: #dae3ea;
  margin-top: 60px;
  margin-bottom: 30px;
`;
