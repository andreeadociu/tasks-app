import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card";
import { BrowserRouter as Router } from "react-router-dom";

import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Card />
    </Router>,
    div
  );
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <Card
          title="Test Task"
          content="this is a test task"
          status="completed"
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
