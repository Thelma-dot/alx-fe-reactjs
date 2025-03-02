import React from 'react';
import useRecipeStore from '../store/recipeStore';
import RecipeItem from "./RecipeItem";


const RecipeList = () => {
   const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
const displayedRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;
  
   return (
    <div className="recipe-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayedRecipes.length > 0 ? (
        displayedRecipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <p className="text-gray-500">No recipes found.</p>
      )}
    </div>
  );
};

 return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Preparation Time: {recipe.prepTime} mins</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
