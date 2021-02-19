import React from "react";
import { Container, Form } from "react-bootstrap";
import logo from "./assetss/Spotify-Logo-Black.png";
import { Link } from "react-router-dom";

class Signup extends React.Component {
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

        <Container className="d-flex flex-column justify-content-center align-content-center">
          <Container fluid>
            <div className="row">
              <div className="col col-md-6 m-auto">
                <h3 className="text-center">
                  Sign up for free to start listening.
                </h3>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col col-md-6 m-auto">
                <button
                  type="button"
                  className="btn text-white  rounded-pill w-100"
                  style={{ backgroundColor: "rgb(58, 88, 151)" }}
                >
                  SIGN UP WITH FACEBOOK
                </button>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col col-md-5 m-auto"></div>
              <div className="col col-md-6 m-auto">OR</div>
              <div className="col col-md-5 m-auto"></div>
            </div>

            <div className="row">
              <div className="col col-md-6 m-auto">
                <h6 className="text-center">Sign up with your email address</h6>
              </div>
            </div>

            <Form className="container-fluid">
              <div className="row">
                <div className="col col-md-6 m-auto">
                  <Form.Label>What's your email?</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email."
                    id="email"
                    name="email"
                    onChange={(e) =>
                      this.setState({ email: e.currentTarget.value })
                    }
                    value={this.state.email}
                  />
                  <span></span>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col col-md-6 m-auto ">
                  <Form.Label>Confirm your email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email again."
                    id="confirm_email"
                    name="confirm_email"
                    onChange={(e) =>
                      this.setState({ password: e.currentTarget.value })
                    }
                    value={this.state.confirm_email}
                  />
                  <span></span>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col col-md-6 m-auto ">
                  <Form.Label>Create a password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Create a password"
                    id="password"
                    name="password"
                    onChange={(e) =>
                      this.setState({ password: e.currentTarget.value })
                    }
                    value={this.state.password}
                  />
                  <span></span>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col col-md-6 m-auto ">
                  <Form.Label>What should we call you?</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter a profile name."
                    id="username"
                    name="username"
                    onChange={(e) =>
                      this.setState({ username: e.currentTarget.value })
                    }
                    value={this.state.username}
                  />
                  <span></span>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col col-md-6 d-flex m-auto">
                  <div className="col col-md-6">
                    <Form.Label>Month</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Month"
                      id="month"
                      name="month"
                      onChange={(e) =>
                        this.setState({ month: e.currentTarget.value })
                      }
                      value={this.state.month}
                    />
                    <span></span>
                  </div>

                  <div className="col col-md-3">
                    <Form.Label>Day</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="DD"
                      id="day"
                      name="day"
                      onChange={(e) =>
                        this.setState({ day: e.currentTarget.value })
                      }
                      value={this.state.day}
                    />
                    <span></span>
                  </div>

                  <div className="col col-md-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="YYYY"
                      id="year"
                      name="year"
                      onChange={(e) =>
                        this.setState({ year: e.currentTarget.value })
                      }
                      value={this.state.year}
                    />
                    <span></span>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col col-md-6 d-flex m-auto">
                  <div className="col">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="sex"
                      id="sex1"
                    />
                    <label class="form-check-label" for="sex1">
                      Male
                    </label>
                  </div>
                  <div className="col">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="sex"
                      id="sex2"
                    />
                    <label class="form-check-label" for="sex2">
                      Female
                    </label>
                  </div>

                  <div className="col ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="sex"
                      id="sex3"
                    />
                    <label class="form-check-label" for="sex3">
                      Non-binary
                    </label>
                  </div>
                </div>
              </div>

              <div className="row justify-content-around">
                <div className="col col-md-6">
                  <label for="checkboxlab" className="labelbox">
                    <input
                      type="checkbox"
                      id="checkboxlab"
                      className="pr-2 pl-3"
                    />=
                    Share my registration data with Spotify's content providers
                    for marketing purposes.
                  </label>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col col-md-6 m-auto text-center">
                  <small>
                    By clicking on Sign up, you agree to Spotify's{" "}
                    <a href="">Terms and Conditions of Use.</a>
                  </small>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col col-md-6 m-auto text-center">
                  <small>
                    {" "}
                    To learn more about how Spotify collects, uses, shares and
                    protects your personal data please read Spotify's{" "}
                    <a href="">Privacy Policy.</a>
                  </small>
                </div>
              </div>
            </Form>

            <div className="row mb-3">
              <div className="col col-md-6 m-auto">
                <button
                  type="button"
                  className="btn  rounded-pill w-100  text-white"
                  style={{ backgroundColor: "rgb(29, 185, 84)" }}
                >
                  SIGN UP FOR SPOTIFY
                </button>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col col-md-6 m-auto">
                <h6 className="text-center">
                  {" "}
                  Have an account? <Link to="/">Log in</Link>
                </h6>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Signup;
