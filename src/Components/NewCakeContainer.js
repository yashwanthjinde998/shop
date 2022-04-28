import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const NewCakeContainer = (props) => {
  const [number, setnumber] = useState(1);
  return (
    <div>
      <h2>Number of Cake-{props.numbeofCake}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
      ></input>
      <button onClick={() => props.buyCake(number)}>Buy Cake(number)</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(MapStateToProps, MapDispatchtToProps)(NewCakeContainer);
