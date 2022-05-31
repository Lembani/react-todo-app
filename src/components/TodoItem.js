import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.PureComponent {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        {todo.title}
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>Delete</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape(
    {
      id: PropTypes.number,
      completed: PropTypes.bool,
      title: PropTypes.string,
    },
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
