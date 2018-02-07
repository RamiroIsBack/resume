export default {

  figureOutOpacity: (props) =>{
    let visual = {
      opacity: 0,
    };
    if(props.section){
      if(props.section.imgLoaded){
        visual = {
          opacity: 1,
        };
      }
    }
    return visual;
  },
  selectSpecificCopy: (props,who) =>{
    let copy = {};
    if(props.copy){
      if (props.copy.copyList.length != 0){
        for(let i = 0; i<props.copy.copyList.length; i++){
          if(props.copy.copyList[i].nombre === who){
            copy = props.copy.copyList[i];
            break;
          }

        }

      }
    }
    return copy;
  },

  getOffset:(el) => {
    el = el.getBoundingClientRect();
    return {
      left: el.left + window.scrollX,
      top: el.top + window.scrollY
    };
  },

};
