import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router';

export default function Home() {
  const [sortAsc, setSortAsc] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const sortRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortedProducts = [...products].sort((a, b) =>
    sortAsc ? a.price - b.price : b.price - a.price
  );

  const filteredProducts = sortedProducts.filter(product => {
    const matchSize = selectedSize ? product.size === selectedSize : true;
    const matchColor = selectedColor ? product.color === selectedColor : true;
    return matchSize && matchColor;
  });

  const handleSort = (order) => {
    setSortAsc(order === 'asc');
    setSortOpen(false);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setFilterOpen(false);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setFilterOpen(false);
  };

  return (
    <Wrapper>
      <TopBar>
        <Title>Sneakers</Title>
        <Controls>
          <SortToggle ref={sortRef}>
            <button onClick={() => setSortOpen(prev => !prev)}>정렬</button>
            {sortOpen && (
              <Dropdown>
                <DropdownOption onClick={() => handleSort('asc')}>낮은 가격순</DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleSort('desc')}>높은 가격순</DropdownOption>
              </Dropdown>
            )}
          </SortToggle>
          <FilterToggle ref={filterRef}>
            <button onClick={() => setFilterOpen(prev => !prev)}>필터</button>
            {filterOpen && (
              <Dropdown>
                <DropdownOption onClick={() => handleSizeSelect('260')}>사이즈 260</DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleSizeSelect('270')}>사이즈 270</DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleSizeSelect('280')}>사이즈 280</DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleColorSelect('white')}>화이트</DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleColorSelect('black')}>블랙</DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleColorSelect('grey')}>그레이</DropdownOption>
              </Dropdown>
            )}
          </FilterToggle>
        </Controls>
      </TopBar>
      <ProductList>
        {filteredProducts.map(item => (
          <Link
           key={item.id}
           to={`/detail/${item.id}`}
           style={{ textDecoration: 'none',
           color:'inherit'}}
          >
          <ProductCard
            key={item.id}
            id={item.id}
            brand={item.brand}
            name={item.name}
            price={item.price}
            image={item.image}
          />
          </Link>
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
const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const SortToggle = styled.div`
  position: relative;
  & > button {
    padding: 6px 10px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
    font-size: 0.9rem;
    border-radius: 8px;
    color: #787878;
    outline: none;
    &:focus,
    &:focus-visible {
      border: 1px solid #000000;
      color: #000000
    }
  }
`;
const FilterToggle = styled(SortToggle)``;
const Dropdown = styled.div`
  position: absolute;
  top: 36px;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 0;
  z-index: 10;
  min-width: 160px;
`;
const DropdownOption = styled.div`
  padding: 10px 16px;
  font-size: 0.95rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease;

  &:hover {
    background: #eee;
  }
`;
const Divider = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid #e0e0e0;
`;
const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  justify-items: center;
`;