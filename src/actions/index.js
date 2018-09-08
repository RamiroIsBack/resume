import constants from "../constants";
import { Firebase } from "../utils";

export default {
  getCopy: params => {
    return dispatch => {
      return dispatch(Firebase.getCopy(params, constants.COPY_RECEIVED));
    };
  },
  movetoSection: section => {
    return {
      type: constants.MOVETO_SECTION,
      data: section
    };
  },
  imgLoaded: loaded => {
    return {
      type: constants.IMG_LOADED,
      data: loaded
    };
  },
  chageScreenWidth: screenSize => {
    return {
      type: constants.CHANGE_SCREEN_WIDTH,
      data: screenSize
    };
  },
  toggleMenu: order => {
    return {
      type: constants.TOGGLE_MENU,
      data: order
    };
  },
  changeScrollIndicator: scrollIndicator => {
    return {
      type: constants.CHANGE_SCROLL_INDICATOR,
      data: scrollIndicator
    };
  },
  changeWorkSelected: workSelected => {
    return {
      type: constants.SELECT_WORK,
      data: workSelected
    };
  },
  toggleWorkModal: workSelected => {
    return {
      type: constants.TOGGLE_WORK_MODAL,
      data: workSelected
    };
  }
};
