import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  sectionSelected: "intro",
  workSelected: "MicoTextil",
  workModal: "",
  serviceModal: "",
  imgLoaded: false,
  screenSize: "laptop",
  colapsed: true,
  scrollIndicator: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "MOVETO_SECTION":
      if (!action.data) return state;
      return { ...state, sectionSelected: action.data, scrollIndicator: action.data };
    case "IMG_LOADED":
      if (!action.data) return state;
      return { ...state, imgLoaded: action.data };
    case "CHANGE_SCREEN_WIDTH":
      if (!action.data) return state;
      return { ...state, screenSize: action.data };
    case "TOGGLE_MENU":
      return { ...state, colapsed: action.data };
    case "CHANGE_SCROLL_INDICATOR":
      if (!state.imgLoaded) return state;
      return { ...state, scrollIndicator: action.data, sectionSelected: "" };
    case "SELECT_WORK":
      return { ...state, workSelected: action.data };
    case "TOGGLE_WORK_MODAL":
      if (typeof action.data === "object") {
        return { ...state, serviceModal: action.data, workModal: "" };
      }
      return { ...state, workModal: action.data, serviceModal: "" };
    default:
      return state;
  }
}

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    ...state,
    chageScreenWidth:       (device)   => dispatch({ type: "CHANGE_SCREEN_WIDTH",    data: device }),
    changeScrollIndicator:  (whereAmI) => dispatch({ type: "CHANGE_SCROLL_INDICATOR", data: whereAmI }),
    movetoSection:          (section)  => dispatch({ type: "MOVETO_SECTION",          data: section }),
    toggleMenu:             (order)    => dispatch({ type: "TOGGLE_MENU",             data: order }),
    changeWorkSelected:     (work)     => dispatch({ type: "SELECT_WORK",             data: work }),
    toggleWorkModal:        (work)     => dispatch({ type: "TOGGLE_WORK_MODAL",       data: work }),
    setImgLoaded:           (loaded)   => dispatch({ type: "IMG_LOADED",              data: loaded }),
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  return useContext(UIContext);
}
