import React, { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeForm = () => {
  const { addRecipe } = useRecipeStore();
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      id: Date.now(),
      title,
      ingredients: ingredients.split(','),
      prepTime: Number(prepTime),
    });
    setTitle('');
    setIngredients('');
    setPrepTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preparation time (minutes)"
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
