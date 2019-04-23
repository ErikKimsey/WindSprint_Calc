import React, { Component } from 'react';
import FaceView from './Face/FaceView';
import './App.scss';
import { buttonData } from './data/ButtonData';

const OPS = [String.fromCharCode(215),String.fromCharCode(247),'+','-','='];

class App extends Component {
  state = {
    temp: 0,
    calcIndex:0,
    calculation: [],
  }

  componentDidMount() {
    let calcArr = this.state.calculation.slice();
    calcArr[0] = '0';
    this.setState({calculation: calcArr});
  }


  getInput = (input) => {
    if(input.type === 'number'){
        this.setCalculation(input.display);
    }
    if (input.type === 'equals'){
      console.warn('not yet');
      return;
    }
    if(input.type === 'operator'){
      this.incrCalcArr(input.display);
    }
    if(input.type === 'AC'){}
    if(input.type === 'percent'){}
    if(input.type === 'negative'){}
  }
  
  setCalculation = (input) => {
    let calc = this.state.calculation;
    if(calc[0] === '0') {
      calc[0] = input;
      this.setState({ calculation: calc});  
    } else if (calc[this.state.calcIndex] == undefined){
      calc.push(input);
      this.setState({ calculation: calc});  
    } else {
      calc[this.state.calcIndex]+=input
      this.setState({ calculation: calc});  
    }
  }

  incrCalcArr = (input) => {
    let tempCalcArr = this.state.calculation.slice();
    tempCalcArr.push(input);
    let i = tempCalcArr.length;
    this.setState({calcIndex: i});
    this.setState({calculation: tempCalcArr});
  }
  
  render() {
    return (
      <div className="App">
        <FaceView getInput={this.getInput} value={this.state.calculation} data={buttonData} />
      </div>
    );
  }
}

export default App;
