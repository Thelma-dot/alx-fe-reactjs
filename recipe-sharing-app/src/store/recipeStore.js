import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  ingredientFilter: '',
  timeFilter: null,
  filteredRecipes: [],
   addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
  })),

 setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => set((state) => {
    const filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes };
  })
}));
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
        recipe.prepTime <= time
      ),
    })),

  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.recipes, recipe],
  })),

  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    ),
    filteredRecipes: state.filteredRecipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    ),
  })),

  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
    filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
  })),
}));

export default useRecipeStore;
