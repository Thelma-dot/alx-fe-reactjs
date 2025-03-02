import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian dish.", cookingTime: 25, ingredients: ["Pasta", "Egg", "Bacon", "Cheese"] },
    { id: 2, title: "Chicken Curry", description: "A spicy and flavorful dish.", cookingTime: 40, ingredients: ["Chicken", "Curry Powder", "Onion", "Garlic"] },
    { id: 3, title: "Avocado Toast", description: "A simple and healthy breakfast.", cookingTime: 10, ingredients: ["Avocado", "Bread", "Egg", "Salt"] }
  ],
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) => {
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

export default useRecipeStore;
