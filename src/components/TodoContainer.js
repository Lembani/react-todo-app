import React from 'react';

import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class TodoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <InputTodo />
        <TodoList
          todos={todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </>
    );
  }
}

export default TodoContainer;
