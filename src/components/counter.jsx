import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
  };
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span> {this.fromatCount()} </span>
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
