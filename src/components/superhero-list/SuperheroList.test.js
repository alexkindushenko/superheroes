import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import SuperheroList from "./SuperheroList";

describe("SuperheroList", () => {
  test("renders SuperheroList component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SuperheroList />
        </BrowserRouter>
      </Provider>
    );
  });
});
