jest.mock('../../../services/recipes', () => ({
  getDrinkById: jest.fn(),
  getDrinks: jest.fn(),
  getMealById: jest.fn(),
  getMeals: jest.fn(),
}));
