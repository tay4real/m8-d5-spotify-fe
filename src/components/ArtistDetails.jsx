import React from "react";
import {
  Row,
  Col,
  Alert,
  Jumbotron,
  Container,
  Card,
  Spinner,
  Table,
} from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  currentSong: (song) => {
    dispatch({
      type: "GET_SONG",
      payload: song,
    });
  },
  getTheArtist: (url, sortTrack, setState) => {
    dispatch(async (dispatch) => {
      try {
        const response = await fetch(url, {
          headers: {
            "x-rapidapi-key":
              "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        });
        const data = await response.json();
        if (response.ok) {
          dispatch({ type: "GET_ARTIST", payload: data });
          let secondurl =
            "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + data.name;
          const response = await fetch(secondurl, {
            headers: {
              "x-rapidapi-key":
                "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            },
          });
          let album = await response.json();

          let map = new Map();
          for (let element of album.data) {
            map.set(element.album.id, element);
          }

          let filteredData = [];
          map.forEach((value) => {
            filteredData.push(value);
          });
          let tracks = [...filteredData];
          if (response.ok) {
            sortTrack(tracks);
            dispatch({
              type: "GET_ARTIST_ALBUMS",
              payload: filteredData,
            });
            dispatch({
              type: "GET_ARTIST_TRACKS",
              payload: tracks.slice(0, 3),
            });
            setState();
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
  },
});

class ArtistDetails extends React.Component {
  state = {
    artist: {},
    album: [],
    tracks: [],
    loading: true,
    submitCounter: 0,
    deleteCounter: 0,
    editComment: { comment: {}, editCounter: 0 },
  };

  fetchArtist = () => {
    let artistUrl =
      "https://deezerdevs-deezer.p.rapidapi.com/artist/" +
      this.props.match.params.id;

    this.props.getTheArtist(artistUrl, this.sortTrack, () => {
      this.setState({ loading: false });
    });
  };

  sortTrack = (track) => {
    track.sort(function (a, b) {
      var nameA = a.rank; // ignore upper and lowercase
      var nameB = b.rank; // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  };

  fetchArtistDetails = async (query) => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query,
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

      let map = new Map();
      for (let element of album.data) {
        map.set(element.album.id, element);
      }

      let filteredData = [];
      map.forEach((value) => {
        filteredData.push(value);
      });
      let tracks = [...filteredData];

      if (response.ok) {
        setTimeout(() => {
          this.sortTrack(tracks);
          tracks = tracks.slice(0, 3);
          this.setState({
            album: filteredData,
            loading: false,
            tracks: tracks,
          });
        }, 2000);
      } else {
        <Alert variant="danger">Something went wrong!</Alert>;
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  seletedAlbum = (id) => {
    this.props.history.push("/albumDetails/" + id);
  };

  componentDidMount = () => {
    this.fetchArtist();
  };

  render() {
    const artist = this.props.artistDetail.artist;
    const album = this.props.artistDetail.albums;
    const tracks = this.props.artistDetail.tracks;
    return (
      <>
        {this.state.loading ? (
          <Spinner
            animation="border"
            variant="success"
            style={{ marginTop: "20%", marginLeft: "35%" }}
          />
        ) : (
          <Col
            xs={12}
            md={10}
            className="bg_grad px-0"
            style={{
              overflowY: "scroll",
              overflowX: "hidden",
              paddingBottom: "25%",
            }}
          >
            <Jumbotron
              fluid
              style={{
                backgroundImage: `url(${artist.picture_xl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPositionY: "20%",
              }}
            >
              <Container className="pt-5 pb-0 my-3">
                <div
                  className="my-0 py-2 px-3"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                    display: "inline-block",
                    marginLeft: "70%",
                    borderRadius: "15px",
                  }}
                >
                  <h1
                    className="mt-5 text-light"
                    style={{ fontWeight: "bold", fontSize: "4rem" }}
                  >
                    {artist.name}
                  </h1>
                  <h6 className="text-primary" style={{ fontSize: "1.8rem" }}>
                    {artist.nb_fan} listeners
                  </h6>
                  <h6 className="text-warning" style={{ fontSize: "1.8rem" }}>
                    {artist.nb_album} albums
                  </h6>
                </div>
              </Container>
            </Jumbotron>
            <Container fluid>
              <Row>
                <Col md={8} className="d-none d-md-block">
                  <h2 className="text-light pl-4">Most popular songs</h2>

                  <div>
                    <Table
                      className=" table-borderless tale-hover table-dark"
                      style={{ minWidth: "500px" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">Play</th>
                          <th scope="col">Title</th>
                          <th scope="col">Album</th>

                          <th scope="col">
                            <i className="far fa-clock"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tracks.map((track, index) => (
                          <tr key={index}>
                            <td>
                              <i
                                className="fas fa-play"
                                onClick={() =>
                                  this.props.currentSong({
                                    albumCover: track.album.cover_big,
                                    artistName: track.artist.name,
                                    songName: track.title,
                                  })
                                }
                              ></i>
                            </td>
                            <td>{track.title}</td>
                            <td
                              className="albumTitleTd"
                              onClick={() => {
                                this.props.history.push(
                                  this.seletedAlbum(track.album.id)
                                );
                              }}
                            >
                              {track.album.title}
                            </td>

                            <td>
                              {(track.duration / 60)
                                .toFixed(2)
                                .toString()
                                .replace(".", ":")}
                              min
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Col>
                <Col lg={4} className=" d-none d-lg-block">
                  <h2 className="text-light">Artist choice</h2>
                  <Card
                    className="mb-3 artistChoice"
                    style={{
                      maxWidth: "540px",
                      maxHeight: "200px",
                      backgroundColor: "rgba(0,0,0,0.7)",
                    }}
                    onClick={() => {
                      this.props.history.push(
                        this.seletedAlbum(album[1].album.id)
                      );
                    }}
                  >
                    <Row className=" no-gutters">
                      <Col xs={4}>
                        <img
                          src={album[1].album.cover_xl}
                          className="card-img"
                          alt="..."
                        />
                      </Col>
                      <Col md={8}>
                        <div className="card-body">
                          <div className="card-text">
                            <span
                              className="d-inline-block text-truncate text-light"
                              style={{ maxWidth: "100%" }}
                            >
                              <strong>{album[1].artist.name}</strong>
                              <br />
                              {album[1].album.title}- Album
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
            <Container fluid className="mt-5">
              <h2 className="text-light">Most Popular Albums</h2>
              <Row className="mt-3">
                {album.map((album) => (
                  <Col
                    xs={6}
                    md={3}
                    lg={2}
                    className="covers my-2"
                    key={album.album.id}
                  >
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src={album.album.cover_big}
                        alt={album.album.title}
                      />
                      <div className="playMusic">
                        <i className="far fa-heart fa-2x mx-2 position-relative">
                          <div className="saveLibrary">
                            Save to your Library
                          </div>
                        </i>
                        <i
                          className="far fa-play-circle fa-4x"
                          onClick={() => {
                            this.seletedAlbum(album.album.id);
                          }}
                        ></i>
                        <i className="fas fa-ellipsis-h fa-2x mx-2">
                          <div className="more">More</div>
                        </i>
                      </div>
                    </div>
                    <p className="text-center spotify-text-secondary mt-2">
                      {album.album.title}
                    </p>
                  </Col>
                ))}
              </Row>
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
                  className="rounded d-flex justify-content-center pb-3 mr-5"
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
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetails);
