import React, {Component} from 'react';

class TimeBox extends Component {

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
      <div className = 'leaf__container' >
        <div className= 'timeBox__headline__container'>
          <h3
            className ='timeBox__name'
            style = {pointer}
            onClick = {this.handleClick.bind(this)}
          >{copy.nombre}</h3>

          <div className ='logo__photo__container'>
            <img
              className ='logo__photo'
              src= {copy.urlPic}
              alt=''
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
            return <span className ='description__text' key={key}>{item}<br/></span>;})}
        </div>
      </div>
    );
  }
}

export default TimeBox;
