import { useRecipeStore } from './useRecipeStore';

const FavoritesList = () => {
  const { recipes, favorites, removeFavorite } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites,
    removeFavorite: state.removeFavorite,
  }));

  const favoriteRecipes = favorites.map(id => recipes.find(recipe => recipe.id === id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
