import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Lists from "./components/Lists";

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
            <Lists items={["a", "b", "c"]} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
