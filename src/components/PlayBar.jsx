import React from "react";
import { Col, Row } from "react-bootstrap";
import playbackBtn from "./assetss/Playback-repeat-01.png";
import queenCover from "./assetss/91Ph+uTyyxL._AC_SL1500_.jpg";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

function PlayBar(props) {
  const currentSong = props.album.currentSong;
  return (
    <>
      <div
        className="spotify-bg-playbar d-flex d-md-none justify-content-around"
        style={{
          zIndex: 2,
          width: "100%",
          height: "10vh",
          backgroundColor: "var(--playbar_bg)",
          position: "fixed",
          bottom: 0,
        }}
      >
        <Row
          style={{
            height: "10vh",
            width: "100vw",
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        >
          <Col xs={3}>
            <img
              src={
                currentSong.albumCover !== null
                  ? currentSong.albumCover
                  : queenCover
              }
              style={{ height: "12vh", bottom: 0 }}
              alt="albumCover"
            />
          </Col>

          <Col>
            <div
              style={{
                color: "white",
                width: "30vw",
                position: "absolute",
                top: "1vh",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: "15pt",
              }}
            >
              {currentSong.songName !== null
                ? currentSong.songName
                : "Bohemian Rhapsody"}
            </div>
            <div
              className="d-flex"
              style={{
                color: "var(--playbar_light)",
                position: "absolute",
                top: "6vh",
                fontSize: "15pt",
              }}
            >
              {currentSong.artistName !== null
                ? currentSong.artistName
                : "Queen"}
            </div>
          </Col>
        </Row>
        <Col
          style={{
            position: "absolute",
            left: "50vw",
            bottom: "1vh",
            height: "12vh",
          }}
        >
          <svg
            width="2em"
            height="3em"
            viewBox="0 0 16 16"
            className="bi bi-heart d-block"
            style={{
              position: "absolute",
              top: "31px",
              left: "50px",
              bottom: "2vh",
              padding: "1vw",
            }}
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
            />
          </svg>
          <svg
            width="2em"
            height="3em"
            viewBox="0 0 16 16"
            className="bi bi-pip"
            fill="white"
            style={{
              position: "absolute",
              top: "31px",
              left: "100px",
              padding: "1vw",
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"
            />
            <path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z" />
          </svg>

          <audio
            id="audio"
            src="./assets/Queen_Bohemian_Rhapsody_with_lyrics_.mp3"
          ></audio>
          <svg
            width="2.5em"
            height="3em"
            viewBox="0 0 16 16"
            className="bi bi-play-fill"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: " absolute", top: "31px", left: "150px" }}
            id="playMob"
          >
            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>

          <svg
            width="2.5em"
            height="2.5em"
            viewBox="0 0 16 16"
            className="bi bi-pause-fill d-none"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: "31px", left: "150px" }}
            id="pauseMob"
          >
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
          </svg>
        </Col>
      </div>
      <div
        className="spotify-bg-playbar spotify-pb-text-light d-flex justify-content-around"
        style={{
          position: "fixed",
          bottom: 0,
          width: "100vw",
          height: "100px",
          padding: "0.5vh",
        }}
      >
        <div
          className="d-none d-md-flex col-md-2"
          style={{ position: "absolute", left: "15px", top: "15px" }}
        >
          <Row style={{ width: "25vw" }}>
            <Col>
              <img
                src={
                  currentSong.albumCover !== null
                    ? currentSong.albumCover
                    : queenCover
                }
                style={{ position: "absolute", left: "10px", width: "8.5vh" }}
                alt="ss"
              />
              <div
                style={{
                  width: "200px",
                  position: "absolute",
                  left: "120px",
                  top: "1vh",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {currentSong.songName !== null
                  ? currentSong.songName
                  : "Bohemian Rhapsody"}
              </div>
              <div
                className="d-flex"
                style={{
                  position: "absolute",
                  left: "120px",
                  top: "3.5vh",
                  fontSize: " 10pt",
                }}
              >
                {currentSong.artistName !== null
                  ? currentSong.artistName
                  : "Queen"}
              </div>
            </Col>
          </Row>
        </div>

        {/* <!--------------------------------------------CONTROLS-----------------------------------------------> */}

        <Col
          md={2}
          className="d-none d-md-flex justify-content-around align-items-center d-none d-md-block "
          style={{ width: "200px", position: "absolute", top: "15%" }}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-shuffle"
            fill="var(--playbar_light)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
            />
            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
          </svg>
          <svg
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            className="bi bi-skip-start-fill"
            fill="var(--playbar_light)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"
            />
            <path d="M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 0 0 0 1.393z" />
          </svg>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "2em",
              height: "2em",
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "50%",
              borderColor: "var(--playbar_light)",
            }}
          >
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              className="bi bi-play-fill"
              fill="var(--playbar_light)"
              xmlns="http://www.w3.org/2000/svg"
              id="playPC"
            >
              <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              className="bi bi-pause-fill d-none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              id="pausePC"
            >
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
            </svg>
          </div>

          <svg
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            className="bi bi-skip-end-fill"
            fill="var(--playbar_light)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
            />
            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
          <img
            className="img-fluid"
            src={playbackBtn}
            style={{ width: "1em" }}
            alt="sss"
          />
        </Col>

        {/* <!----------------------------------------PROGRESS BAR--------------------------------------------------> */}
        <div className="d-none d-md-flex justify-content-center">
          <div style={{ position: "absolute", top: "70%", left: "25%" }}>
            <div
              className="d-flex"
              style={{
                position: "absolute",
                top: "-5px",
                left: "-40px",
                fontSize: "8pt",
              }}
            >
              0:00
            </div>
            <div
              className="progress spotify-bg-playbar-dark"
              style={{ height: "3px", width: "50vw" }}
            >
              <div
                className="progress-bar spotify-bg-playbar-light"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "50%" }}
              ></div>
            </div>
            <div
              className="d-flex"
              style={{
                position: "absolute",
                top: "-5px",
                right: "-40px",
                fontSize: "8pt",
              }}
            >
              0:00
            </div>
          </div>
        </div>
        <div
          className="d-none d-md-flex"
          style={{ position: "absolute", right: "20px", top: "45%" }}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-volume-up-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", left: "-25px", top: "-5px" }}
          >
            <path
              fillRule="evenodd"
              d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04L4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04z"
            />
            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
          </svg>
          <div
            className="progress spotify-bg-playbar-dark"
            style={{ height: "3px", width: "90px" }}
          >
            <div
              className="progress-bar spotify-bg-playbar-light"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(PlayBar);
