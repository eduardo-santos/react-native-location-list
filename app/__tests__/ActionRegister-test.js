import {
  POST_API_REGISTER_SUCCESS,
  POST_API_REGISTER_ERROR,
  POST_API_REGISTER,
  cleanResult,
  apiPostRegister
} from "../actions/apiRegister";
import reducer from "../reducers/apiRegister";

describe("actions register", () => {
  const name = "Eduardo Santos";
  const email = "eduardo.hensantos@gmail.com";
  const password = "admin123";

  const request = {
    name,
    email,
    password
  };

  it("should clean register state", () => {
    const currentState = {
      name,
      email,
      password,
      isApiSubmiting: false,
      apiResultData: { sucesso: "Usuário cadastrado com sucesso" }
    };

    const expectedAction = {
      name: null,
      email: null,
      password: null,
      isApiSubmiting: false,
      apiResultData: null
    };

    expect(reducer(currentState, cleanResult())).toEqual(expectedAction);
  });

  it("should create an action to register user", () => {
    const expectedAction = {
      type: POST_API_REGISTER,
      request
    };

    expect(apiPostRegister(request)).toEqual(expectedAction);
  });

  it("should start register API call", () => {
    const currentState = {
      name,
      email,
      password,
      isApiSubmiting: false,
      apiResultData: null
    };

    const expectedAction = {
      ...currentState,
      isApiSubmiting: true,
      apiResultData: null
    };

    expect(reducer(currentState, apiPostRegister(request))).toEqual(
      expectedAction
    );
  });

  it("should return register API success", () => {
    const sagaSuccessResult = {
      auth: true
    };

    const currentState = {
      name,
      email,
      password,
      isApiSubmiting: true,
      apiResultData: null
    };

    const expectedAction = {
      ...currentState,
      isApiSubmiting: false,
      apiResultData: sagaSuccessResult
    };

    expect(
      reducer(currentState, {
        type: POST_API_REGISTER_SUCCESS,
        sagaSuccessResult
      })
    ).toEqual(expectedAction);
  });

  it("should return register API error", () => {
    const sagaErrors = {
      error: [
        {
          location: "body",
          param: "name",
          value: 0,
          msg: "Invalid value"
        }
      ]
    };

    const currentState = {
      name,
      email,
      password,
      isApiSubmiting: true,
      apiResultData: null
    };

    const expectedAction = {
      ...currentState,
      isApiSubmiting: false,
      apiResultData: sagaErrors
    };

    expect(
      reducer(currentState, { type: POST_API_REGISTER_ERROR, sagaErrors })
    ).toEqual(expectedAction);
  });
});
