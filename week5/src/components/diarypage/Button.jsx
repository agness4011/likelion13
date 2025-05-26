import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 55px;
  background-color: #00CE52;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 30px;
  cursor: pointer;
`;


function App() {
  return (
      <Button>방명록 쓰러가기</Button>
  );
}

export default App;