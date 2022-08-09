import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import SuperheroListPage from "./SuperheroListPage";

describe("SuperheroListPage", () => {
  test("renders SuperheroListPage component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SuperheroListPage />
        </BrowserRouter>
      </Provider>
    );
  });
});
