import constants from '../constants';

var initialState = {

  sectionSelected : '',
  imgLoaded: false,

};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {


  case constants.MOVETO_SECTION:
    if(action.data){
      newState['sectionSelected'] = action.data;
    }
    console.log (newState.sectionSelected)
    return newState;

  case constants.IMG_LOADED:
    if (action.data){
      newState['imgLoaded'] = action.data;
      console.log('intro image loaded'+action.data)
    }
    return newState;

  default:
    return state;
  }
};
