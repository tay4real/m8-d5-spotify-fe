import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import logo from "./assetss/Spotify-Logo-Black.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setUserName: (username) =>
    dispatch({ type: "SET_USER_NAME", payload: username }),
  setPassword: (password) =>
    dispatch({ type: "SET_PASSWORD", payload: password }),
  setLoggedIn: (loggedIn) => dispatch({ type: "SET_LOGIN", payload: loggedIn }),
});
class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <div className="d-flex py-3">
          <img src={logo} className="m-auto" width="200" alt="Spotify Logo" />
        </div>
        <hr />
        <Container className="d-flex flex-column justify-content-center align-content-center">
          <Container fluid>
            <div className="row">
              <div className="col col-md-6 m-auto">
                <h6 className="text-center">To continue, log in to Spotify.</h6>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col col-md-6 m-auto">
                <button
                  type="button"
                  className="btn text-white   rounded-pill w-100"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <i className="fab fa-facebook ml-2"></i> CONTINUE WITH
                  FACEBOOK
                </button>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col col-md-6 m-auto">
                <button
                  type="button"
                  className="btn text-white  rounded-pill w-100"
                  style={{ backgroundColor: "#000" }}
                >
                  <i className="fab fa-apple ml-2"></i> {"   "} CONTINUE WITH
                  APPLE
                </button>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col col-md-6 m-auto">
                <button
                  type="button"
                  class="btn btn-outline-secondary rounded-pill w-100"
                >
                  <i class="fab fa-google ml-"></i> CONTINUE WITH GOOGLE
                </button>
              </div>
            </div>
          </Container>

          <hr />

          <Form className="container-fluid">
            <div className="row">
              <div className="col col-md-6 m-auto">
                <Form.Label>Email address or username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email address or username"
                  id="username"
                  name="username"
                  onChange={(e) =>
                    this.setState({ username: e.currentTarget.value }, () => {
                      console.log(this.state);
                    })
                  }
                  value={this.state.username}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col col-md-6 m-auto ">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  onChange={(e) =>
                    this.setState({ password: e.currentTarget.value }, () => {
                      console.log(this.state);
                    })
                  }
                  value={this.state.password}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col col-md-6 m-auto">
                <a href="">Forgot your password</a>
              </div>
            </div>

            <div className="row justify-content-around">
              <div className="col col-md-3"></div>
              <div className="col col-md-3">
                <label for="checkboxlab" className="labelbox">
                  <input type="checkbox" id="checkboxlab" />
                  Remember me
                </label>
              </div>
              <div className="col col-md-3">
                <button
                  type="button"
                  className="btn loginButton text-white  w-100 rounded-pill mb-5"
                  style={{ backgroundColor: "#15883e" }}
                  onClick={() => {
                    this.props.setUserName(this.state.username);
                    this.props.setPassword(this.state.password);
                    this.props.setLoggedIn(true);
                    this.props.history.push("/home");
                  }}
                >
                  LOG IN
                </button>
              </div>
              <div className="col col-md-3"></div>
            </div>
          </Form>

          <div className="row">
            <div className="col col-md-6 m-auto">
              <Link to="/signup">
                <h6 className="text-center">Don't have an account?</h6>
              </Link>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col col-md-6 m-auto">
              <button
                type="button"
                className="btn btn-outline-secondary rounded-pill w-100"
              >
                SIGN UP FOR SPOTIFY
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
