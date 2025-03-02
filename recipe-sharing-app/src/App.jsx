import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm"; 
import RecipeList from "./components/RecipeList"; 
import SearchBar from './components/SearchBar';
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="app">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

function App() {
  return (
    <div>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

const App = () => {
  return (
    <Router>
       <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
         </div>
    </Router>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
