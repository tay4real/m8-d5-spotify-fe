export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_LIKE":
      return [...state, action.payload];

    case "REMOVE_LIKE":
      return [...state.filter((song) => song.id !== action.payload.id)];

    default:
      return state;
  }
}
