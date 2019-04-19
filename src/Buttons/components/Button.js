import React, { Component } from 'react';
import './button.scss';

export default class Button extends Component {
  state = {
    type: null,
    display: null,
  }

  componentDidMount(){
    this.setState ({ 
      type: this.props.type,
      display: this.props.display
    });
    this.addClass();
  }

  addClass = () => {
    let type = this.props.data.type;
    console.log(type);
    let btn = document.querySelector('.button-container');
    btn.classList.add(this.props.data.type);
  }

  render() {
    return (
      <div className="button-container">
        {this.props.data.display}
      </div>
    )
  }
}

