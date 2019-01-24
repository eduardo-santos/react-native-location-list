import {
  GET_API_LOCATION_LIST,
  GET_API_LOCATION_LIST_SUCCESS,
  GET_API_LOCATION_LIST_ERROR,
  CLEAN_RESULT
} from "../actions/apiLocationList";

const initialState = {
  isApiSubmiting: false,
  apiResultData: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_LOCATION_LIST:
      return {
        ...state,
        isApiSubmiting: true
      };
    case GET_API_LOCATION_LIST_SUCCESS:
      return {
        ...state,
        isApiSubmiting: false,
        apiResultData: action.sagaSuccessResult
      };
    case GET_API_LOCATION_LIST_ERROR:
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
