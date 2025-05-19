import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  color: black;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
`;

const Text = styled.span`
  margin-left: 10px;
  flex: 1;
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 6px 10px;
  margin-left: 10px;
  border-radius: 4px;
`;

const CustomCheckbox = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  input {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #007bff;
    border-radius: 4px;
    position: relative;
    background-color: white;
    margin-right: 8px;
  }

  input:checked {
    background-color: #007bff;
  }

  input:checked::after {
    content: '✔';
    color: white;
    position: absolute;
    left: 2px;
    top: -3px;
    font-size: 16px;
  }
`;

function TodoListItem({ todo, onToggle, onRemove }) {
  const { id, text, checked } = todo;

  return (
    <Item>
        <CustomCheckbox>
            <input type="checkbox" checked={checked} onChange={() => onToggle(id)} />
            <Text checked={checked}>{text}</Text>
            </CustomCheckbox>
      <DeleteButton onClick={() => onRemove(id)}>삭제</DeleteButton>
    </Item>
  );
}

export default TodoListItem;
