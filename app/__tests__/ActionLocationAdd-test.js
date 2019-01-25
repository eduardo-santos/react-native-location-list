import {
  POST_API_LOCATION_ADD,
  POST_API_LOCATION_ADD_SUCCESS,
  POST_API_LOCATION_ADD_ERROR,
  cleanResult,
  apiPostLocationAdd
} from "../actions/apiLocationAdd";
import reducer from "../reducers/apiLocationAdd";

describe("actions locationAdd", () => {
  const request = {
    name: "Nome da Localização",
    address: "Endereço da Localização",
    phone: "(11) 12346-5432",
    type: "Tipo da Localização",
    lat: "10.2345",
    lng: "-10.2345",
    description: "Descrição da Localização"
  };

  it("should clean locationAdd state", () => {
    const currentState = {
      isApiSubmiting: false,
      apiResultData: {
        id: 2331,
        createdBy: 9769,
        name: "Nome da Localização",
        address: "Endereço da Localização",
        phone: "(11) 12346-5432",
        type: "Tipo da Localização",
        lat: "10.2345",
        lng: "-10.2345",
        description: "Descrição da Localização"
      }
    };

    const expectedAction = {
      isApiSubmiting: false,
      apiResultData: null
    };

    expect(reducer(currentState, cleanResult())).toEqual(expectedAction);
  });

  it("should create an action to add a location", () => {
    const expectedAction = {
      type: POST_API_LOCATION_ADD,
      location: request
    };

    expect(apiPostLocationAdd(request)).toEqual(expectedAction);
  });

  it("should start locationAdd API call", () => {
    const currentState = {
      isApiSubmiting: false,
      apiResultData: null
    };

    const expectedAction = {
      ...currentState,
      isApiSubmiting: true,
      apiResultData: null
    };

    expect(reducer(currentState, apiPostLocationAdd(request))).toEqual(
      expectedAction
    );
  });

  it("should return locationAdd API success", () => {
    const sagaSuccessResult = {
      id: 2331,
      createdBy: 9769,
      name: "Nome da Localização",
      address: "Endereço da Localização",
      phone: "(11) 12346-5432",
      type: "Tipo da Localização",
      lat: "10.2345",
      lng: "-10.2345",
      description: "Descrição da Localização"
    };

    const currentState = {
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
        type: POST_API_LOCATION_ADD_SUCCESS,
        sagaSuccessResult
      })
    ).toEqual(expectedAction);
  });

  it("should return locationAdd API error", () => {
    const sagaErrors = {
      error: [
        {
          location: "body",
          param: "name",
          value: null,
          msg: "`Name` necessita ser do tipo string"
        }
      ]
    };

    const currentState = {
      isApiSubmiting: true,
      apiResultData: null
    };

    const expectedAction = {
      ...currentState,
      isApiSubmiting: false,
      apiResultData: sagaErrors
    };

    expect(
      reducer(currentState, { type: POST_API_LOCATION_ADD_ERROR, sagaErrors })
    ).toEqual(expectedAction);
  });
});
