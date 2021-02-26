import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    console.log("constructor");

    //makes this.props availeble through our class
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  // demonstate LCM that allow us to copy props into state
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("componet did mount");
    console.log("------------------");
  }

  //you can loose performance if this method is used incorrectly
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("should compoenent update - DO NOT RENDER");
      return false;
    }
    console.log("should compoenent update - RENDER");
    return true;
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update");
    console.log("--------------------");
  }
  componentWillUnmount() {
    console.log("component will unmount");
    console.log("----------------------");
  }
}

export default Counter;
