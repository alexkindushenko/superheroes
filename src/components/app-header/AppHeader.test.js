import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import AppHeader from "./AppHeader";

describe("App", () => {
  test("renders AppHeader component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AppHeader />
        </BrowserRouter>
      </Provider>
    );
  });
});
