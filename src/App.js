import React, { Component } from 'react';
import FaceView from './Face/FaceView';
import './App.scss';
import { buttonData } from './data/ButtonData';

class App extends Component {
  state = {
    temp: 0,
    calculation: 0,
  }

  setCalculationValue = (val) => {
    this.setState({ calculation: val});
  }

  getInput = (input) => {
    console.log(input);
    
  }

  render() {
    return (
      <div className="App">
        <FaceView setValue={this.setCalculationValue} getInput={this.getInput} value={this.state.calculation} data={buttonData} />
      </div>
    );
  }
}

export default App;
