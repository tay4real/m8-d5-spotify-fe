import React from "react";
import { Col, Row, Alert, Spinner } from "react-bootstrap";

class Search extends React.Component {
  state = {
    searchResult: [],
    loading: null,
  };

  searchFetch = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" +
          this.props.searchString,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      let searchResult = await response.json();

      if (response.ok) {
        this.setState({ searchResult: searchResult.data, loading: false });
        console.log(this.state.searchResult);
      } else {
        <Alert variant="danger">Something went wrong!</Alert>;
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.searchFetch();
  };

  componentDidUpdate = (previousProps) => {
    if (previousProps.searchString !== this.props.searchString) {
      this.searchFetch();
    }
  };

  selectArtist = (id) => {
    this.props.history.push("/artistDetails/" + id);
  };

  render() {
    return (
      <>
        <h1 className="text-light mt-5">
          Search result for: "{this.props.searchString}"
        </h1>
        <Row>
          {this.state.searchResult.map((track, index) => (
            <Col xs={6} md={3} lg={2} className="covers mb-2" key={index}>
              {this.state.loading ? (
                <Spinner animation="border" variant="success" />
              ) : (
                <>
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src={track.album.cover_big}
                      alt={track.artist.name}
                    />
                    <div className="playMusic">
                      <i className="far fa-heart fa-2x mx-2 position-relative">
                        <div className="saveLibrary">Save to your Library</div>
                      </i>
                      <i
                        className="far fa-play-circle fa-4x"
                        onClick={() => {
                          this.selectArtist(track.artist.id);
                        }}
                      ></i>
                      <i className="fas fa-ellipsis-h fa-2x mx-2">
                        <div className="more">More</div>
                      </i>
                    </div>
                  </div>
                  <p className="text-center spotify-text-secondary mt-2 mb-0">
                    {track.artist.name}
                    <br />
                  </p>
                  <p className="text-center spotify-text-secondary mt-0 pt-0">
                    {track.title}
                  </p>
                </>
              )}
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Search;
