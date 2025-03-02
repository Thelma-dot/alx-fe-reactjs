import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]
  })),

  deleteRecipe: (recipeId) =>
    set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== recipeId) })),

  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),

  

  setRecipes: (newRecipes) => set({ recipes: newRecipes }) 
}));

export default useRecipeStore;
