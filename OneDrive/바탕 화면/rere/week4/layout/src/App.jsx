import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import { Link } from "react-router-dom";

function MainPage() {
  const [name, setName] = useState("김현수");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <Container>
      <Info>나를 소개합니다</Info>
      <Cards>
        <Card imageUrl="https://ifh.cc/g/Yt66JP.jpg">
          <span style={{ color: "white", fontSize: "1.25rem", fontWeight: 500 }}>
            Who am I?: {name}
          </span>
        </Card>
        <Card imageUrl="https://ifh.cc/g/5vCh9G.png">
          <span style={{ color: "white", fontSize: "1.25rem", fontWeight: 500 }}>
            Where do I live?: "경기도 고양시"
          </span>
        </Card>
      </Cards>
    </Container>
  );
}

export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkContainer = styled.div`
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: blue;
  font-weight: bold;
  font-size: 1.1rem;
`;

const Info = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Cards = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

