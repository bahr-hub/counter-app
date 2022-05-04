import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">CounterApp</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;
