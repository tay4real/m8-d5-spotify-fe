import React, { Component } from "react";
import { Col, Row, Alert, Spinner } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromLikes: (obj) => dispatch({ type: "REMOVE_LIKE", payload: obj }),
});

class Likes extends Component {
  state = {
    loading: null,
  };

  render() {
    const likes = this.props.likes;

    return (
      <>
        <Col
          xs={12}
          md={10}
          className="bg_grad"
          style={{ overflowY: "scroll", paddingBottom: "25%" }}
        >
          <h1 className="text-light mt-5">
            {likes.length > 0
              ? `Showing ${likes.length}  ${
                  likes.length === 1 ? "like" : "likes"
                }`
              : "You have no likes!"}
          </h1>

          <Row>
            {likes.map((track, index) => (
              <Col xs={6} md={3} lg={2} className="covers mb-2" key={index}>
                {this.state.loading ? (
                  <Spinner animation="border" variant="success" />
                ) : (
                  <>
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src={track.cover}
                        alt={track.tracks.artist.name}
                      />
                      <div className="playMusic">
                        <i
                          className="fas fa-heart fa-2x mx-2 position-relative"
                          onClick={() => this.props.removeFromLikes(track)}
                        >
                          <div className="saveLibrary">Remove from Likes</div>
                        </i>
                        <i
                          className="far fa-play-circle fa-4x"
                          onClick={() => {
                            this.selectArtist(track.tracks.artist.id);
                          }}
                        ></i>
                        <i className="fas fa-ellipsis-h fa-2x mx-2">
                          <div className="more">ßMore</div>
                        </i>
                      </div>
                    </div>
                    <p className="text-center spotify-text-secondary mt-2 mb-0">
                      {track.tracks.artist.name}
                      <br />
                    </p>
                    <p className="text-center spotify-text-secondary mt-0 pt-0">
                      {track.tracks.title}
                    </p>
                  </>
                )}
              </Col>
            ))}
          </Row>
        </Col>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
