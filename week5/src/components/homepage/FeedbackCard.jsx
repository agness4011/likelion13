// FeedbackCard.jsx
import React from "react";
import { Card, Author, DateText, Content } from "./FeedbackCard.styles";

function FeedbackCard({ author, date, content }) {
  return (
    <Card>
      <Author>{author}</Author>
      <DateText>{date}</DateText>
      <Content>{content}</Content>
    </Card>
  );
}

export default FeedbackCard;
