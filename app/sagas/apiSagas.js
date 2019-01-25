import { takeEvery, call, put, takeLatest } from "redux-saga/effects";

// ACTIONS
import {
  POST_API_LOGIN,
  POST_API_LOGIN_SUCCESS,
  POST_API_LOGIN_ERROR
} from "../actions/apiLogin";

import {
  POST_API_REGISTER,
  POST_API_REGISTER_SUCCESS,
  POST_API_REGISTER_ERROR
} from "../actions/apiRegister";

import {
  POST_API_LOCATION_ADD,
  POST_API_LOCATION_ADD_SUCCESS,
  POST_API_LOCATION_ADD_ERROR
} from "../actions/apiLocationAdd";

import {
  GET_API_LOCATION_LIST,
  GET_API_LOCATION_LIST_SUCCESS,
  GET_API_LOCATION_LIST_ERROR
} from "../actions/apiLocationList";

import {
  GET_API_LOCATION_DETAILS,
  GET_API_LOCATION_DETAILS_SUCCESS,
  GET_API_LOCATION_DETAILS_ERROR
} from "../actions/apiLocationDetails";

// URLS
const BASE_URL = "https://apiiclinicmobile-nadvviantm.now.sh";

const URL_LIST_LOCATIONS = `${BASE_URL}/locations`;
const URL_LOGIN = `${BASE_URL}/auth/login`;
const URL_REGISTER = `${BASE_URL}/auth/register`;

// ACCESS TOKEN
let currentAccessToken = null;

// HEADERS
const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

const headersAuth = headers;
headers.append("x-access-token", currentAccessToken);

// HTTP METHODS
const createGetAuth = () => ({ method: "GET", headers: headersAuth });

const createPost = request => ({
  method: "POST",
  headers,
  body: JSON.stringify(request)
});

const createPostAuth = request => ({
  method: "POST",
  headers: headersAuth,
  body: JSON.stringify(request)
});

// TOKEN UPDATE
function updateAccessToken(accessToken) {
  if (accessToken) {
    currentAccessToken = accessToken;
    headersAuth.set("x-access-token", currentAccessToken);
  }
}

// GENERAL RESPONSE HANDLER
function* handleCallResponse(
  response,
  actionTypeSuccess,
  actionTypeError,
  updateToken = false
) {
  try {
    const result = yield response.json();

    if (response.status !== 200) {
      let apiError = result.error
        ? result.error
        : "Ocorreu um erro inesperado. Tente novamente.";

      if (response.status === 408) {
        apiError =
          "O tempo limite da requisição foi atingido. Tente novamente.";
      }

      yield put({
        type: actionTypeError,
        sagaErrors: { error: apiError }
      });
    } else {
      if (updateToken) {
        updateAccessToken(result.token);
      }

      yield put({ type: actionTypeSuccess, sagaSuccessResult: result });
    }
  } catch (e) {
    yield put({
      type: actionTypeError,
      sagaErrors: { error: e.message }
    });
  }
}

// API FETCH CALLS
const postLogin = request => fetch(URL_LOGIN, createPost(request));

const postRegister = request => fetch(URL_REGISTER, createPost(request));

const postLocationAdd = location =>
  fetch(URL_LIST_LOCATIONS, createPostAuth(location));

const getLocationList = () => fetch(URL_LIST_LOCATIONS, createGetAuth());

const getLocationDetails = idLocation =>
  fetch(`${URL_LIST_LOCATIONS}/${idLocation}`, createGetAuth());

// API EFFECT FUNCTIONS
function* postApiLogin(action) {
  const response = yield call(postLogin, action.request);
  yield handleCallResponse(
    response,
    POST_API_LOGIN_SUCCESS,
    POST_API_LOGIN_ERROR,
    true
  );
}

function* postApiRegister(action) {
  const response = yield call(postRegister, action.request);
  yield handleCallResponse(
    response,
    POST_API_REGISTER_SUCCESS,
    POST_API_REGISTER_ERROR,
    true
  );
}

function* postApiLocationAdd(action) {
  const response = yield call(postLocationAdd, action.location);
  yield handleCallResponse(
    response,
    POST_API_LOCATION_ADD_SUCCESS,
    POST_API_LOCATION_ADD_ERROR
  );
}

function* getApiLocationList() {
  const response = yield call(getLocationList);
  yield handleCallResponse(
    response,
    GET_API_LOCATION_LIST_SUCCESS,
    GET_API_LOCATION_LIST_ERROR
  );
}

function* getApiLocationDetails(action) {
  const response = yield call(getLocationDetails, action.idLocation);
  yield handleCallResponse(
    response,
    GET_API_LOCATION_DETAILS_SUCCESS,
    GET_API_LOCATION_DETAILS_ERROR
  );
}

// EXPORTING SAGAS
export const apiSagas = [
  takeLatest(POST_API_LOGIN, postApiLogin),
  takeLatest(POST_API_REGISTER, postApiRegister),
  takeEvery(POST_API_LOCATION_ADD, postApiLocationAdd),
  takeEvery(GET_API_LOCATION_LIST, getApiLocationList),
  takeLatest(GET_API_LOCATION_DETAILS, getApiLocationDetails)
];

export default apiSagas;
