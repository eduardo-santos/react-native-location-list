import {
  POST_API_REGISTER,
  POST_API_REGISTER_SUCCESS,
  POST_API_REGISTER_ERROR,
  CLEAN_RESULT
} from "../actions/apiRegister";

const initialState = {
  isApiSubmiting: false,
  apiResultData: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_API_REGISTER:
      return {
        ...state,
        isApiSubmiting: true
      };
    case POST_API_REGISTER_SUCCESS:
      return {
        ...state,
        isApiSubmiting: false,
        apiResultData: action.sagaSuccessResult
      };
    case POST_API_REGISTER_ERROR:
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
