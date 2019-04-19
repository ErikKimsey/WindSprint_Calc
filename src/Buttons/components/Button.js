import React, { Component } from 'react';
import './button.scss';

export default class Button extends Component {
  state = {
    type: null,
    display: null,
  }

  componentDidMount(){
    // console.log(this.props);
    this.setState ({ 
      type: this.props.type,
      display: this.props.display
    });
    this.addClass();
  }

  addClass = () => {
    let type = this.props.type;
    console.log(type);
    
    let btn = document.querySelector('.button-container');
    btn.classList.add(this.props.type);
  }

  render() {
    return (
      <div className="button-container">
        {this.props.display}
      </div>
    )
  }
}

