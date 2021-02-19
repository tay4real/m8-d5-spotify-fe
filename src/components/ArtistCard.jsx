import React from "react";

import { Col, Spinner } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getArtist: (url, setState) => {
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
          dispatch({
            type: "GET_ARTISTS",
            payload: data,
          });
          setState();
        }
      } catch (error) {
        console.log(error);
      }
    });
  },
});

class ArtistCard extends React.Component {
  state = {
    loading: true,
  };
  fetchArtist = async () => {
    this.setState({ loading: true });

    let url =
      "https://deezerdevs-deezer.p.rapidapi.com/artist/" + this.props.id;
    await this.props.getArtist(url, () => {
      this.setState({ loading: false });
    });
  };

  selectArtist = () => {
    this.props.history.push("/artistDetails/" + this.props.id);
  };

  componentDidMount = () => {
    this.fetchArtist();
  };

  render() {
    const artist = {
      ...this.props.artists.find(
        (artist) => artist.id === parseInt(this.props.id)
      ),
    };
    return (
      <>
        <Col xs={6} md={3} lg={2} className="covers mb-2">
          {this.state.loading ? (
            <Spinner animation="border" variant="success" />
          ) : (
            <>
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src={artist.picture_big}
                  alt={artist.name}
                />
                <div className="playMusic">
                  <i className="far fa-heart fa-2x mx-2 position-relative">
                    <div className="saveLibrary">Save to your Library</div>
                  </i>
                  <i
                    className="far fa-play-circle fa-4x"
                    onClick={() => {
                      this.selectArtist();
                    }}
                  ></i>
                  <i className="fas fa-ellipsis-h fa-2x mx-2">
                    <div className="more">More</div>
                  </i>
                </div>
              </div>
              <p className="text-center spotify-text-secondary mt-2">
                {artist.name}
              </p>
            </>
          )}
        </Col>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistCard);
