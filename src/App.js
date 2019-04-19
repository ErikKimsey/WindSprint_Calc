import React, { Component } from 'react';
import FaceView from './Face/FaceView';
import './App.scss';
import { buttonData } from './data/ButtonData';

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
        <FaceView setValue={this.setCalculationValue} value={this.state.calculation} data={buttonData}/>
      </div>
    );
  }
}

export default App;
