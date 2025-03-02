import { useState } from "react";
import AddRecipeForm from "./components/AddRecipeForm"; // ✅ Ensure correct import path
import RecipeList from "./components/RecipeList"; // ✅ Ensure correct import path

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="app">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
