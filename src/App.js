import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Lists from "./components/Lists";

class App extends Component {
  state = {
    loading: false,
    isClicked: false
  };
  handleClick = e => {
    const target = e.target;
    this.setState({ isClicked: !this.state.isClicked });
    console.log(target);
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
            {this.state.isClicked ? <h3>Clicked</h3> : <h4>Not clicked</h4>}
            <Lists items={["a", "b", "c"]} handleClick={this.handleClick} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
