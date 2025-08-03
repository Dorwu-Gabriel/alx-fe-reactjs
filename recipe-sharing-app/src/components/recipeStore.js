import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) =>
    set((state) => {
      // Update searchTerm and filter recipes
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
      // Update recipes and filteredRecipes
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
}));