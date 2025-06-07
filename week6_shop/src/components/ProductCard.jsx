import React from "react";
import styled from "styled-components";

export default function ProductCard({ title, price, images }) {
  const imgUrl =
    typeof images === "string"
      ? images
      : Array.isArray(images)
      ? images[0]
      : "";

  return (
    <Card>
      <Img src={imgUrl} alt={title} />
      <Info>
        <Title>{title}</Title>
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

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Price = styled.div`
  font-size: 0.9rem;
  color: #333;
`;
