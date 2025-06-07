import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createProduct } from "../api";

export default function CreateProduct() {
  const navigate = useNavigate();

  // 폼 입력
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState(""); // 단일 이미지 URL만 입력받는다고 가정
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = {
        title: title.trim(),
        price: parseInt(price, 10),
        images: images.trim(), 
      };
      const res = await createProduct(data);
      console.log("새로 생성된 상품:", res.data);

  
      navigate("/");
    } catch (err) {
      console.error("상품 생성 에러:", err);
      setError("상품 생성 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>신규 상품 등록</Title>
      <Form onSubmit={handleSubmit}>
        <Label>상품명</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Label>가격</Label>
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <Label>이미지 URL</Label>
        <Input
          type="text"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          required
        />

        {error && <ErrorText>{error}</ErrorText>}
        <Button type="submit" disabled={loading}>
          {loading ? "등록 중…" : "상품 등록"}
        </Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 0 20px;
`;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Label = styled.label`
  font-weight: bold;
`;
const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const ErrorText = styled.p`
  color: red;
  margin: 0;
`;
const Button = styled.button`
  padding: 10px;
  background: #0066cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background: #888;
    cursor: not-allowed;
  }
`;
