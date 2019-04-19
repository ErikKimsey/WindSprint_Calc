import React, { Component } from 'react';
import './buttoncontainer.scss';
import Button from '../components/Button';

export default class ButtonContainer extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div className="button-view-container">
        {
          this.props.data.map((e,i)=>{
            console.log(e);
            return <Button key={e.display} type={e.type} display={e.display}/>
          })
        }
      </div>
    )
  }
}
