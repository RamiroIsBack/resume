import constants from '../constants';

var initialState = {

  sectionSelected : 'intro', //summary services timeLine footer
  imgLoaded: false,
  screenSize: 'laptop', //tablet or mobile
  colapsed: true,
  scrollIndicator: '', //summaryContainer servicesContainer timeLineContainer

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
      console.log('TODO:: loading moving thing!!  intro image loaded'+action.data)
    }
    return newState;

  case constants.CHANGE_SCREEN_WIDTH:
    if (action.data){
      newState['screenSize'] = action.data;
      console.log('new size: '+action.data);
    }
    return newState;
  case constants.TOGGLE_MENU:


    newState['colapsed'] = action.data;
    console.log('colapsed: '+action.data);

    return newState;

  case constants.CHANGE_SCROLL_INDICATOR:
    newState['scrollIndicator'] = action.data;
    console.log('scroll indicator progress bar: '+action.data);

    return newState;



  default:
    return state;
  }
};
