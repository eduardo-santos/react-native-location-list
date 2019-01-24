import {
  GET_API_LOCATION_DETAILS,
  GET_API_LOCATION_DETAILS_SUCCESS,
  GET_API_LOCATION_DETAILS_ERROR,
  CLEAN_RESULT
} from "../actions/apiLocationDetails";

const initialState = {
  isApiSubmiting: false,
  apiResultData: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_LOCATION_DETAILS:
      return {
        ...state,
        isApiSubmiting: true
      };
    case GET_API_LOCATION_DETAILS_SUCCESS:
      return {
        ...state,
        isApiSubmiting: false,
        apiResultData: action.sagaSuccessResult
      };
    case GET_API_LOCATION_DETAILS_ERROR:
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
