import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import AddSuperheroPage from "./AddSuperheroPage";

describe("AddSuperheroPage", () => {
  test("renders AddSuperheroPage component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddSuperheroPage />
        </BrowserRouter>
      </Provider>
    );
  });
});
