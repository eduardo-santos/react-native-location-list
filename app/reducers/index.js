import { combineReducers } from "redux";

import apiLocationAdd from "./apiLocationAdd";
import apiLocationList from "./apiLocationList";

export default combineReducers({
  apiLocationAdd,
  apiLocationList
});
