import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import EditSuperhero from "../edit-superhero";
import AppHeader from "../app-header";
import SuperheroPage from "../../pages/SuperheroPage";
import SuperheroListPege from "../../pages/SuperheroListPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader />
        <Routes>
          <Route path="/" element={<SuperheroListPege />} />
          <Route path="/superheroes" element={<SuperheroListPege />} />
          <Route path="/superheroes/:id" element={<SuperheroPage />} />
          <Route path="/add_superhero" element={<EditSuperhero />} />
          <Route path="*" element={<h2 class="display-1 text-center">404 Page not found.</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
