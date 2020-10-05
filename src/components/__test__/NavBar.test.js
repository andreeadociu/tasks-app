import React from "react";
import ReactDOM from "react-dom";
import NavBar from "../NavBar";
import { BrowserRouter as Router } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const nav = document.createElement("nav");
  ReactDOM.render(
    <Router>
      <NavBar />
    </Router>,
    nav
  );
});

it("renders navbar correctly", () => {
  const { getByTestId } = render(
    <Router>
      <NavBar title="Test" />
    </Router>
  );

  expect(getByTestId("navbar").textContent).toBe("Test");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <NavBar title="Test" />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
