export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_ALBUM":
      return {
        ...state,
        albums: { ...action.payload },
      };
    case "ADD_TRACKS":
      return {
        ...state,
        tracks: [...action.payload],
      };
    case "GET_SONG":
      return {
        ...state,
        currentSong: { ...action.payload },
      };

    default:
      return state;
  }
}
