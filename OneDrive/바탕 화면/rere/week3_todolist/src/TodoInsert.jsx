import {useState} from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 16px;
  border: none;
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  background: white;
  color: black;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
`;
const Button = styled.button`
 padding: 10px 15px;
 background: #5cb85c;
 color: white;
 border: none;
 margin-left: 10px;
 font-weight: bold;
`;

function TodoInsert({onInsert}) {
    const [value, setValue] = useState('');

    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        if (value.trim()=== '') return;
        onInsert(value);
        setValue('');
    };

    return (
        <Form onSubmit={onSubmit}>
            <Input
             placeholder="할 일을 입력하세요"
             value={value}
             onChange={onChange}
            />
            <Button type="submit">추가</Button>
        </Form>
    );
}

export default TodoInsert;