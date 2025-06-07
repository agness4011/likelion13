import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { fetchProducts, deleteProduct } from "../api";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 컴포넌트 마운트 시 상품 목록을 API에서 받아옴ㅁㅁ
  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("상품 조회 실패:", err);
        setError("상품을 불러오지 못했습니다.");
        setLoading(false);
      });
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await fetchProducts();
      setItems(res.data);
    } catch (err) {
      console.error("상품 조회 실패:", err);
      setError("상품을 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  // 2) 한 번만 목록 불러오기
  useEffect(() => {
    loadProducts();
  }, []);

  // 3) 삭제 
  const handleDelete = async (id) => {
    if (!window.confirm("정말로 이 상품을 삭제하시겠습니까?")) return;

    try {
      await deleteProduct(id);
      // 삭제가 끝나면 다시 전체 목록을 가져옴
      await loadProducts();
    } catch (err) {
      console.error("상품 삭제 실패:", err);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  if (loading) return <Wrapper>로딩 중...</Wrapper>;
  if (error) return <Wrapper>{error}</Wrapper>;

  return (
    <Wrapper>
      <TopBar>
        <Title>Sneakers</Title>
        <Link to="/create">
          <CreateBtn>+ 상품 등록</CreateBtn>
        </Link>
      </TopBar>
      <ProductList>
        {items.map((item) => (
          <CardWrapper key={item.id}>
            <Link
              to={`/detail/${item.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProductCard
                title={item.title}
                price={item.price}
                images={item.images}
              />
            </Link>
            <DeleteBtn onClick={() => handleDelete(item.id)}>
              삭제
            </DeleteBtn>
          </CardWrapper>
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

const CreateBtn = styled.button`
  padding: 6px 12px;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  justify-items: center;
`;

const CardWrapper = styled.div`
  position: relative;
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 6px;
  font-size: 0.8rem;
  cursor: pointer;
`;
