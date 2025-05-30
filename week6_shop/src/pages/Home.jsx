import React, { useState } from 'react';
import styled from 'styled-components';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [sortAsc, setSortAsc] = useState(true);
  const sortedProducts = [...products].sort((a, b) =>
    sortAsc ? a.price - b.price : b.price - a.price
  );

  return (
    <Wrapper>
      <TopBar>
        <Title>Sneakers</Title>
        <SortToggle>
          <button onClick={() => setSortAsc(true)} disabled={sortAsc}>낮은 가격순</button>
          <button onClick={() => setSortAsc(false)} disabled={!sortAsc}>높은 가격순</button>
        </SortToggle>
      </TopBar>
      <ProductList>
        {sortedProducts.map(item => (
          <ProductCard
            key={item.id}
            id={item.id}
            brand={item.brand}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
`;
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
`;
const SortToggle = styled.div`
  & > button {
    margin-left: 8px;
    padding: 6px 10px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
    font-size: 0.9rem;
    &:disabled {
      background: #eee;
      cursor: default;
    }
  }
`;
const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  justify-items: center;
`;
