import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddRecipeForm from './AddRecipeForm'; // Import the form

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        // Check for any saved recipes in localStorage
        const savedRecipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
        setRecipes([...data, ...savedRecipes]);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem('userRecipes', JSON.stringify(updatedRecipes.filter(r => r.isUserAdded))); // Only save user-added
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      {/* Add Recipe Form */}
      <AddRecipeForm onAddRecipe={handleAddRecipe} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded mb-4" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600 mb-4">{recipe.summary}</p>
                <p className="text-blue-500 hover:underline">View Recipe</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
