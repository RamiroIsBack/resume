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
  }
};
