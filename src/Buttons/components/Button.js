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
  
  addClass = () => {
    this.btnRef.current.classList.add(this.props.type);
  }

  addFunction = () => {
    
  }

  render() {
    return (
      <div className="button-container" ref={this.btnRef}>
        {this.props.display}
      </div>
    )
  }
}

