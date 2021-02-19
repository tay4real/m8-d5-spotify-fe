import React from "react";
import { Col, Row, Container, Table } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addAlbumWithThunk: (id) => {
    dispatch(async (dispatch, getState) => {
      try {
        let response = await fetch(
          "https://deezerdevs-deezer.p.rapidapi.com/album/" + id,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            },
          }
        );
        let album = await response.json();
        let tracks = album.tracks.data;
        console.log(album);
        if (response.ok) {
          dispatch({
            type: "ADD_ALBUM",
            payload: album,
          });
          dispatch({
            type: "ADD_TRACKS",
            payload: tracks,
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  },
  addLike: (song) => {
    dispatch({
      type: "ADD_LIKE",
      payload: song,
    });
  },
  removeLike: (song) => {
    dispatch({
      type: "REMOVE_LIKE",
      payload: song,
    });
  },
  currentSong: (song) => {
    dispatch({
      type: "GET_SONG",
      payload: song,
    });
  },
});

class AlbumDetails extends React.Component {
  state = {
    submitCounter: 0,
    deleteCounter: 0,
    editComment: { comment: {}, editCounter: 0 },
  };

  componentDidMount = () => {
    this.props.addAlbumWithThunk(this.props.match.params.id);
  };
  render() {
    const album = this.props.album.albums;

    const tracks = this.props.album.tracks;

    return (
      <>
        <Col
          xs={12}
          md={10}
          //   className="bg_grad"
          style={{ overflowY: "scroll", paddingBottom: "25%" }}
        >
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="">
                <div
                  className="background"
                  style={{
                    width: "100%",
                    height: "30vw",
                    display: "block",
                    zIndex: -1,
                    position: "absolute",
                    filter: "blur(50px)",
                  }}
                ></div>
                <Container>
                  <Row className="mt-4">
                    <Col xs={4}>
                      <img
                        src={album.cover_xl}
                        alt=""
                        className="mt-1 img-fluid"
                        id="albumImg"
                      />
                    </Col>
                    <Col xs={8}>
                      <h2 className="text-light">{album.record_type}</h2>
                      <h2 className="text-light">Title: {album.title}</h2>
                      <h3
                        style={{
                          color: "var(--spotify_green)",
                          WebkitTextStroke: "0.5px black",
                        }}
                      >
                        <strong>Spotify</strong>
                        <br />
                        {album.nb_tracks} songs
                        <br />
                        Duration:{" "}
                        {(album.duration / 60)
                          .toFixed(2)
                          .toString()
                          .replace(".", ":")}{" "}
                        min
                      </h3>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div>
                <Table className=" table-borderless  table-dark mt-5">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Album</th>
                      <th scope="col">Date Added</th>
                      <th scope="col">
                        <i className="far fa-clock"></i>
                      </th>
                      <th scope="col">
                        <i className="fas fa-play"></i>
                      </th>
                      <th scope="col">
                        <i className="fas fa-heart"></i>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {tracks.map((tracks, index) => (
                      <tr key={tracks.id + "a"}>
                        <td>{index}</td>
                        <td>
                          <>
                            <strong>{tracks.title}</strong>
                            <br />
                            <p
                              style={{ display: "inline" }}
                              onClick={() => {
                                this.props.history.push(
                                  "/artistDetails/" + tracks.artist.id
                                );
                              }}
                            >
                              {tracks.artist.name}
                            </p>
                          </>
                        </td>
                        <td>{album.title}</td>
                        <td>{album.release_date}</td>
                        <td>
                          {(tracks.duration / 60)
                            .toFixed(2)
                            .toString()
                            .replace(".", ":")}
                        </td>
                        <td>
                          <i
                            className="fas fa-play"
                            onClick={() =>
                              this.props.currentSong({
                                albumCover: album.cover_medium,
                                artistName: album.artist.name,
                                songName: tracks.title,
                              })
                            }
                          ></i>
                        </td>
                        <td>
                          {this.props.likes.find(
                            (song) => song.tracks.id === tracks.id
                          ) ? (
                            <i
                              className="fas fa-heart"
                              onClick={() => this.props.removeLike(tracks)}
                            ></i>
                          ) : (
                            <i
                              className="far fa-heart"
                              onClick={() =>
                                this.props.addLike({
                                  id: tracks.id,
                                  tracks: tracks,
                                  cover: album.cover_xl,
                                })
                              }
                            ></i>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <Container>
            <Row className="d-flex justify-content-between my-5 pb-5">
              <Col md={8}>
                <CommentList
                  id={this.props.match.params.id}
                  submitCounter={this.state.submitCounter}
                  onClick={() =>
                    this.setState({
                      deleteCounter: this.state.deleteCounter + 1,
                    })
                  }
                  deleteCounter={this.state.deleteCounter}
                  editCm={(comment) =>
                    this.setState({
                      editComment: {
                        comment: comment,
                        editCounter: this.state.editComment.editCounter + 1,
                      },
                    })
                  }
                />
              </Col>
              <Col
                md={3}
                style={{ backgroundColor: "white" }}
                className="rounded d-flex justify-content-center pb-3"
              >
                <AddComment
                  id={this.props.match.params.id}
                  onClick={() =>
                    this.setState({
                      submitCounter: this.state.submitCounter + 1,
                    })
                  }
                  editedCm={this.state.editComment}
                  clearEditCommentState={() =>
                    this.setState({
                      editComment: {
                        comment: {},
                        editCounter: 0,
                      },
                    })
                  }
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetails);
