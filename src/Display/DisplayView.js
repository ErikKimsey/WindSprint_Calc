import React, { Component } from 'react';
import './display-view.scss';
import Button from '../Buttons/components/Button';

export default class DisplayView extends Component {
  render(props) {
    return (
      <div className="display-container">
        <div className="display-content">
          {this.props.value}
        </div>
      </div>
    )
  }
}
