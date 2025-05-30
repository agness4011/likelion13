import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function Detail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  return (
    <div style={{ padding: '24px' }}>
      <h1>{product.name}</h1>
      <p>브랜드: {product.brand}</p>
      <img src={product.image} alt={product.name} width="200" />
      <p>가격: {product.price.toLocaleString()}원</p>
    </div>
  );
}
