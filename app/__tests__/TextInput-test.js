import React from "react";

import renderer from "react-test-renderer";
import TextInput from "../components/TextInput/TextInput";

it("renders correctly", () => {
  const tree = renderer.create(<TextInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
