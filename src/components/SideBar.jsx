import React from "react";
import logo from "./assetss/spologo.png";
import { Link, withRouter } from "react-router-dom";
import { Col, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setLoggedOut: (loggedOut) =>
    dispatch({ type: "SET_LOGOUT", payload: loggedOut }),
});

class SideBar extends React.Component {
  state = {
    searchString: this.props.searchStr,
  };

  searchHandler = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      this.props.searchString(e.currentTarget.value);
    } else {
      this.setState({ searchString: e.currentTarget.value });
    }
  };

  render() {
    return (
      <>
        <Col
          md={2}
          className="d-none d-md-block spotify-bg-sidebar"
          style={{
            position: "sticky",
            top: 0,
            height: "88vh",
            backgroundColor: "#010102",
          }}
        >
          <div className="my-3 d-flex align-items-center">
            <img className="ml-4" src={logo} alt="Spotify" width="55%" />
          </div>
          <div className="d-flex flex-column">
            <Link className="pl-4 mb-2 linkBorder" to="/home">
              <span className="spotify-text-primary spotify-text-secondary d-flex flex-row pt-1">
                <i className="fas fa-home mr-3"></i>
                <h6>Home</h6>
              </span>
            </Link>
            <Link className="pl-4 mb-2" to="/home">
              <span className="spotify-text-primary d-flex flex-row pt-1">
                <i className="fas fa-search mr-3"></i>
                <h6>Search</h6>

                <input
                  className="inpC d-none mr-3 rounded"
                  type="text"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="search..."
                  onKeyDown={this.searchHandler}
                  onChange={this.searchHandler}
                  value={this.state.searchString}
                />
              </span>
            </Link>
            <Link className="pl-4 mb-2" to="/favorites">
              <span className="spotify-text-primary d-flex flex-row pt-1">
                <i className="fas fa-swatchbook mr-3"></i>
                <h6>Your Likes</h6>
              </span>
            </Link>
          </div>
          <div className="myLibrary border-top border-secondary ml-4">
            <ul className="pl-0"></ul>
          </div>
          <div className="mb-5 px-4 ">
            <a className="spotify-text-primary" href="#">
              <span className="d-flex flex-row border-bottom border-secondary mr-4 pb-2">
                <i className="far fa-arrow-alt-circle-down fa-2x mr-3"></i>
                <h6 className="pt-1">Install App</h6>
              </span>
            </a>

            <span className="d-flex flex-row">
              <img
                className="rounded-circle mt-2"
                src="data:image/png;base64,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"
                width="35px"
                height="35px"
              />
              <h6 className="ml-2 mr-2 pt-3 spotify-text-secondary">
                {this.props.user.username}
              </h6>
              <span className="pt-2">
                <button
                  class="btn login-btn btn-danger m-0"
                  type="button"
                  onClick={() => {
                    this.props.setLoggedOut(false);
                    this.props.history.push("/");
                  }}
                >
                  Logout
                </button>
              </span>
            </span>
          </div>
        </Col>
        <div className="spotify-bg-sidebar2 d-flex d-md-none justify-content-around w-100 ml-0">
          <Link className="pl-4 mb-2" to="/home">
            <div className="spotify-text-primary d-flex align-items-center justify-content-center flex-column pt-1">
              <i className="fas fa-home fa-2x mt-3 mb-1"></i>
              <h6>Home</h6>
            </div>
          </Link>
          <a className="pl-4 mb-2" href="#">
            <div className="spotify-text-primary d-flex align-items-center justify-content-center flex-column pt-1">
              <i className="fas fa-search fa-2x mt-3 mb-1"></i>
              <h6>Search</h6>
            </div>
          </a>
          <Link className="pl-4 mb-2" to="/favorites">
            <div className="spotify-text-primary d-flex align-items-center justify-content-center flex-column pt-1">
              <i className="fas fa-swatchbook fa-2x mt-3 mb-1"></i>
              <h6>Your Likes</h6>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SideBar)
);
