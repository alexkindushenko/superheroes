import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import SuperheroItem from "./SuperheroItem";

describe("SuperheroItem", () => {
  test("renders SuperheroItem component", () => {
    const images = ["https://www.elcbrands.com/media/superman1.1.jpg"];
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SuperheroItem images={images} nickname="Superman" />
        </BrowserRouter>
      </Provider>
    );
    const superheroItem = screen.getByText(/Superman/i);
    expect(superheroItem).toBeVisible();
  });
});
