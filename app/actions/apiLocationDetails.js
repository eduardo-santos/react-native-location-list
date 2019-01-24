export const GET_API_LOCATION_DETAILS = "GET_API_LOCATION_DETAILS";
export const GET_API_LOCATION_DETAILS_SUCCESS =
  "GET_API_LOCATION_DETAILS_SUCCESS";
export const GET_API_LOCATION_DETAILS_ERROR = "GET_API_LOCATION_DETAILS_ERROR";

export const CLEAN_RESULT = "API_LOCATION_DETAILS_CLEAN_RESULT";

export const apiGetLocationDetails = idLocation => ({
  type: GET_API_LOCATION_DETAILS,
  idLocation
});

export const cleanResult = () => ({
  type: CLEAN_RESULT
});
