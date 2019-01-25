import React from "react";

import renderer from "react-test-renderer";
import LocationListItem from "../components/ListItem/LocationListItem";

it("renders correctly", () => {
  const tree = renderer.create(<LocationListItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
