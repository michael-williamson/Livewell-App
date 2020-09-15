import React, { Component } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { deleteFish } from "../actions/index";

import requireAuth from "./requireAuth";

class FishDelete extends Component {
  render() {
    return (
      <div>
        <Modal
          deleteFish={this.props.deleteFish}
          id={this.props.match.params.id}
          googleId={this.props.auth?.userId}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.Auth,
  };
};

export default connect(mapStateToProps, { deleteFish })(
  requireAuth(FishDelete)
);
