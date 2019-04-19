import React, { Component } from 'react';
import './faceview.scss';
import DisplayView from '../Display/DisplayView';

export default class FaceView extends Component {
  render() {
    return (
      <div className="face-view-container">
        <DisplayView />
      </div>
    )
  }
}
