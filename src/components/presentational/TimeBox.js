import React, {Component} from 'react';
import {TimeBox_css} from '../../css';

class TimeBox extends Component {

  handleClick(){
    this.props.urlClick(this.props.copy.urlLink);
  }

  render() {
    let copy = this.props.copy;
    let logoContainer = 'logo__photo__container';
    let logoPhoto = 'logo__photo';
    let descriptionText = 'description__text';
    let timeBoxName = 'timeBox__name';
    let pointer = {
      cursor: 'pointer',
    };
    if(copy.urlLink ==='falta'){
      pointer = {
        cursor: 'auto',
      };
    }
    if(this.props.screenSize === 'prelaptop'){
      logoContainer = 'logo__photo__container__prelaptop';
    }
    if(this.props.screenSize === 'tablet'){
      logoContainer = 'logo__photo__container__tablet';
      logoPhoto = 'logo__photo_tablet';
      descriptionText = 'description__text__tablet';
      timeBoxName = 'timeBox__name__tablet';
    }
    return (
      <div className = 'leaf__container' >
        <div className= 'timeBox__headline__container'>
          <h3
            className ={timeBoxName}
            style = {pointer}
            onClick = {this.handleClick.bind(this)}
          >{copy.nombre}</h3>

          <div className ={logoContainer}>
            <img
              className ={logoPhoto}
              src= {copy.urlPic}
              style = {pointer}
              onClick = {this.handleClick.bind(this)}
            ></img>
          </div>
        </div>
        <div className ='fecha_container'>
          <h3 className ='fecha__inicio'>{copy.fechaInicio} -</h3>
          <h3 className ='fecha__fin'>->  {copy.fechaFin}</h3>
        </div>
        <div className= 'description__container'>
          {copy.description.split('\n').map((item, key) => {
            return <span className ={descriptionText} key={key}>{item}<br/></span>;})}
        </div>
      </div>
    );
  }
}

export default TimeBox;
