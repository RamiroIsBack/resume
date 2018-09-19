import constants from "../constants";

var initialState = {
  sectionSelected: "intro", //summary work services timeLine footer
  workSelected: "MicoTextil",
  workModal: "",
  serviceModal: "",
  imgLoaded: false,
  screenSize: "laptop", //or mobile
  colapsed: true,
  scrollIndicator: "" //summary work services timeLine
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case constants.MOVETO_SECTION:
      if (action.data) {
        newState["sectionSelected"] = action.data;
        newState["scrollIndicator"] = action.data;
      }
      //console.log (newState.sectionSelected)
      return newState;

    case constants.IMG_LOADED:
      if (action.data) {
        newState["imgLoaded"] = action.data;
      }
      return newState;

    case constants.CHANGE_SCREEN_WIDTH:
      if (action.data) {
        newState["screenSize"] = action.data;
        //console.log('new size: '+action.data);
      }
      return newState;
    case constants.TOGGLE_MENU:
      newState["colapsed"] = action.data;
      //console.log('colapsed: '+action.data);

      return newState;

    case constants.CHANGE_SCROLL_INDICATOR:
      if (newState.imgLoaded) {
        newState["scrollIndicator"] = action.data;
        newState["sectionSelected"] = "";
      }
      //console.log('scroll indicator progress bar: '+action.data);

      return newState;

    case constants.SELECT_WORK:
      newState["workSelected"] = action.data;
      console.log("WORK selected: " + action.data);

      return newState;

    case constants.TOGGLE_WORK_MODAL:
      if (typeof action.data === "object") {
        //is comming from a service
        newState["serviceModal"] = action.data;
        newState["workModal"] = "";
      } else {
        newState["workModal"] = action.data;
        newState["serviceModal"] = "";
      }
      return newState;

    default:
      return state;
  }
};
