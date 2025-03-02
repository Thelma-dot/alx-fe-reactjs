import React from "react";

const RecipeItem = ({ recipe }) => {
  return (
    <div className="recipe-item border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{recipe.title}</h3>
      <p className="text-gray-600">{recipe.description}</p>
      <p className="text-sm text-gray-500">
        ⏱ Cooking Time: {recipe.cookingTime} mins
      </p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        View Details
      </button>
    </div>
  );
};

export default RecipeItem;
