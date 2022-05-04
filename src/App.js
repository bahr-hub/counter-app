import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="m-4">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handelDelete}
            onIncrement={this.handelIncrement}
          />
        </main>
      </React.Fragment>
    );
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handelDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handelIncrement = (counter) => {
    const counters = [...this.state.counters];
    const counterindex = counters.indexOf(counter);
    counters[counterindex] = { ...counter };
    counters[counterindex].value++;
    this.setState({ counters });
  };
}

export default App;
