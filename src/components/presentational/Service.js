import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';

class Service extends Component {

  handleClick(){
    if(this.props.serviceInfo.urlLink){
      window.open(this.props.serviceInfo.urlLink,'_blank');
    }
  }

  render() {
    let logo= '';
    let cursor = {};
    let stylingBarWidth =  { width:'80%'};
    if(this.props.serviceInfo){
      logo = this.props.serviceInfo.urlPic;
      let percentage = parseInt(this.props.serviceInfo.percentage,10);
      if (this.props.sectionSelected){
        stylingBarWidth ={
          width: ''+percentage+'%',
          animationName: 'progress',
          animationDuration: '3s',
          animationTimingFunction: 'ease-in-out',
        };
      }else {
        stylingBarWidth ={
          width: ''+percentage+'%',

        };
      }
      if(this.props.serviceInfo.urlLink){
        cursor={
          cursor:'pointer',
        };
      }
    }

    return (
      <div >
        <div className = 'name__pic__container'>
          <h2  className = 'service__name' >{this.props.serviceInfo.nombre}</h2>
          <LazyLoad height={60} offsetVertical={100}>
            <img className = 'logo_pic'
              style= {cursor}
              alt=''
              src= {logo}
              onClick = {this.handleClick.bind(this)}
            ></img>
          </LazyLoad>
        </div>
        <div className = 'progress__bar__container'>
          <div className = 'progress__bar' style={stylingBarWidth}></div>
        </div>
        <h5 className = 'percentage__num'>{this.props.serviceInfo.percentage}%</h5>
        <div className = 'bio__container__services'>
          {this.props.serviceInfo.bio.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/></span>;})}
        </div>
      </div>
    );
  }
}

export default Service;
