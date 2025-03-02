import React from 'react';
import useRecipeStore from '../store/recipeStore';

const IngredientFilter = () => {
  const { setIngredientFilter } = useRecipeStore();

  return (
    <input
      type="text"
      placeholder="Filter by ingredient..."
      className="border p-2 rounded-md w-full"
      onChange={(e) => setIngredientFilter(e.target.value)}
    />
  );
};

export default IngredientFilter;
