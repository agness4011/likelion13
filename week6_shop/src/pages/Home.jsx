import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api";



// API 맞춰서 기존의 name->title, image->images로 변경함 !

export default function Home() {
  // API에서 받아올 데이터 상태
  const [products, setProducts] = useState([]);    // 배열: { id, title, price, images }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 정렬/필터 상태
  const [sortAsc, setSortAsc] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const sortRef = useRef(null);
  const filterRef = useRef(null);

  // 한 번만 API 호출
  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("상품 조회 실패:", err);
        setError("상품을 불러오지 못했습니다.");
        setLoading(false);
      });
  }, []);

  // 바깥쪽 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 로딩/에러 처리
  if (loading) return <Wrapper>로딩 중...</Wrapper>;
  if (error) return <Wrapper>{error}</Wrapper>;

  // 정렬하기
  const sortedProducts = [...products].sort((a, b) =>
    sortAsc ? a.price - b.price : b.price - a.price
  );

 
  const filteredProducts = sortedProducts.filter((product) => {
    const matchSize = selectedSize ? product.size === selectedSize : true;
    const matchColor = selectedColor ? product.color === selectedColor : true;
    return matchSize && matchColor;
  });

  const handleSort = (order) => {
    setSortAsc(order === "asc");
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
            <button onClick={() => setSortOpen((p) => !p)}>정렬</button>
            {sortOpen && (
              <Dropdown>
                <DropdownOption onClick={() => handleSort("asc")}>
                  낮은 가격순
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleSort("desc")}>
                  높은 가격순
                </DropdownOption>
              </Dropdown>
            )}
          </SortToggle>

          <FilterToggle ref={filterRef}>
            <button onClick={() => setFilterOpen((p) => !p)}>필터</button>
            {filterOpen && (
              <Dropdown>
                <DropdownOption onClick={() => handleSizeSelect("260")}>
                  사이즈 260
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleSizeSelect("270")}>
                  사이즈 270
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleSizeSelect("280")}>
                  사이즈 280
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleColorSelect("white")}>
                  화이트
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleColorSelect("black")}>
                  블랙
                </DropdownOption>
                <Divider />
                <DropdownOption onClick={() => handleColorSelect("grey")}>
                  그레이
                </DropdownOption>
              </Dropdown>
            )}
          </FilterToggle>
        </Controls>
      </TopBar>

      <ProductList>
        {filteredProducts.map((item) => (
          <Link
            key={item.id}
            to={`/detail/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProductCard
              id={item.id}
              title={item.title}     
              price={item.price}
              images={item.images}   
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
      border: 1px solid #000;
      color: #000;
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
  transition: back-ground 0.2s ease;
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
