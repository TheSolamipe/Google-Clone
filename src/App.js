import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app">
      <h1>so many things i have been through</h1>
      {/* Home (the one with the search on) */}
      <HomePage />
      {/* Search page (The result page) */}
      <SearchPage />
    </div>
  );
}

export default App;
