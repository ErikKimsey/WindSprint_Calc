import React, { Component } from 'react';
import FaceView from './Face/FaceView';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FaceView />
      </div>
    );
  }
}

export default App;
