import Link from "next/link";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";

interface IContainerProps {
  scroll: boolean;
  variant?: "primary" | "secondary";
}

export const Container = styled.header<IContainerProps>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
  z-index: 50;
  background-color: ${({ scroll }) => (scroll ? "#ffffff" : "transparent")};
  color: ${({ scroll }) => (scroll ? "#21283b" : "#ffffff")};
  transition: 0.5s;
  box-shadow: ${({ scroll }) =>
    scroll ? "0px 0px 10px rgba(0, 0, 0, 0.1)" : "none"};

  .logo {
    color: ${({ scroll }) => (scroll ? "#21283b" : "#ffffff")};
  }

  .ghost {
    background-color: ${({ scroll }) => scroll && "#20cdcd"};
  }
`;

export const Navigation = styled(Wrapper)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HamburguerButton = styled.button`
  padding: 15px;
  font-size: 0;
  margin-right: -15px;
`;

interface IMenuProps {
  isActive?: boolean;
}

export const MobileMenu = styled.div<IMenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 150vw;
  transition: left 0.5s ease-in-out;
  right: 0;
  bottom: 0;
  background-color: #21283b;
  padding-top: 60px;
  ${(props) => props.isActive && `left: 0;`}
`;

export const MobileMenuItem = styled.div`
  padding: 15px;
  a {
    color: #fff;
    font-weight: 800;
    font-size: 1rem;
    line-height: 19px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;

export const CloseMenuButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 0;
  padding: 15px;
`;

export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const DesktopMenuItem = styled(Link)`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 25px;
  color: inherit;
  padding: 15px;
`;
