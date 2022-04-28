import React, { useEffect } from "react";
import { fetchUser } from "../redux";
import { connect } from "react-redux";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const UserContainer = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return props.userData.loading ? (
    <h2>Loading</h2>
  ) : props.userData.error ? (
    <h2>{props.userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {props.userData &&
          props.userData.users &&
          props.userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

const MapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const MapDispatchtToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUser()),
  };
};

export default connect(MapStateToProps, MapDispatchtToProps)(UserContainer);
