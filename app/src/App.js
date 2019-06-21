import React from "react";
import Display from "./components/Display.js";
// import Dashboard from "./components/Dashboard.js";
import "./App.css";

class App extends React.Component {
  state = {
    player: "Leslie T",
    balls: 0,
    strikes: 0
  };

  render() {
    return (
      <div>
        <header>
          {/* <p>App running?</p> */}
          <Display />
          {/* <Dashboard /> */}
        </header>
      </div>
    );
  }
}

export default App;
