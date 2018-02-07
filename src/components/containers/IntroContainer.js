import React, {Component} from 'react';
import {Intro_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions';
import {PopularFunctions} from '../../utils';

class IntroContainer extends Component {
  componentDidMount(){
    if (!this.props.copy.copyLoaded){
      this.props.getCopy();
    }
  }
  handleImageLoaded(){

    this.props.imgLoaded(true);
  }
  handleImageErrored(){

    this.props.imgLoaded(false);
  }

  render() {
    let urlPic ='';

    let copy = PopularFunctions.selectSpecificCopy(this.props,'introPic');
    let visual = PopularFunctions.figureOutOpacity(this.props);
    if (copy.urlPic){
      urlPic = copy.urlPic;
    }
    return (
      <div>
        {visual.opacity===0 &&
          <div>
            <div className = 'spiner__copy'>
              Loading Ramiro Santamaria's resume
            </div>
            <div className='spinner'>
              <div className='double-bounce1'></div>
              <div className='double-bounce2'></div>
            </div>
          </div>

        }
        <div className='intro__foto__container' style = {visual}>
          <img className='intro__foto'
            src= {urlPic}
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
