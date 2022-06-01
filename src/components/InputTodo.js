import React from 'react';

class InputTodo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    console.log('submit: ', title);
  };

  render() {
    const { title } = this.state;
    return (
      <>
        <form onSubmit={this.hamdleSubmit}>
          <input type="text" name="title" placeholder="Add Todo..." value={title} onChange={this.onChange} />
          <button type="button">Submit</button>
        </form>
      </>
    );
  }
}

export default InputTodo;
