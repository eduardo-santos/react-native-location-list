export const POST_API_REGISTER = "POST_API_REGISTER";
export const POST_API_REGISTER_SUCCESS = "POST_API_REGISTER_SUCCESS";
export const POST_API_REGISTER_ERROR = "POST_API_REGISTER_ERROR";

export const CLEAN_RESULT = "API_REGISTER_CLEAN_RESULT";

export const apiPostRegister = request => ({
  type: POST_API_REGISTER,
  request
});

export const cleanResult = () => ({
  type: CLEAN_RESULT
});
