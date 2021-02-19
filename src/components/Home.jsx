import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import ArtistCard from "./ArtistCard";
import Search from "./Search";

class Home extends React.Component {
  state = {
    selectedArtist: {},
  };
  render() {
    return (
      <>
        <Col
          xs={12}
          md={10}
          className="bg_grad"
          style={{ overflowY: "scroll", paddingBottom: "25%" }}
        >
          <Container>
            <Navbar className=" navbar-expand-lg navbar-dark mb-5">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="container-md d-flex justify-content-center">
                  <div className="navbar-nav ml-5 pl-5">
                    <a className="nav-link active ml-3" href="#">
                      TRENDING <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-link ml-3" href="#">
                      PODCAST
                    </a>
                    <a className="nav-link ml-3" href="#">
                      MOODS AND GENRES
                    </a>
                    <a className="nav-link ml-3" href="#">
                      NEW RELEASES
                    </a>
                    <a className="nav-link ml-3" href="#">
                      DISCOVER
                    </a>
                  </div>
                </div>
              </div>
            </Navbar>
            {this.props.searchString !== "" &&
            this.props.searchString !== null ? (
              <Search
                searchString={this.props.searchString}
                history={this.props.history}
              />
            ) : (
              <>
                <Row className="mt-5 mb-5">
                  <ArtistCard id="13" history={this.props.history} />
                  <ArtistCard id="1" history={this.props.history} />
                  <ArtistCard id="15" history={this.props.history} />
                  <ArtistCard id="2" history={this.props.history} />
                  <ArtistCard id="3" history={this.props.history} />
                  <ArtistCard id="14" history={this.props.history} />
                </Row>
                <Row className="mt-3 mb-5">
                  <ArtistCard id="10" history={this.props.history} />
                  <ArtistCard id="6" history={this.props.history} />
                  <ArtistCard id="11" history={this.props.history} />
                  <ArtistCard id="7" history={this.props.history} />
                  <ArtistCard id="9" history={this.props.history} />
                  <ArtistCard id="931" history={this.props.history} />
                </Row>
                <Row className="mt-5 mb-5">
                  <ArtistCard id="93" history={this.props.history} />
                  <ArtistCard id="91" history={this.props.history} />
                  <ArtistCard id="121" history={this.props.history} />
                  <ArtistCard id="28" history={this.props.history} />
                  <ArtistCard id="848" history={this.props.history} />
                  <ArtistCard id="831" history={this.props.history} />
                </Row>
              </>
            )}
          </Container>
        </Col>
      </>
    );
  }
}

export default Home;
