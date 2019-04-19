import React, { Component } from 'react';
import './button.scss';

export default class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      type: null,
      display: null,
    }
    this.btnRef = React.createRef();
  }

  componentDidMount(){
    this.addClass();
  }
  
  // adds additional class to button-container, from button type prop
  addClass = () => {
    this.btnRef.current.classList.add(this.props.type);
  }

  // applies type of funcation or calculation to button
  applyFunction = () => {

  }

  render() {
    return (
      <div className="button-container" ref={this.btnRef}>
        {this.props.display}
      </div>
    )
  }
}

