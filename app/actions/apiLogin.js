export const POST_API_LOGIN = "POST_API_LOGIN";
export const POST_API_LOGIN_SUCCESS = "POST_API_LOGIN_SUCCESS";
export const POST_API_LOGIN_ERROR = "POST_API_LOGIN_ERROR";

export const CHANGE_EMAIL = "LOGIN_CHANGE_EMAIL";
export const CHANGE_PASSWORD = "LOGIN_CHANGE_PASSWORD";

export const CLEAN_RESULT = "LOGIN_CLEAN_RESULT";

export const RESET = "LOGIN_RESET_RESULT";

export const apiPostLogin = request => ({
  type: POST_API_LOGIN,
  request
});

export const changeEmail = email => ({
  type: CHANGE_EMAIL,
  email
});

export const changePassword = password => ({
  type: CHANGE_PASSWORD,
  password
});

export const cleanResult = () => ({
  type: CLEAN_RESULT
});
