import constants from "../constants";

var initialState = {
  copyLoaded: false,
  copyList: [],
  servicesList: [],
  timeLineList: [],
  footerList: [],
  talksList: [],
  worksList: []
};
var getSubList = (copyList, request) => {
  let servicesObj = {};
  let list = [];

  if (copyList.length !== 0) {
    for (let i = 0; i < copyList.length; i++) {
      if (copyList[i].nombre === request) {
        servicesObj = copyList[i];
        for (var key in servicesObj) {
          if (
            servicesObj.hasOwnProperty(key) &&
            key !== "nombre" &&
            key !== "id"
          ) {
            list.push(servicesObj[key]);
          }
        }
        break;
      }
    }
  }
  return list;
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case constants.COPY_RECEIVED:
      if (action.data) {
        let list = action.data;
        newState["copyList"] = list;
        newState["servicesList"] = getSubList(list, "services");
        newState["timeLineList"] = getSubList(list, "timeLine");
        newState["footerList"] = getSubList(list, "footer");
        newState["talksList"] = getSubList(list, "talks");
        newState["worksList"] = getSubList(list, "works").sort(
          (a, b) => a.priority - b.priority
        );
        newState["copyLoaded"] = true;
        console.log("copyLoaded");
      }
      return newState;

    default:
      return state;
  }
};
