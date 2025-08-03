import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
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
}));
