import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";
const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of IceCreams-{props.numbeofIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
};

const MapStateToProps = (state) => {
  return {
    numbeofIceCreams: state.iceCream.numberOfIceCreams,
  };
};

const MapDispatchtToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(MapStateToProps, MapDispatchtToProps)(IceCreamContainer);
