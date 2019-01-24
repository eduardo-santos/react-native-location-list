import {
  POST_API_LOCATION_ADD,
  POST_API_LOCATION_ADD_SUCCESS,
  POST_API_LOCATION_ADD_ERROR,
  CLEAN_RESULT
} from "../actions/apiLocationAdd";

const initialState = {
  isApiSubmiting: false,
  apiResultData: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_API_LOCATION_ADD:
      return {
        ...state,
        isApiSubmiting: true
      };
    case POST_API_LOCATION_ADD_SUCCESS:
      return {
        ...state,
        isApiSubmiting: false,
        apiResultData: action.sagaSuccessResult
      };
    case POST_API_LOCATION_ADD_ERROR:
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
