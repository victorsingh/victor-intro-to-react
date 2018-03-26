import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div id="navigation-bar">
        <ul>
          <a href={this.props.github}>
            <li> Github </li>
          </a>
          <a href={this.props.linkedin}>
            <li> Linkedin </li>
          </a>
        </ul>
      </div>
      /*
       <ul>
          <a href={this.props.github}>
            <li> Github </li>
          </a>
          <a href={this.props.linkedin}>
            <li> Linkedin </li>
          </a>
        </ul>
      */
    );
  }
}
