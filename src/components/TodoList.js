import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.PureComponent {
  render() {
    return(
      <>
        <ul>
          { 
          this.props.todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} handleChangeProps={() => this.props.handleChangeProps} />
          })
        }
        </ul>
      </>
    );
  }
}

export default TodoList;