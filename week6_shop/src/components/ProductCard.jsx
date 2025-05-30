import React from 'react';
import styled from 'styled-components';

export default function ProductCard({ brand, name, price, image }) {
  return (
    <Card>
      <Img src={image} alt={name} />
      <Info>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <Price>{price.toLocaleString()}원</Price>
      </Info>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  max-width: 220px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin: 8px auto;
  background: #fff;
`;
const Img = styled.img`
  width: 100%;
  height: auto;
`;
const Info = styled.div`
  padding: 12px;
`;
const Brand = styled.div`
  font-size: 0.9rem;
  color: #888;
  font-weight: 600;
  margin-bottom: 4px;
`;
const Name = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
`;
const Price = styled.div`
  font-size: 0.9rem;
  color: #333;
`;
