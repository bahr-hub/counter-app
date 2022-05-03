import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary"> {this.fromatCount()} </span>
        <button> Incresment </button>
      </React.Fragment>
    );
  }
  fromatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
