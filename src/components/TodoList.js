import React from 'react';

class TodoList extends React.PureComponent {
  render() {
    return(
      <>
        <ul>
          { 
          this.props.todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>
          })
        }
        </ul>
      </>
    );
  }
}

export default TodoList;