import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import EditSuperheroPage from "./EditSuperheroPage";

describe("EditSuperheroPage", () => {
  test("renders EditSuperheroPage component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EditSuperheroPage />
        </BrowserRouter>
      </Provider>
    );
  });
});
