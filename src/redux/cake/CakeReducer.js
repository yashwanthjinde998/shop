import { BUY_CAKE } from "./CakeTypes";
const initialState = {
  numberofCake: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberofCake: state.numberofCake - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
