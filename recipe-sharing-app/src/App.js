import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import React, { useEffect } from 'react';
import useRecipeStore from './store/recipeStore';
import SearchBar from './components/SearchBar';
import IngredientFilter from './components/IngredientFilter';
import TimeFilter from './components/TimeFilter';
import RecipeList from './components/RecipeList';

const sampleRecipes = [
  {
    id: 1,
    title: 'Spaghetti Bolognese',
    description: 'A classic Italian dish...',
    ingredients: ['pasta', 'beef', 'tomato'],
    preparationTime: 30,
  },
  {
    id: 2,
    title: 'Chicken Curry',
    description: 'A spicy and savory dish...',
    ingredients: ['chicken', 'curry powder', 'onion'],
    preparationTime: 45,
  },
];
const App = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: "Spaghetti Bolognese", prepTime: 30, ingredients: ["spaghetti", "beef", "tomato"] },
      { id: 2, title: "Chicken Salad", prepTime: 15, ingredients: ["chicken", "lettuce", "dressing"] },
      { id: 3, title: "Pancakes", prepTime: 20, ingredients: ["flour", "milk", "eggs"] }
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <IngredientFilter />
      <TimeFilter />
      <RecipeList />
    </div>
  );
};

export default App;
