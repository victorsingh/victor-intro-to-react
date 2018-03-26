import React, { Component } from "react";

export default class Hello extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  handleChange = e => {
    console.log(e);
    this.setState({ user: e.target.value });
  };

  render() {
    return (
      <div id="hello">
        <h1>
          Hello {this.state.user}, welcome to {this.props.name}'s blog!
        </h1>
        <input
          onChange={this.handleChange}
          placeholder="Enter your name here!!!"
        />
      </div>
      /*
       <h1>
          Hello {this.state.user}, welcome to {this.props.name}'s blog!
        </h1>
        <input
          onChange={this.handleChange}
          placeholder="Enter your name here!!!"
        />
      */
    );
  }
}
