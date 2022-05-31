import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.PureComponent {
  render() {
    const { todo, handleChangeProps } = this.props;
    return (
      <li>
        <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
        {todo.title}
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
};

export default TodoItem;
