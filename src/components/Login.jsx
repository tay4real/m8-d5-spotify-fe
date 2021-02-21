import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import logo from "./assetss/Spotify-Logo-Black.png";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  login = async () => {
    const res = await axios(`${process.env.REACT_APP_BE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: this.state.email,
        password: this.state.password,
      },
      withCredentials: true, // use cookies
    });

    localStorage.setItem("accessToken", res.data.accessToken);
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
                <a>
                  <button
                    type="button"
                    className="btn text-white   rounded-pill w-100"
                    style={{ backgroundColor: "#3b5998" }}
                  >
                    <i className="fab fa-facebook ml-2"></i> CONTINUE WITH
                    FACEBOOK
                  </button>
                </a>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col col-md-6 m-auto">
                <a>
                  <button
                    type="button"
                    className="btn text-white  rounded-pill w-100"
                    style={{ backgroundColor: "#000" }}
                  >
                    <i className="fab fa-apple ml-2"></i> {"   "} CONTINUE WITH
                    SPOTIFY
                  </button>
                </a>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col col-md-6 m-auto">
                <a href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}>
                  <button
                    type="button"
                    class="btn btn-outline-secondary rounded-pill w-100"
                  >
                    <i class="fab fa-google ml-"></i> CONTINUE WITH GOOGLE
                  </button>
                </a>
              </div>
            </div>
          </Container>

          <hr />

          <Form className="container-fluid">
            <div className="row">
              <div className="col col-md-6 m-auto">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email address"
                  id="email"
                  name="email"
                  onChange={(e) =>
                    this.setState({ email: e.currentTarget.value })
                  }
                  value={this.state.email}
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
                  onClick={this.login}
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

export default Login;
