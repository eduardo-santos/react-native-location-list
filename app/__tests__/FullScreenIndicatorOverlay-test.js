import React from "react";

import renderer from "react-test-renderer";
import FullScreenIndicatorOverlay from "../components/ActivityIndicators/FullScreenIndicatorOverlay";

it("renders correctly", () => {
  const tree = renderer.create(<FullScreenIndicatorOverlay />).toJSON();
  expect(tree).toMatchSnapshot();
});
