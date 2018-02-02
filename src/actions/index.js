import constants from '../constants';
import { Firebase } from '../utils';


export default {
  getCopy: (params)=>{
    return dispatch => {
      return dispatch(Firebase.getCopy(params, constants.COPY_RECEIVED));
    };

  },
  movetoSection: (section) =>{
    return{
      type: constants.MOVETO_SECTION ,
      data: section
    };
  },
  imgLoaded: (loaded) =>{
    return{
      type: constants.IMG_LOADED,
      data: loaded
    }
  }
};
