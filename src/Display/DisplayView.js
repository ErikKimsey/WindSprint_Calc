import React, { Component } from 'react';
import './display-view.scss';
import Button from '../Buttons/components/Button';

export default class DisplayView extends Component {
  render(props) {
    console.log(this.props);
    
    return (
      <div className="display-container">

          {
            this.props.value.map((e)=>{
              return <div className="display-content">{e}</div>
            })
          }
      </div>
    )
  }
}
