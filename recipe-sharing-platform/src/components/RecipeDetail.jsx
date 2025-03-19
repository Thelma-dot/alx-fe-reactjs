import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Ingredients:</h2>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
          {/* Replace with real ingredients if available */}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Cooking Instructions:</h2>
        <ol className="list-decimal list-inside text-gray-600">
          <li>Step 1: Do this.</li>
          <li>Step 2: Do that.</li>
          <li>Step 3: Serve & enjoy!</li>
          {/* Replace with real instructions if available */}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
