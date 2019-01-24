import {
  POST_API_LOGIN,
  POST_API_LOGIN_SUCCESS,
  POST_API_LOGIN_ERROR,
  CLEAN_RESULT
} from "../actions/apiLogin";

const initialState = {
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
    case CLEAN_RESULT:
      return {
        ...state,
        apiResultData: null
      };
    default:
      return state;
  }
};

export default reducer;
