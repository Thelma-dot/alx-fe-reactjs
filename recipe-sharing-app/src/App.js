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
  const { setRecipes } = useRecipeStore();

  useEffect(() => {
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <SearchBar />
      <IngredientFilter />
      <TimeFilter />
      <RecipeList />
    </div>
  );
};

export default App;
