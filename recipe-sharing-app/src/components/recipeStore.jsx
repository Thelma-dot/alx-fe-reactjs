import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  setSearchTerm: (term) => 
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
  }));

  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe]
  })),

  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),

  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
}));
const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  ingredientFilter: '',
  timeFilter: '',
  filteredRecipes: [],

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  setIngredientFilter: (ingredient) =>
    set((state) => ({
      ingredientFilter: ingredient,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.ingredients.some((ing) =>
          ing.toLowerCase().includes(ingredient.toLowerCase())
        )
      ),
    })),

  setTimeFilter: (time) =>
    set((state) => ({
      timeFilter: time,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.preparationTime <= time
      ),
    })),
}));

export default useRecipeStore;

