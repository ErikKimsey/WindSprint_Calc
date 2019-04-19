import React, { Component } from 'react';
import './button.scss';

export default class Button extends Component {
  state = {
    type: null,
    display: null,
  }

  componentDidMount(){
    // this.setState ({ type: this.props.type});
  }
  render() {
    return (
      <div className="button-container">
        
      </div>
    )
  }
}

