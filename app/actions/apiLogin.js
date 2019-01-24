export const POST_API_LOGIN = "POST_API_LOGIN";
export const POST_API_LOGIN_SUCCESS = "POST_API_LOGIN_SUCCESS";
export const POST_API_LOGIN_ERROR = "POST_API_LOGIN_ERROR";

export const CLEAN_RESULT = "API_LOGIN_CLEAN_RESULT";

export const apiPostLogin = request => ({
  type: POST_API_LOGIN,
  request
});

export const cleanResult = () => ({
  type: CLEAN_RESULT
});
