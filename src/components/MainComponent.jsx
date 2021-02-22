import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row } from "react-bootstrap";

import Home from "./Home";
import SideBar from "./SideBar";
import PlayBar from "./PlayBar";
import ArtistDetails from "./ArtistDetails";
import AlbumDetails from "./AlbumDetails";
import Likes from "./Likes";

class MainComponent extends React.Component {
  state = {
    searchString: "",
  };

  render() {
    return (
      <>
        <Row>
          <SideBar
            searchString={(string) => this.setState({ searchString: string })}
            searchStr={this.state.searchString}
          />

          <Route
            path="/"
            render={(props) => (
              <Home {...props} searchString={this.state.searchString} />
            )}
          />

          <Route path="app/favorites" component={Likes} />
          <Route
            path="app/artistDetails/:id"
            exact
            render={(props) => <ArtistDetails {...props} />}
          />
          <Route
            path="app/albumDetails/:id"
            exact
            render={(props) => <AlbumDetails {...props} />}
          />
        </Row>
        <PlayBar />
      </>
    );
  }
}

export default MainComponent;
