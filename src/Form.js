import React from 'react';

class Form extends React.Component {
  userNameInput = React.createRef();

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.userNameInput.current.value);
  }

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
          // name="username"
          ref={this.userNameInput}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
