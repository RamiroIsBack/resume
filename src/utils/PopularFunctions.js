export default {

  selectSpecificCopy: (props, who) => {
    let copy = {};
    if (props.copy) {
      if (props.copy.copyList.length !== 0) {
        for (let i = 0; i < props.copy.copyList.length; i++) {
          if (props.copy.copyList[i].nombre === who) {
            copy = props.copy.copyList[i];
            break;
          }

        }

      }
    }
    return copy;
  },

};
