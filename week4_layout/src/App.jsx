import styled from "styled-components";
import Card from "./components/Card";

function App() {
  return (
    <Container>
      <Info>오늘의 소식</Info>
      <Cards>
        <Card imageUrl="https://ifh.cc/g/9Bt3zz.jpg">
          <span style={{ color: "white", fontSize: "1.25rem", fontWeight: 500 }}>
            안녕하세요 제 이름은 김현수입니다.
          </span>
        </Card>
        <Card imageUrl="https://ifh.cc/g/HTp4Rz.png">
          <span style={{ color: "white", fontSize: "1.25rem", fontWeight: 500 }}>
            저는 고양시에 삽니다.
          </span>
        </Card>
      </Cards>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export default App;
