import React from 'react';
import useRecipeStore from '../store/recipeStore';

const FilterPanel = () => {
  const { setIngredientFilter, setTimeFilter } = useRecipeStore();

  return (
    <div className="filter-panel">
      <input
        type="text"
        placeholder="Filter by ingredient..."
        onChange={(e) => setIngredientFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max preparation time (minutes)"
        onChange={(e) => setTimeFilter(Number(e.target.value))}
      />
    </div>
  );
};

export default FilterPanel;
