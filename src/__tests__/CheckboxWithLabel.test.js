import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import CheckboxWithLabel from "../CheckboxWithLabel";

afterEach(cleanup);

test("CheckboxWithLabel changes the text after click", () => {
  const { getByLabelText, findByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );
  expect(findByLabelText("Off")).toBeTruthy();

  fireEvent.click(getByLabelText("Off"));

  expect(findByLabelText("On")).toBeTruthy();
});
