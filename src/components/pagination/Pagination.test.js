import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import Pagination from "./Pagination";

describe("Pagination", () => {
  test("renders Pagination component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination />
        </BrowserRouter>
      </Provider>
    );
  });
});
