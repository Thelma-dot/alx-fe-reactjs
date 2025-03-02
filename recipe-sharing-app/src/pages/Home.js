import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import RecipeList from '../components/RecipeList';
import RecipeForm from '../components/RecipeForm';

const Home = () => {
  const { setRecipes } = useRecipeStore();

  useEffect(() => {
    // Mock data for testing
    setRecipes([
      { id: 1, title: 'Pasta Carbonara', ingredients: ['pasta', 'egg', 'cheese'], prepTime: 20 },
      { id: 2, title: 'Chicken Salad', ingredients: ['chicken', 'lettuce', 'tomato'], prepTime: 15 },
      { id: 3, title: 'Omelette', ingredients: ['egg', 'cheese', 'pepper'], prepTime: 10 },
    ]);
  }, [setRecipes]);

  return (
    <div className="home">
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <FilterPanel />
      <RecipeForm />
      <RecipeList />
    </div>
  );
};

export default Home;
