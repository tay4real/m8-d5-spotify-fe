export default function (state = {}, action) {
  switch (action.type) {
    case "GET_ARTISTS":
      return [...state, action.payload];
    default:
      return state;
  }
}
