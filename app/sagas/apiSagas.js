import { takeEvery, call, put, takeLatest } from "redux-saga/effects";

// ACTIONS

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

// URLS
const BASE_URL = "https://apiiclinicmobile-nadvviantm.now.sh";

const URL_LIST_LOCATIONS = `${BASE_URL}/locations`;

// ACCESS TOKEN
let currentAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjcyLCJuYW1lIjoiQWRtaW5pc3RyYXRvciIsImVtYWlsIjoiYWRtaW5AZGV2ZWxvcG1lbnQuY29tIiwiaWF0IjoxNTQ4Mjk1MzU2LCJleHAiOjE1NDgzODE3NTZ9.e5WUriE_LvMDqIuPesDPGKLoKX4p0C8EiHqCnZWh4So";

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
    headersAuth.set("Authorization", currentAccessToken);
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
      let apiErrors = result.Errors
        ? result.Errors
        : [{ Message: "Ocorreu um erro inesperado. Tente novamente." }];

      if (response.status === 408) {
        apiErrors = [
          {
            Message:
              "O tempo limite da requisição foi atingido. Tente novamente."
          }
        ];
      }

      yield put({ type: actionTypeError, sagaErrors: { Errors: apiErrors } });
    } else {
      if (updateToken) {
        updateAccessToken(response.token);
      }

      yield put({ type: actionTypeSuccess, sagaSuccessResult: result });
    }
  } catch (e) {
    yield put({
      type: actionTypeError,
      sagaErrors: { Errors: e.message }
    });
  }
}

// API FETCH CALLS
const postLocationAdd = location =>
  fetch(URL_LIST_LOCATIONS, createPostAuth(location));

const getLocationList = () => fetch(URL_LIST_LOCATIONS, createGetAuth());

// API EFFECT FUNCTIONS
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

// EXPORTING SAGAS
export const apiSagas = [
  takeEvery(POST_API_LOCATION_ADD, postApiLocationAdd),
  takeEvery(GET_API_LOCATION_LIST, getApiLocationList)
];

export default apiSagas;
