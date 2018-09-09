import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div>
          <h2> Você tem { this.props.count * 2 } counters </h2>
      </div>
    );
  }
}

export default Counter;