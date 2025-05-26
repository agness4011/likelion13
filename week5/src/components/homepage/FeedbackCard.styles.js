// FeedbackCard.styles.js
import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Author = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

export const DateText = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
`;

export const Content = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  white-space: pre-wrap;
`;
