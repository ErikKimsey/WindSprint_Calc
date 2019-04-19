import React, { Component } from 'react';
import './faceview.scss';
import DisplayView from '../Display/DisplayView';
import ButtonContainer from '../Buttons/containers/ButtonContainer';

export default class FaceView extends Component {
  render(props) {
    return (
      <div className="face-view-container">
        <DisplayView value={this.props.value}/>
        <ButtonContainer data={this.props.data}/>
      </div>
    )
  }
}
