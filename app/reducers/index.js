import { combineReducers } from "redux";

import apiLocationAdd from "./apiLocationAdd";
import apiLocationList from "./apiLocationList";
import apiLocationDetails from "./apiLocationDetails";

export default combineReducers({
  apiLocationAdd,
  apiLocationList,
  apiLocationDetails
});
