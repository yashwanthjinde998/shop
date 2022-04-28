import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import IceCremReducer from "./iceCream/IceCreamReducer";
import UserReducer from "./user/UserReducer";
import UserReduce from "./user/UserReducer";
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCremReducer,
  user: UserReducer,
});

export default rootReducer;
