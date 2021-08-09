import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  // userNameInput = React.createRef(); Commented out to be repleced by state
  // constructor() {
  //   super();
  //   this.state = {
  //     userName: ''
  //   };
  // }

  state = {
    userName: ''
  };

  handleSubmit = async event => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };

  render() {
    return (
      //'this' in this context relates to the event scope, not the component
      //to use this way, you have to bind handleSubmit to the component
      // <form onSubmit={this.handleSubmit}>

      //Use function like this instead to make sure that the used scope is
      //the component one
      // <form onSubmit={e => this.handleSubmit(e)}>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="Github Username"
          // ref={this.userNameInput} Commented out to be repleced by state
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
