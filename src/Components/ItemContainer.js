import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>number of items-{props.item}</h2>
      <button onClick={props.buyitem}>buyItem</button>
    </div>
  );
};

const MapStateToProps = (state, ownprops) => {
  const itemsstate = ownprops.cake
    ? state.cake.numberofCake
    : state.iceCream.numberOfIceCreams;
  return {
    item: itemsstate,
  };
};

const MapDispatchtToProps = (dispatch, ownprops) => {
  const dispatchFunction = ownprops.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyitem: dispatchFunction,
  };
};

export default connect(MapStateToProps, MapDispatchtToProps)(ItemContainer);
