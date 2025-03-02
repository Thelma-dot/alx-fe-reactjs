import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import React from 'react';
import useRecipeStore from './useRecipeStore';

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();
  const { searchTerm, filteredRecipes, recipes } = useRecipeStore(state => ({
    searchTerm: state.searchTerm,
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes
  }));
  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {displayedRecipes.length === 0 ? <p>No recipes found.</p> : displayedRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="p-4 border rounded mb-2">
            <h3 className="text-lg font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
