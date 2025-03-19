import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!summary.trim()) {
      newErrors.summary = 'Summary is required';
    }

    if (!image.trim()) {
      newErrors.image = 'Image URL is required';
    }

    if (ingredients.some((ingredient) => !ingredient.trim())) {
      newErrors.ingredients = 'All ingredient fields must be filled';
    }

    if (steps.some((step) => !step.trim())) {
      newErrors.steps = 'All step fields must be filled';
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newRecipe = {
        id: Date.now(),
        title,
        summary,
        image,
        ingredients,
        steps,
        isUserAdded: true,
      };

      onAddRecipe(newRecipe);

      // Reset form
      setTitle('');
      setSummary('');
      setImage('');
      setIngredients(['']);
      setSteps(['']);
      setErrors({});
    }
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, '']);
  };

  const addStepField = () => {
    setSteps([...steps, '']);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Recipe</h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* Summary */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Summary</label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full border rounded px-3 py-2"
        ></textarea>
        {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
      </div>

      {/* Image */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
      </div>

      {/* Ingredients */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Ingredients</label>
        {ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
            placeholder={`Ingredient ${index + 1}`}
            className="w-full border rounded px-3 py-2 mb-2"
          />
        ))}
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        <button
          type="button"
          onClick={addIngredientField}
          className="text-blue-500 hover:underline"
        >
          + Add Ingredient
        </button>
      </div>

      {/* Steps */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Steps</label>
        {steps.map((step, index) => (
          <textarea
            key={index}
            value={step}
            onChange={(e) => handleStepChange(index, e.target.value)}
            placeholder={`Step ${index + 1}`}
            className="w-full border rounded px-3 py-2 mb-2"
          ></textarea>
        ))}
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        <button
          type="button"
          onClick={addStepField}
          className="text-blue-500 hover:underline"
        >
          + Add Step
        </button>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
