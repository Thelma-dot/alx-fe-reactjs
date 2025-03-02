import React from 'react';
import useRecipeStore from '../store/recipeStore';
import useRecipeStore from './useRecipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
};

export default SearchBar;
