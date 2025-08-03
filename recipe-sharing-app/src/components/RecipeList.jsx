import React, { useEffect } from 'react';
import { useRecipeStore } from '../components/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // If you fetch recipes from an API, do it here and call setRecipes
    // For now, assume recipes are already loaded
    setRecipes(recipes);
  }, [recipes, setRecipes]);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              {/* Optionally show prep time, ingredients, etc. */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;