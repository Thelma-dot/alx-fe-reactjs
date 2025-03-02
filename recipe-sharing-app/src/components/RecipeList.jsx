import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  const displayRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {displayRecipes.length > 0 ? (
        displayRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
