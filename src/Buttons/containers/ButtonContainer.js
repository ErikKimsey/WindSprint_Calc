import React, { Component } from 'react';
import './buttoncontainer.scss';
import Button from '../components/Button';

export default class ButtonContainer extends Component {
  render() {
    return (
      <div className="button-view-container">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    )
  }
}
