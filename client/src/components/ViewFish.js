import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/ViewFish.css";

import { fetchFish } from "../actions/index";

import requireAuth from "./requireAuth";

class ViewFish extends Component {
  componentDidMount() {
    this.props.fetchFish(this.props.id);
  }
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.fetchFish(this.props.id);
    }
  }

  renderTable = () => {
    if (this.props.fish[0]?.message) {
      return (
        <tr className="noFishMessage">
          <td>{this.props.fish[0]?.message}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
    if (this.props.fish.length > 0) {
      return this.props.fish.map((item, index) => {
        return (
          <Fragment key={index}>
            <tr>
              <td>{item.species}</td>
              <td>{item.inches} inches</td>
              <td>
                {item.pounds ? item.pounds : "0"} lbs. {item.ounces} oz.
              </td>
              <td className="btnSpace">
                {/* <button id="edit-btn">Edit</button> */}
                <Link id="remove-btn" to={`/fish-delete/${item._id}`}>
                  Delete
                </Link>
              </td>
            </tr>
          </Fragment>
        );
      });
    }
  };

  render() {
    return (
      <div className="viewFishDiv">
        <table className="table">
          <thead>
            <tr className="header-row">
              <th>Species</th>
              <th>Length</th>
              <th>Weight</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
        <Link to="/options-menu" id="return-btn">
          Return
        </Link>
        <Link to="/fish-enter" id="finish-btn">
          Add Fish
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fish: state.fish,
    id: state.Auth.userId,
  };
};

export default connect(mapStateToProps, { fetchFish })(requireAuth(ViewFish));
