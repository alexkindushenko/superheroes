import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import EditSuperhero from "./EditSuperhero";

describe("EditSuperhero", () => {
  test("renders EditSuperhero component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EditSuperhero />
        </BrowserRouter>
      </Provider>
    );
  });
});
