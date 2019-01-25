import {
  POST_API_REGISTER,
  POST_API_REGISTER_SUCCESS,
  POST_API_REGISTER_ERROR,
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CLEAN_RESULT
} from "../actions/apiRegister";

const initialState = {
  name: null,
  email: null,
  password: null,
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
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
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
        ...initialState
      };
    default:
      return state;
  }
};

export default reducer;
