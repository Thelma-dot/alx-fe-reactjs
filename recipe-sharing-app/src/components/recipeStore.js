import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  setRecipes: (newRecipes) => set({ recipes: newRecipes }), // ✅ Added setRecipes
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
}));

export default useRecipeStore;
