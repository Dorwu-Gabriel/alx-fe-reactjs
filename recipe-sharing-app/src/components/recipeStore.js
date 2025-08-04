import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase()) ||
          (recipe.ingredients &&
            recipe.ingredients.some((ing) =>
              ing.toLowerCase().includes(term.toLowerCase())
            )) ||
          (recipe.prepTime &&
            recipe.prepTime.toString().includes(term.toLowerCase()))
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
  setRecipes: (recipes) =>
    set((state) => {
      const filtered = state.searchTerm
        ? recipes.filter(
            (recipe) =>
              recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
              (recipe.ingredients &&
                recipe.ingredients.some((ing) =>
                  ing.toLowerCase().includes(state.searchTerm.toLowerCase())
                )) ||
              (recipe.prepTime &&
                recipe.prepTime.toString().includes(state.searchTerm.toLowerCase()))
          )
        : recipes;
      return { recipes, filteredRecipes: filtered };
    }),
  addRecipe: (recipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      const filtered = state.searchTerm
        ? updatedRecipes.filter(
            (r) =>
              r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
              (r.ingredients &&
                r.ingredients.some((ing) =>
                  ing.toLowerCase().includes(state.searchTerm.toLowerCase())
                )) ||
              (r.prepTime &&
                r.prepTime.toString().includes(state.searchTerm.toLowerCase()))
          )
        : updatedRecipes;
      return { recipes: updatedRecipes, filteredRecipes: filtered };
    }),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      );
      const filtered = state.searchTerm
        ? updatedRecipes.filter(
            (r) =>
              r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
              (r.ingredients &&
                r.ingredients.some((ing) =>
                  ing.toLowerCase().includes(state.searchTerm.toLowerCase())
                )) ||
              (r.prepTime &&
                r.prepTime.toString().includes(state.searchTerm.toLowerCase()))
          )
        : updatedRecipes;
      return { recipes: updatedRecipes, filteredRecipes: filtered };
    }),
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      const filtered = state.searchTerm
        ? updatedRecipes.filter(
            (r) =>
              r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
              (r.ingredients &&
                r.ingredients.some((ing) =>
                  ing.toLowerCase().includes(state.searchTerm.toLowerCase())
                )) ||
              (r.prepTime &&
                r.prepTime.toString().includes(state.searchTerm.toLowerCase()))
          )
        : updatedRecipes;
      return { recipes: updatedRecipes, filteredRecipes: filtered };
    }),
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  generateRecommendations: () =>
    set((state) => {
      // Example: recommend random favorites (customize as needed)
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) &&
          state.favorites.length > 0 &&
          state.favorites.some((favId) =>
            recipe.ingredients &&
            state.recipes.find((r) => r.id === favId)?.ingredients?.some((ing) =>
              recipe.ingredients.includes(ing)
            )
          )
      );
      return { recommendations: recommended };
    }),
}));