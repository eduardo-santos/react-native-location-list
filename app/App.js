import React from "react";
import { Provider } from "react-redux";

import Navigator from "./config/routes";

import store from "./config/store";

export default () => (
  <Provider store={store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
);
