import React, { Component } from "react";
import { New } from '$components/New';
import { Second } from '$components/Second';
import { Third } from '$components/Third';
import { Logo } from '$components/Logo';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App! Teshhsssst/</h1>
        <New />
        <Second />
        <Third />
        <Logo />
      </div>
    );
  }
}

export default App;
