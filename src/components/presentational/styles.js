export default {
  modal: {
    // The gray background
    backdropStyle: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.75)",
      zIndex: 30,
      padding: 60
    },

    stiloModal: {
      position: "absolute",
      backgroundColor: "white",
      maxWidth: "100%",
      maxHeight: "90%",
      minHeight: 300,
      minWidth: 300,
      margin: "0 auto",
      zIndex: 31,
      top: "20px",
      left: "30px",
      right: "300px",
      //bottom: "300px",
      overflow: "auto",
      overflowX: "hidden",
      WebkitOverflowScrolling: "touch",
      borderRadius: "5px",
      outline: "none"
    },
    formContainer: {
      width: "100%",
      height: "100%",
      overflowY: "auto",
      overflowX: "hidden",
      borderRadius: "5px",
      paddingLeft: "8px"
    },
    btnClose: {
      position: "absolute",
      backgroundColor: "rgba(255,255,255,0.75)",
      paddingTop: "10px",
      paddingLeft: "18px",
      borderRadius: "5px",
      fontSize: "19px",
      fontWeight: "bolder",
      border: "none",
      right: "18px",
      cursor: "pointer"
    }
  }
};
