import {
  GET_API_LOCATION_DETAILS,
  GET_API_LOCATION_DETAILS_SUCCESS,
  GET_API_LOCATION_DETAILS_ERROR,
  cleanResult,
  apiGetLocationDetails
} from "../actions/apiLocationDetails";
import reducer from "../reducers/apiLocationDetails";

describe("actions locationDetails", () => {
  const idLocation = 1349;

  const apiResultData = {
    id: idLocation,
    createdBy: 9769,
    name: "Nome da Localização",
    address: "Endereço da Localização",
    phone: "(11) 12346-5432",
    type: "Tipo da Localização",
    lat: "10.2345",
    lng: "-10.2345",
    description: "Descrição da Localização"
  };

  it("should clean locationDetails state", () => {
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

  it("should create an action to get locationDetails", () => {
    const expectedAction = {
      type: GET_API_LOCATION_DETAILS,
      idLocation
    };

    expect(apiGetLocationDetails(idLocation)).toEqual(expectedAction);
  });

  it("should start locationDetails API call", () => {
    const currentState = {
      isApiSubmiting: false,
      apiResultData: null
    };

    const expectedAction = {
      ...currentState,
      isApiSubmiting: true
    };

    expect(reducer(currentState, apiGetLocationDetails(idLocation))).toEqual(
      expectedAction
    );
  });

  it("should return locationDetails API success", () => {
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
        type: GET_API_LOCATION_DETAILS_SUCCESS,
        sagaSuccessResult
      })
    ).toEqual(expectedAction);
  });

  it("should return locationDetails API error", () => {
    const sagaErrors = {
      error: "Localização não foi econtrada."
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
      reducer(currentState, {
        type: GET_API_LOCATION_DETAILS_ERROR,
        sagaErrors
      })
    ).toEqual(expectedAction);
  });
});
