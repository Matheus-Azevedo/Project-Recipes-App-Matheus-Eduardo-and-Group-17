jest.mock('../../../services/storage', () => ({
  addInProgressRecipe: jest.fn(),
  addFavoriteRecipe: jest.fn(),
  getInProgressRecipeById: jest.fn(),
  getFavoriteRecipeById: jest.fn(),
}));
