import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { store } from "../../app/store";
import Superhero from "./Superhero";

const superheroResponse = rest.patch("http://localhost:8888/superheroes/:id", (req, res, ctx) => {
  return res(
    ctx.json({
      superhero: {
        _id: "62f217fa15145884a965da2b",
        nickname: "Superman@",
        real_name: "Clark Kent",
        origin_description: "he was born Kal-El on the planet Krypton   ",
        superpowers: "solar energy absorption and healing factor, solar flare and heat vision",
        catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman",
        images: ["https://www.elcbrands.com/media/superman1.1.jpg"],
      },
    })
  );
});

const server = new setupServer(superheroResponse);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Superhero", () => {
  test("renders Superhero component", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Superhero />
        </BrowserRouter>
      </Provider>
    );
    const superheroNickname = await screen.findByText(/Superman@/i);
    expect(superheroNickname).toBeVisible();

    const superheroName = await screen.findByText(/Clark Kent/i);
    expect(superheroName).toBeVisible();

    const superheroDescripyion = await screen.findByText(/he was born Kal-El/i);
    expect(superheroDescripyion).toBeVisible();

    const superheroStarpowers = await screen.findByText(/solar energy absorption/i);
    expect(superheroStarpowers).toBeVisible();

    const superheroCatchFrase = await screen.findByText(/Look, up in the sky/i);
    expect(superheroCatchFrase).toBeVisible();

    const superheroImage = await screen.findByAltText(/Superman/i);
    expect(superheroImage).toBeVisible();
  });
});
