const initialState = {
    message : "" 
  };
  
 const stateReducers = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_MESSAGE":
        return { ...state, message : action.payload };
      default:
        return state;
    }
  };
  
  export default stateReducers;