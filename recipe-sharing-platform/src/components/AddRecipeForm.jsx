import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: 'Easy',
    ingredients: '',
    instructions: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required';
    if (!formData.summary.trim()) newErrors.summary = 'A short summary is required';
    if (!formData.prepTime) newErrors.prepTime = 'Preparation time is required';
    if (!formData.cookTime) newErrors.cookTime = 'Cooking time is required';
    if (!formData.servings) newErrors.servings = 'Number of servings is required';
    
    // Validate ingredients (at least 2 items)
    const ingredientsList = formData.ingredients
      .split('\n')
      .filter(ingredient => ingredient.trim() !== '');
    
    if (ingredientsList.length < 2) {
      newErrors.ingredients = 'Please include at least 2 ingredients';
    }
    
    // Validate instructions (at least 2 steps)
    const instructionsList = formData.instructions
      .split('\n')
      .filter(step => step.trim() !== '');
    
    if (instructionsList.length < 2) {
      newErrors.instructions = 'Please include at least 2 preparation steps';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // For now, we'll just navigate back to the home page
      alert('Recipe submitted successfully!');
      navigate('/');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Recipe</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border ${
              errors.title ? 'border-red-500' : ''
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>
        
        {/* Recipe Summary */}
        <div>
          <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
            Short Summary *
          </label>
          <textarea
            id="summary"
            name="summary"
            rows="2"
            value={formData.summary}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border ${
              errors.summary ? 'border-red-500' : ''
            }`}
            placeholder="A brief description of your recipe"
          />
          {errors.summary && (
            <p className="mt-1 text-sm text-red-600">{errors.summary}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Prep Time */}
          <div>
            <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700">
              Prep Time (min) *
            </label>
            <input
              type="number"
              id="prepTime"
              name="prepTime"
              min="0"
              value={formData.prepTime}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border ${
                errors.prepTime ? 'border-red-500' : ''
              }`}
            />
            {errors.prepTime && (
              <p className="mt-1 text-sm text-red-600">{errors.prepTime}</p>
            )}
          </div>
          
          {/* Cook Time */}
          <div>
            <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700">
              Cook Time (min) *
            </label>
            <input
              type="number"
              id="cookTime"
              name="cookTime"
              min="0"
              value={formData.cookTime}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border ${
                errors.cookTime ? 'border-red-500' : ''
              }`}
            />
            {errors.cookTime && (
              <p className="mt-1 text-sm text-red-600">{errors.cookTime}</p>
            )}
          </div>
          
          {/* Servings */}
          <div>
            <label htmlFor="servings" className="block text-sm font-medium text-gray-700">
              Servings *
            </label>
            <input
              type="number"
              id="servings"
              name="servings"
              min="1"
              value={formData.servings}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border ${
                errors.servings ? 'border-red-500' : ''
              }`}
            />
            {errors.servings && (
              <p className="mt-1 text-sm text-red-600">{errors.servings}</p>
            )}
          </div>
        </div>
        
        {/* Difficulty */}
        <div>
          <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
            Difficulty
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        
        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients *
            <span className="text-gray-500 text-xs ml-2">(One ingredient per line)</span>
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="5"
            value={formData.ingredients}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border ${
              errors.ingredients ? 'border-red-500' : ''
            }`}
            placeholder="2 cups flour\n1 tsp salt\n1/2 cup sugar"
          />
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
          )}
        </div>
        
        {/* Instructions */}
        <div>
          <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
            Preparation Steps *
            <span className="text-gray-500 text-xs ml-2">(One step per line)</span>
          </label>
          <textarea
            id="instructions"
            name="instructions"
            rows="8"
            value={formData.instructions}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border ${
              errors.instructions ? 'border-red-500' : ''
            }`}
            placeholder="Step 1: Mix dry ingredients...\nStep 2: Add wet ingredients..."
          />
          {errors.instructions && (
            <p className="mt-1 text-sm text-red-600">{errors.instructions}</p>
          )}
        </div>
        
        {/* Buttons */}
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
