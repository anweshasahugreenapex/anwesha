import React, { Component } from "react";

//life cycle of components using class based component

//extend Counter class
export default class Counter extends Component {
  //constructor for Counter class
  constructor(props) {
    console.log("constructed");
    super(props);

    //set initial state for counter and render
    this.state = {
      counter: 0,
      render: true,
    };
  }

  //function to set  the counter state to +1
  addOne = () => {
    console.log("added");
    this.setState({ counter: this.state.counter + 1 });
  };

  //function to set  the counter state to -1
  reduceOne = () => {
    console.log("reduced");
    this.setState({ counter: this.state.counter - 1 });
  };

  //function to show or hide  the rendering on the button click
  handleRender = () => {
    console.log("handleRender");
    this.setState({ render: !this.state.render });
  };

  //function that runs right after the instance is constructed
  componentWillMount() {
    console.log("component WILL mount");
  }

  //function that runs right after the instance is rendered in the DOM.
  componentDidMount() {
    console.log("component DID mount");
    console.log("**************************");
  }

  //this is invoked before a mounted component receives new props.
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
    console.log(newProps);
  }

  //this method is invoked just before rendering when new props or state are being received.
  //it only runs if shouldComponentUpdate() returns false.
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }

  //this method is invoked just after rendering when new props or state are being received.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component DID UPDATE!");
    console.log("--------------------------");
    //console.log(prevState);
  }

  //this method is called when a component is being removed from the DOM.
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
    console.log("**************************");
  }

  //used to let React know if a component's output is not affected by the current chanfe in state  or props.
  //invoked before rendering when props or states are being received.
  shouldComponentUpdate(newProps, newState) {
    this.state.render
      ? console.log("shouldComponentUpdate- RENDER")
      : console.log("shouldComponentUpdate-NO RENDER");
    return this.state.render;
  }

  //used to render elements in DOM.
  render() {
    console.log("rendered");
    return (
      <div className="Counter">
        <h1> Counter:{this.state.counter}</h1>
        <div>
          <button onClick={this.addOne}>add one</button>
          <button onClick={this.reduceOne}>reduce one</button>
          <button onClick={this.handleRender}>
            {this.state.render ? "stop rendering" : "render"}
          </button>
        </div>
      </div>
    );
  }
}
