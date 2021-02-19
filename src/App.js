import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent";

import Signup from "./components/Signup";
import Login from "./components/Login";

class App extends React.Component {
  state = {
    // currentSong: {
    //   albumCover: null,
    //   artistName: null,
    //   songName: null,
    // },
    searchString: "",
  };

  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Route
              path="/"
              exact
              render={(props) => (
                <Login
                  {...props}
                  loggedin={() => this.setState({ loggedin: true })}
                />
              )}
            />
            <Route path="/signup" exact component={Signup} />
            <Route path="/app" exact component={MainComponent} />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
