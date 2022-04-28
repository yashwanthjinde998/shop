import React from "react";
import { buyCake } from "../redux";
import { useSelector, useDispatch } from "react-redux";
const HooksCakeContainer = () => {
  const numberOfcakes = useSelector((state) => state.cake.numberofCake);
  const dispatch = useDispatch();
  //   const buycake = useSelector((dispatch) => dispatch(buyCake()));
  return (
    <div>
      <h2>Number Of Cakes-{numberOfcakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};
export default HooksCakeContainer;
