import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-500">
          RecipeShare
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/add" className="text-gray-700 hover:text-blue-500">
            Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
