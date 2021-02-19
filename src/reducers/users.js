export default function (state = {}, action) {
  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        username: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "SET_LOGIN":
      return {
        ...state,
        loggedin: action.payload,
      };

    case "SET_LOGOUT":
      return {
        ...state,
        loggedin: action.payload,
      };

    default:
      return state;
  }
}
