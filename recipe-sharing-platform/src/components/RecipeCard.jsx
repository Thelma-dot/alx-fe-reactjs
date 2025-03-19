import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded mb-4" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-4">{recipe.description.substring(0, 60)}...</p>
        <Link to={`/recipe/${recipe.id}`} className="text-blue-500 font-medium">
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
