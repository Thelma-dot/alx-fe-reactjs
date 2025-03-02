import React, { useState } from "react";
import useRecipeStore from "../store/useRecipeStore";

const FilterOptions = () => {
  const { recipes, setRecipes } = useRecipeStore();
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [maxCookingTime, setMaxCookingTime] = useState("");

  // Extract unique ingredients from recipes
  const allIngredients = [...new Set(recipes.flatMap(recipe => recipe.ingredients))];

  // Handle filtering
  const handleFilter = () => {
    let filtered = recipes;

    if (selectedIngredient) {
      filtered = filtered.filter(recipe => recipe.ingredients.includes(selectedIngredient));
    }

    if (maxCookingTime) {
      filtered = filtered.filter(recipe => recipe.cookingTime <= parseInt(maxCookingTime, 10));
    }

    setRecipes(filtered);
  };

  return (
    <div className="filter-options p-4 border-b">
      <h2 className="text-lg font-semibold mb-2">Filter Recipes</h2>
      
      {/* Ingredient Filter */}
      <label className="block mb-2">
        <span className="text-sm text-gray-700">Ingredient:</span>
        <select
          className="border rounded px-2 py-1 w-full"
          value={selectedIngredient}
          onChange={(e) => setSelectedIngredient(e.target.value)}
        >
          <option value="">All</option>
          {allIngredients.map((ingredient, index) => (
            <option key={index} value={ingredient}>{ingredient}</option>
          ))}
        </select>
      </label>

      {/* Cooking Time Filter */}
      <label className="block mb-2">
        <span className="text-sm text-gray-700">Max Cooking Time (mins):</span>
        <input
          type="number"
          className="border rounded px-2 py-1 w-full"
          value={maxCookingTime}
          onChange={(e) => setMaxCookingTime(e.target.value)}
        />
      </label>

      {/* Apply Filter Button */}
      <button
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
        onClick={handleFilter}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterOptions;
