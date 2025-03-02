import React from 'react';
import useRecipeStore from '../store/recipeStore';

const TimeFilter = () => {
  const { setTimeFilter } = useRecipeStore();

  return (
    <input
      type="number"
      placeholder="Max preparation time (minutes)"
      className="border p-2 rounded-md w-full"
      onChange={(e) => setTimeFilter(Number(e.target.value))}
    />
  );
};

export default TimeFilter;
