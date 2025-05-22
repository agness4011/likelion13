import React from "react";
import { Container, StyledButton } from "./FeedbackButton.styles";

function FeedbackButton() {
  return (
    <Container>
      <StyledButton onClick={() => alert("텍스트 후기 작성")}>텍스트 후기 작성</StyledButton>
      <StyledButton onClick={() => alert("이미지 후기 작성")}>이미지 후기 작성</StyledButton>
      <StyledButton onClick={() => alert("소감문 제출 (PDF)")}>소감문 제출 (PDF)</StyledButton>
    </Container>
  );
}

export default FeedbackButton;
