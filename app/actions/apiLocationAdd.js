export const POST_API_LOCATION_ADD = "POST_API_ADD_LOCATION";
export const POST_API_LOCATION_ADD_SUCCESS = "POST_API_LOCATION_ADD_SUCCESS";
export const POST_API_LOCATION_ADD_ERROR = "POST_API_LOCATION_ADD_ERROR";

export const CLEAN_RESULT = "API_LOCATION_ADD_CLEAN_RESULT";

export const apiPostLocationAdd = location => ({
  type: POST_API_LOCATION_ADD,
  location
});

export const cleanResult = () => ({
  type: CLEAN_RESULT
});
