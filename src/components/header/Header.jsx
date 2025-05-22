import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>

      <Nav>
        <NavItem>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/project" className={({ isActive }) => isActive ? "active" : ""}>Project</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/diary" className={({ isActive }) => isActive ? "active" : ""}>Diary</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/qna" className={({ isActive }) => isActive ? "active" : ""}>QnA</NavLink>
        </NavItem>
      </Nav>
    </HeaderWrapper>
  );
}

