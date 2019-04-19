import React, { Component } from 'react';
import FaceView from './Face/FaceView';
import './App.scss';

class App extends Component {
  state = {
    calculation: 0,
  }

  setCalculationValue = (val) => {
    this.setState({ calculation: val});
  }

  render() {
    return (
      <div className="App">
        <FaceView setValue={this.setCalculationValue} value={this.state.calculation}/>
      </div>
    );
  }
}

export default App;
