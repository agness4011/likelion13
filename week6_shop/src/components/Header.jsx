import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../assets/logo.png';

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoImg src={logoImg} alt="KREAM Logo" />
      </Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  padding: 16px;
  border-bottom: 1px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 28px;
  object-fit: contain;
  cursor: pointer;
`;
