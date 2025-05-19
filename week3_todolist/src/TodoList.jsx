import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const ListContainer = styled.div`
 width: 100%;
`;

function TodoList({todos, onToggle, onRemove}) {
    return (
        <ListContainer>
            {todos.map(todo => (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  onToggle={onToggle}
                  onRemove={onRemove}
                 />
            ))}
        </ListContainer>
    );
}

export default TodoList;