import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

function Input() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value.trim());
  }

  const navigate = useNavigate();

  return (
    <InputComponent
      type="search"
      placeholder="키워드를 입력하세요."
      value={input}
      onChange={handleChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(`/search?query=${input}`);
        }
      }}
    />
  );
}

const InputComponent = styled.input`
  all: unset;
  margin-block: 50px;
  width: 20rem;
  padding: 8px 16px;
  border-radius: 12px;
  background-color: black;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
  font-size: 1rem;
  margin-top: -30px;
  position: relative;
  top: -55px;
  right: -200px;
`;


export default Input;