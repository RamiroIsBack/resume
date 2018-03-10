import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../actions';
import {Intro_css} from '../../css'; // eslint-disable-line no-unused-vars

class IntroContainer extends Component {
  constructor(){
    super();
    this.state={
      imgLoaded:false
    };
  }
  handleImageLoaded(){

    this.setState({imgLoaded:true});
  }
  handleImageErrored(){
    console.log('error while handleing intro img');

  }

  render() {
    let urlPic ='./backgroundImage.png';
    let animeIt = {};

    if(this.state.imgLoaded){
      animeIt = {
        animation: 'fadeIntro 2s ease-in',
        opacity: '0.5',
      };
    }
    else{
      animeIt = {
        opacity: '0',
      };
    }

    return (
      <div>

        <div className='intro__foto__container' >
          <img className='intro__foto' style = {animeIt}
            src= {urlPic}
            alt=''
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
          ></img>
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

export default connect (stateToProps,dispatchToProps)(IntroContainer);
