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
  };

  render() {
    return (
      //'this' in this context relates to the event scope, not the component
      //to use this way, you have to bind handleSubmit to the component
      // <form onSubmit={this.handleSubmit}>

      //Use function like this instead to make sure that the used scope is
      //the component one
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Github Username"
          value={this.state.username}
          onChange={event => this.setState({ userName: event.target.value })}
          // name="username"
          // ref={this.userNameInput} Commented out to be repleced by state
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
