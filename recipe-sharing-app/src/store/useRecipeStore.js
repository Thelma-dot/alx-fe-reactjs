import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  setRecipes: (newRecipes) => {
    set({ recipes: newRecipes });
    get().filterRecipes(); // Ensure filtering updates when recipes change
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  }
}));

export default useRecipeStore;
