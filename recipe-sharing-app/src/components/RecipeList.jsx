import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

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
              <button
                onClick={() => addFavorite(recipe.id)}
                disabled={favorites.includes(recipe.id)}
                style={{ marginLeft: '1rem' }}
              >
                {favorites.includes(recipe.id) ? 'Favorited' : 'Add to Favorites'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;