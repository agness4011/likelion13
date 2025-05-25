import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1.5rem;
  color: black;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  color: black;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  border-radius: 0.375rem;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

function Account() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('account');
    setEdit(JSON.parse(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('account', 
JSON.stringify(edit));
    navigate('/account');
  };

  return (
    <Container>
      <Title>내 계정</Title>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleSave}>저장하기</Button>
    </Container>
  );
}

export default Account;