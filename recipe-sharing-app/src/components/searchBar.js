// components/SearchBar.js
import React from 'react';
import useRecipeStore from '../store/recipeStore';

const SearchBar = () => {
  const { setSearchTerm, filterRecipes } = useRecipeStore(state => ({
    setSearchTerm: state.setSearchTerm,
    filterRecipes: state.filterRecipes
  }));

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes by name, ingredient, or time..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
