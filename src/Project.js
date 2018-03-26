import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="center-container">
        <div className="vertical-center-elements">
          <h1> {this.props.name}</h1>
          <p> {this.props.description} </p>
          <div>
            <a href={this.props.url}>
              <img alt="me" width="200" height="200" src={this.props.image} />
            </a>
          </div>
        </div>
      </div>
    );
    /*
        <div className="vertical-center-elements">
          <h1> {this.props.name}</h1>
          <p> {this.props.description} </p>
          <div>
            <a href={this.props.url}>
              <img alt="me" width="200" height="200" src={this.props.image} />
            </a>
          </div>
        </div>
    */
  }
}
