import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import SuperheroItem from "./SuperheroItem";

describe("SuperheroItem", () => {
  test("renders SuperheroItem component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SuperheroItem />
        </BrowserRouter>
      </Provider>
    );
  });
});
