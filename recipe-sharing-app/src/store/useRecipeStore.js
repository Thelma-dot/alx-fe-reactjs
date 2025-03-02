import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian dish.", cookingTime: 25, ingredients: ["Pasta", "Egg", "Bacon", "Cheese"] },
    { id: 2, title: "Chicken Curry", description: "A spicy and flavorful dish.", cookingTime: 40, ingredients: ["Chicken", "Curry Powder", "Onion", "Garlic"] },
    { id: 3, title: "Avocado Toast", description: "A simple and healthy breakfast.", cookingTime: 10, ingredients: ["Avocado", "Bread", "Egg", "Salt"] }
  ],
  favorites: [],
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...new Set([...state.favorites, recipeId])] 
  })),
  searchTerm: "",
  filteredRecipes: [],
  

  setSearchTerm: (term) => 
    set((state) =>{
    const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
    set({ searchTerm: term });
    get().filterRecipes();
  },

  setRecipes: (newRecipes) => {
    set({ recipes: newRecipes });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  }
}));

 removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
