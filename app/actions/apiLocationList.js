export const GET_API_LOCATION_LIST = "GET_API_LOCATION_LIST";
export const GET_API_LOCATION_LIST_SUCCESS = "GET_API_LOCATION_LIST_SUCCESS";
export const GET_API_LOCATION_LIST_ERROR = "GET_API_LOCATION_LIST_ERROR";

export const CLEAN_RESULT = "API_LOCATION_LIST_CLEAN_RESULT";

export const apiGetLocationList = () => ({
  type: GET_API_LOCATION_LIST
});

export const cleanResult = () => ({
  type: CLEAN_RESULT
});
