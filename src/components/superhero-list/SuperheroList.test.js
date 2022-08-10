import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { rest } from "msw";
import { setupServer } from "msw/node";

import { store } from "../../app/store";
import SuperheroList from "./SuperheroList";

const superheroesResponse = rest.patch("http://localhost:8888/superheroes", (req, res, ctx) => {
  return res(
    ctx.json({
      superheroes: [
        {
          _id: "62f217fa15145884a965da2b",
          nickname: "Superman@",
          real_name: "Clark Kent",
          origin_description: "he was born Kal-El on the planet Krypton   ",
          superpowers: "solar energy absorption and healing factor, solar flare and heat vision",
          catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman",
          images: ["https://www.elcbrands.com/media/superman1.1.jpg"],
        },
      ],
      totalCount: 20,
    })
  );
});

const server = new setupServer(superheroesResponse);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("SuperheroList", () => {
  test("renders SuperheroList component", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SuperheroList />
        </BrowserRouter>
      </Provider>
    );
    const superheroItem = await screen.findByText(/Superman/i);
    expect(superheroItem).toBeVisible();
  });
});
