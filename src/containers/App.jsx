import React, { Component } from 'react';
import { New } from '$components/New';
import { Second } from '$components/Second';
import { Third } from '$components/Third';
import { Modal } from '$components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper">
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
