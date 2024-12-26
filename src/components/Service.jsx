import React, { Component } from 'react';

class Counter extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Method to increment the count
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // Method to decrement the count
  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  // The render method to display the count
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;