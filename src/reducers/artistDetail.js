export default function (state = {}, action) {
  switch (action.type) {
    case "GET_ARTIST":
      return {
        ...state,
        artist: { ...action.payload },
      };
    case "GET_ARTIST_ALBUMS":
      return {
        ...state,
        albums: [...action.payload],
      };
    case "GET_ARTIST_TRACKS":
      return {
        ...state,
        tracks: [...action.payload],
      };
    default:
      return state;
  }
}
