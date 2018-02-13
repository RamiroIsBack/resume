import React, {Component} from 'react';
import {Footer_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions';
import {PopularFunctions} from '../../utils';
import {MapaContainer} from './'

class FooterContainer extends Component {

  handleClick(event){
    window.open(event.target.id,'_blank');
  }

  render() {
    let gMapsCopy = {};
    let emailCopy = {};
    let telCopy = {};
    let downloadCopy = {};
    let connectList = [];
    let footerList =[];
    if(this.props.copy){
      if (this.props.copy.footerList.length != 0){
        footerList = this.props.copy.footerList;
        for(let i = 0; i<footerList.length; i++){
          if(footerList[i].nombre === 'download'){
            downloadCopy = footerList[i];
          }
          if(footerList[i].nombre === 'gMaps'){
            gMapsCopy = footerList[i];
          }
          if(footerList[i].nombre === 'email'){
            emailCopy = footerList[i];
          }
          if(footerList[i].nombre === 'tel'){
            telCopy = footerList[i];
          }else if (footerList[i].nombre === 'instagram' ||
            footerList[i].nombre === 'stackOverFlow' ||
            footerList[i].nombre === 'linkedIn' ||
            footerList[i].nombre === 'gitHub'){
            //meter en el connectList
            connectList.push(
              <div key ={i}
                onClick = {this.handleClick.bind(this)}
                id = {footerList[i].urlLink}
              >
                <img className = 'footer__connect__foto'
                  src = {footerList[i].urlPic}
                  id = {footerList[i].urlLink}
                ></img>

              </div>
            );
          }
        }
      }
    }

    let visual = PopularFunctions.figureOutOpacity(this.props);

    return (
      <div className='footer__container' style = {visual}>
        <div className='footer__map__container'>
          <MapaContainer
            mapInfo = {gMapsCopy}
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyClcb4B5oRktWDQWGU8Ev4hgYm5p_NXgL4&v=3.exp&libraries=geometry,drawing,places'
            loadingElement={<div style={{ height: '100%' }} />}
          />
        </div>
        <div className='footer__tel__container'>
          <div className='footer__tel'>
            <a href={'tel:' + telCopy.urlLink} style={{color: 'white',fontWeight:'bold'}}>{telCopy.urlLink}</a>
          </div>
          <div className='footer__tel__pic'>
            <img className='footer__picPhoto'
              src= {telCopy.urlPic}
            ></img>
          </div>
        </div>
        <div className='footer__mail__container'>
          <div className='footer__mail'>
            <a href={'mailto:' + emailCopy.urlLink} style={{color: 'white',fontWeight:'bold'}}>{emailCopy.urlLink}</a>

          </div>
          <div className='footer__mail__pic'>
            <img className='footer__picPhoto'
              src= {emailCopy.urlPic}
            ></img>
          </div>
        </div>

        <div className='footer__connect__foto__container'>
          {connectList}
        </div>
        <div className='footer__download__foto__container'>
          <a className = 'footer__download__text__link__container'
            href={downloadCopy.urlLink}
            download='Ramiro Santamaria Resume.pdf'>
            <h4 className ='footer__download__text'>Download the one-page .pdf</h4>
          </a>
          <a className = 'footer__download__foto__link__container'
            href={downloadCopy.urlLink}
            download='Ramiro Santamaria Resume.pdf'>
            <img className='footer__download__foto'
              src= {downloadCopy.urlPic}
              alt= 'download' >
            </img>
          </a>
        </div>

      </div>
    );
  }
}

const dispatchToProps = (dispatch) =>{

  return{
    getCopy: () => dispatch(actions.getCopy()),
    imgLoaded: (loaded) => dispatch (actions.imgLoaded(loaded)),

  };
};
const stateToProps = (state) => {
  return{
    copy :state.copy,
    section: state.section,
  };
};

export default connect (stateToProps,dispatchToProps)(FooterContainer);
