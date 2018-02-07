import React, {Component} from 'react';
import {Services_css} from '../../css';

class Service extends Component {


  render() {
    let logo= '';
    let stylingBarWidth = '80%';
    if(this.props.serviceInfo){
      logo = this.props.serviceInfo.urlPic;
      let percentage = parseInt(this.props.serviceInfo.percentage);
      if (this.props.sectionSelected){
        stylingBarWidth ={
          width: ''+percentage+'%',
          animationName: 'progress',
          animationDuration: '10s',
          animationTimingFunction: 'ease-in-out',
        };
      }else {
        stylingBarWidth ={
          width: ''+percentage+'%',

        };
      }
    }

    return (
      <div >
        <div className = 'name__pic__container'>
          <h2  className = 'service__name' >{this.props.serviceInfo.nombre}</h2>
          <img className = 'logo_pic' src= {logo}></img>
        </div>
        <div className = 'progress__bar' style={stylingBarWidth}></div>
        <h5 className = 'percentage__num'>{this.props.serviceInfo.percentage}%</h5>
        <div className = 'bio__container'>
          {this.props.serviceInfo.bio.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/></span>;})}
        </div>
      </div>
    );
  }
}

export default Service;
