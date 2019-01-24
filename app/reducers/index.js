import { combineReducers } from "redux";

import apiLocationList from "./apiLocationList";
import apiLocationDetails from "./apiLocationDetails";
import apiLocationAdd from "./apiLocationAdd";
import apiLogin from "./apiLogin";
import apiRegister from "./apiRegister";

export default combineReducers({
  apiLocationList,
  apiLocationDetails,
  apiLocationAdd,
  apiLogin,
  apiRegister
});
