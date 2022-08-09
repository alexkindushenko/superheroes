import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import SuperheroPage from "./SuperheroPage";

describe("SuperheroPage", () => {
  test("renders SuperheroPage component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SuperheroPage />
        </BrowserRouter>
      </Provider>
    );
  });
});
