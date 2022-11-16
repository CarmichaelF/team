import styled from "styled-components";
import { Wrapper } from "../Wrapper";

export const Container = styled.footer`
  width: 100%;
  background-color: #21283b;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  padding-top: 30px;
  padding-bottom: 90px;

  @media (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 160px;
  }
`;

export const InnerContainer = styled(Wrapper)`
  .description {
    color: inherit;
    font-weight: inherit;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-column-gap: 60px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    display: flex;
    gap: 90px;
    flex-direction: column;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 210px;
  gap: 60px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 0px;
    margin-top: 0;
  }

  > div {
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      flex-direction: column;

      > li a {
        display: inline-block;
        width: 100%;
        font-weight: 400;
        font-size: 1rem;
        line-height: 30px;
        color: rgba(255, 255, 255, 0.8);
        padding: 15px 0;
      }
    }

    > span {
      color: #ffffff;
      font-weight: 800;
      font-size: 1rem;
      line-height: 19px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 60px;
    }
  }
`;

export const Copyright = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    grid-column: span 2;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;

  a {
    position: relative;
    width: 30px;
    height: 30px;
  }
`;
