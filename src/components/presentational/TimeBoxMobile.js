import React, {Component} from 'react';
import {TimeBox_css} from '../../css';

class TimeBoxMobile extends Component {

  handleClick(){
    this.props.urlClick(this.props.copy.urlLink);
  }

  render() {
    let copy = this.props.copy;

    let pointer = {
      cursor: 'pointer',
    };
    if(copy.urlLink ==='falta'){
      pointer = {
        cursor: 'auto',
      };
    }

    return (
      <div className = 'leaf__container__mobile' >
        <div className= 'timeBox__headline__container__mobile'>
          <h3
            className ='timeBox__name__mobile'
            style = {pointer}
            onClick = {this.handleClick.bind(this)}
          >{copy.nombre}</h3>

          <div className ='logo__photo__container__mobile'>
            <img
              className ='logo__photo__mobile'
              src= {copy.urlPic}
              style = {pointer}
              onClick = {this.handleClick.bind(this)}
            ></img>
          </div>
        </div>
        <div className ='fecha_container__mobile'>
          <h3 className ='fecha__inicio__mobile'>{copy.fechaInicio} -</h3>
          <h3 className ='fecha__fin__mobile'>->  {copy.fechaFin}</h3>
        </div>
        <div className= 'description__container__mobile'>
          {copy.description.split('\n').map((item, key) => {
            return <span className ='description__text__mobile' key={key}>{item}<br/></span>;})}
        </div>
      </div>
    );
  }
}

export default TimeBoxMobile;
