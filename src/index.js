import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import About from "./About";
import Nav from "./Nav";
import Project from "./Project";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Victor"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} user={this.state.user} />
        <Nav github="https://github.com/victorsingh" linkedin="#" />
        <About myPhoto="http://www.placepuppy.net/7p/400/250" />
        <Project
          className="container-styles"
          name="Meme geneator"
          description="A program written in Java that generates memes"
          image="https://i.imgur.com/uWteCty.gif"
          url="http://github.com"
          // background="red"
        />
        <Project
          className="container-styles"
          name="8 Queens"
          description="The 8 queens from Object Oriented Programming in C++"
          image="https://i.imgur.com/uWteCty.gif"
          url="http://github.com"
          // background="blue"
        />
        <Project
          className="container-styles"
          name="Nested For loop triangle"
          description="Nested for loop project form Intro to algorithmic problem solving"
          image="https://i.imgur.com/uWteCty.gif"
          url="http://github.com"
          // background="green"
        />
      </div>

      /*
       <Hello name={this.state.name} user={this.state.user} />
        <Nav github="https://github.com/victorsingh" linkedin="#" />
        <About myPhoto="http://www.placepuppy.net/7p/400/250" />
        <Project
          className="container-styles"
          name="Meme geneator"
          description="A program written in Java that generates memes"
          image="https://i.imgur.com/uWteCty.gif"
          url="http://github.com"
          // background="red"
        />
        <Project
          className="container-styles"
          name="8 Queens"
          description="The 8 queens from Object Oriented Programming in C++"
          image="https://i.imgur.com/uWteCty.gif"
          url="http://github.com"
          // background="blue"
        />
        <Project
          className="container-styles"
          name="Nested For loop triangle"
          description="Nested for loop project form Intro to algorithmic problem solving"
          image="https://i.imgur.com/uWteCty.gif"
          url="http://github.com"
          // background="green"
        />
        */
    );
  }
}

render(<App />, document.getElementById("root"));
