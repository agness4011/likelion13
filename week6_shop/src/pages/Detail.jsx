// src/pages/Detail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { products } from '../data/products';

export default function Detail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }

  return (
    <DetailWrapper>
      <h1>상품 상세 페이지: {product.name}</h1>
      <p>브랜드: {product.brand}</p>
      <img src={product.image} alt={product.name} width="200" />
      <p>가격: {product.price.toLocaleString()}원</p>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`

  padding-top: 152px;
  padding-right: 25px;
  padding-bottom: 130px;
  padding-left: 25px;
  width: 100%;    
  margin-left: 0;   
  text-align: left;
`;