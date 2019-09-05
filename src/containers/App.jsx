import React, { Component } from 'react';
import { New } from '$components/New';
import { Second } from '$components/Second';
import { Third } from '$components/Third';
import { Modal } from '$components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className="def">My React App! Teshhsssst/</h1>
          <New />
          <Second />
          <Third />
        </div>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
