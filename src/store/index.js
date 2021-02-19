import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import artistsReducer from "../reducers/artists";
import albumsReducer from "../reducers/albums";
import likesReducer from "../reducers/likes";
import usersReducer from "../reducers/users";
import artistDetailReducer from "../reducers/artistDetail";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  likes: [],
  artists: [],
  artistDetail: {
    artist: {},
    albums: [],
    tracks: [],
  },
  album: {
    currentSong: {
      albumCover: null,
      artistName: null,
      songName: null,
    },
    albums: {},
    tracks: [],
  },

  user: {
    username: "",
    password: "",
    email: "",
    loggedin: false,
  },
};

const allReducers = combineReducers({
  likes: likesReducer,
  artists: artistsReducer,
  album: albumsReducer,
  user: usersReducer,
  artistDetail: artistDetailReducer,
});

export default function configureStore() {
  return createStore(
    allReducers,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
