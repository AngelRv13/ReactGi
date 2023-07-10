import React, { Component } from "react";

class easyMedium extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    person: {},
  };
  render() {
    return (
      <div className='personInfoMedium'>
          <h1>My name is {this.props.name}</h1>
          <h2> I am {this.props.age} years old</h2>
          <h3>I am a {this.props.occupation}</h3>
      </div>
    );
  }
}

export default easyMedium;