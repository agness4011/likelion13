import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  width: 200px;
  height: 100px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(to bottom, #3a3a3a, #1a1a1a);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

