import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cake-{props.numbeofCake}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const MapStateToProps = (state) => {
  return {
    numbeofCake: state.cake.numberofCake,
  };
};

const MapDispatchtToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(MapStateToProps, MapDispatchtToProps)(CakeContainer);
