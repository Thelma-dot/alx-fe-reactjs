import React from "react";
import SearchBar from "../components/SearchBar";
import FilterOptions from "../components/FilterOptions";
import RecipeList from "../components/RecipeList";

const Home = () => {
  return (
    <div className="p-6">
      <SearchBar />
      <FilterOptions />
      <RecipeList />
    </div>
  );
};

export default Home;
