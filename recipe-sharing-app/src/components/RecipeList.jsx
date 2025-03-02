import React from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded-md mb-2">
            <h3 className="text-lg font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
