import {
  POST_API_LOGIN,
  POST_API_LOGIN_SUCCESS,
  POST_API_LOGIN_ERROR,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CLEAN_RESULT,
  RESET
} from "../actions/apiLogin";

const initialState = {
  email: null,
  password: null,
  isApiSubmiting: false,
  apiResultData: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_API_LOGIN:
      return {
        ...state,
        isApiSubmiting: true
      };
    case POST_API_LOGIN_SUCCESS:
      return {
        ...state,
        isApiSubmiting: false,
        apiResultData: action.sagaSuccessResult
      };
    case POST_API_LOGIN_ERROR:
      return {
        ...state,
        isApiSubmiting: false,
        apiResultData: action.sagaErrors
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    case CLEAN_RESULT:
      return {
        ...state,
        isApiSubmiting: false,
        apiResultData: null
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
