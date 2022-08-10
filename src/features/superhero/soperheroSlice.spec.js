import superheroSlice, { clearSuperhero } from "./superheroSlice";

describe("superheroSlice", () => {
  const initialState = {
    superhero: null,
    superheroId: "",
    status: "idle",
    isUpdate: false,
    isAdd: false,
  };

  test("should handle initial state", () => {
    expect(superheroSlice(undefined, { type: "unknown" })).toEqual(initialState);
  });

  test("shold clear superhero actin 'clearSuperhero'", () => {
    const actual = superheroSlice(initialState, clearSuperhero());
    expect(actual.superhero).toEqual(null);
  });
});
