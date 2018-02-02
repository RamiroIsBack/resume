import React, {Component} from 'react';
import {Containers_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions'

class SkillsContainer extends Component {


  render() {
    let suma = 5;

    return (
      <div >
        <h3 > skldfjasdlkf;jsd;flkajsdf;lskdjf;lsakdfjsdklfjsdkfjsdkflsjdf < /h3>
        <h3 > la suma es {suma} < /h3>
        <h3 > dfkgjhdfkbjnpofnWEFASDLFKJWOEIFJOINVLKVMSLDKCSJDFLKJDFOWIEJFLSKFJSLDKFJSLDKFJSDLFKJSDFKLSDFJ < /h3>
        <h3 > la suma es {suma} < /h3>
        <h3 > sldkfjsdlfksjfdlksdf;lskdfjsdiofjsdflksdfjlskdfjsdlkfjsdflksjdflksdjfkldsf < /h3>
      </div>
    );
  }
}

const dispatchToProps = (dispatch) =>{

  return{
    getCopy: () => dispatch(actions.getCopy()),

  };
};
const stateToProps = (state) => {
  return{
    copy :state.copy,
  };
};

export default connect (stateToProps,dispatchToProps)(SkillsContainer);
