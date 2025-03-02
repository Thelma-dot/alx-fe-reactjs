import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  searchTerm: '',
setSearchTerm: (term) => set({ searchTerm: term }),
filteredRecipes: [],
filterRecipes: () => set(state => ({
  filteredRecipes: state.recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  )
})),

 addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),

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
