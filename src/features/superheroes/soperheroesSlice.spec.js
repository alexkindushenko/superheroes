import superheroesSlice from "./superheroesSlice";

describe("superheroSlice", () => {
  const initialState = {
    superheroes: [],
    loading: true,
    error: false,
    currentPage: 1,
    totalCount: 0,
  };
  test("should handle initial state", () => {
    expect(superheroesSlice(undefined, { type: "unknown" })).toEqual(initialState);
  });
});
