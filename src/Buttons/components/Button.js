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
  
  /**
   * adds additional class to button-container, from button type prop
   */
  addClass = () => {
    this.btnRef.current.classList.add(this.props.type);
  }

  handleGetInput = (num) => {
    return this.props.getInput(num)
  }

  /**
   * applies type of function or calculation to button
   */
  applyFunction = () => {}

  render() {
    return (
      <div className="button-container" ref={this.btnRef} onClick={()=>{this.handleGetInput(this.props.display)}}>
        {this.props.display}
      </div>
    )
  }
}

