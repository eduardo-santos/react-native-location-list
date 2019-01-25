export const POST_API_REGISTER = "POST_API_REGISTER";
export const POST_API_REGISTER_SUCCESS = "POST_API_REGISTER_SUCCESS";
export const POST_API_REGISTER_ERROR = "POST_API_REGISTER_ERROR";

export const CHANGE_NAME = "REGISTER_CHANGE_NAME";
export const CHANGE_EMAIL = "REGISTER_CHANGE_EMAIL";
export const CHANGE_PASSWORD = "REGISTER_CHANGE_PASSWORD";

export const CLEAN_RESULT = "API_REGISTER_CLEAN_RESULT";

export const apiPostRegister = request => ({
  type: POST_API_REGISTER,
  request
});

export const changeName = name => ({
  type: CHANGE_NAME,
  name
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
