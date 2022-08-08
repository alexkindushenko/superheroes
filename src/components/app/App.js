import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import AppHeader from "../app-header";
import SuperheroPage from "../../pages/SuperheroPage";
import SuperheroListPege from "../../pages/SuperheroListPage";
import EditSuperheroPage from "../../pages/EditSuperheroPage";

import "./App.css";
import AddSuperheroPage from "../../pages/AddSuperheroPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Navigate to="/superheroes" />} />
          <Route path="/superheroes" element={<SuperheroListPege />} />
          <Route path="/superheroes/:id" element={<SuperheroPage />} />
          <Route path="/superheroes/:id/edit" element={<EditSuperheroPage />} />
          <Route path="/superheroes/add_superhero" element={<AddSuperheroPage />} />
          <Route
            path="*"
            element={<h2 className="display-1 text-center">404 Page not found.</h2>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
