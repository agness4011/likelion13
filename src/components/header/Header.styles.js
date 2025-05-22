import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  color: #1c1c1c;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled.div`
  color: #a7a7a7;
  font-weight: 500;
  cursor: pointer;

  &.active {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid black;
  }
`;
