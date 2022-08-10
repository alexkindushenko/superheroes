import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import AppHeader from "./AppHeader";

describe("AppHeader", () => {
  test("renders AppHeader component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AppHeader />
        </BrowserRouter>
      </Provider>
    );
    const appHeader = screen.getByText(/Add superhero/i);
    expect(appHeader).toBeVisible();
  });
});
