import {
  GET_API_LOCATION_LIST,
  GET_API_LOCATION_LIST_SUCCESS,
  GET_API_LOCATION_LIST_ERROR,
  cleanResult,
  apiGetLocationList
} from "../actions/apiLocationList";
import reducer from "../reducers/apiLocationList";

describe("actions locationList", () => {
  const apiResultData = {
    id: 1349,
    createdBy: 9769,
    name: "Nome da Localização",
    address: "Endereço da Localização",
    phone: "(11) 12346-5432",
    type: "Tipo da Localização",
    lat: "10.2345",
    lng: "-10.2345",
    description: "Descrição da Localização"
  };

  it("should clean locationList state", () => {
    const currentState = {
      isApiSubmiting: false,
      apiResultData
    };

    const expectedAction = {
      ...currentState,
      apiResultData: null
    };

    expect(reducer(currentState, cleanResult())).toEqual(expectedAction);
  });

  it("should create an action to get locationList", () => {
    const expectedAction = {
      type: GET_API_LOCATION_LIST
    };

    expect(apiGetLocationList()).toEqual(expectedAction);
  });

  it("should start locationList API call", () => {
    const currentState = {
      isApiSubmiting: false,
      apiResultData: null
    };

    const expectedAction = {
      ...currentState,
      isApiSubmiting: true
    };

    expect(reducer(currentState, apiGetLocationList())).toEqual(expectedAction);
  });

  it("should return locationList API success", () => {
    const sagaSuccessResult = apiResultData;

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
        type: GET_API_LOCATION_LIST_SUCCESS,
        sagaSuccessResult
      })
    ).toEqual(expectedAction);
  });

  it("should return locationList API error", () => {
    const sagaErrors = {
      auth: false,
      error: "`Token` não informado"
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
      reducer(currentState, { type: GET_API_LOCATION_LIST_ERROR, sagaErrors })
    ).toEqual(expectedAction);
  });
});
