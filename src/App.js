import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";

class App extends Component {
  state = {
    loading: false
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div>
            <Header text="Header" />
            <div className="StyledComponent" />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
