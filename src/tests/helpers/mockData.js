const mealMock = {
  id: 'test-meal',
  title: 'Title',
  tags: 'Tags',
  type: 'Type',
  categories: 'Categories',
  thumbnailUrl: 'Thumbnailurl',
  instructions: 'Instructions',
  nationality: 'Nationality',
  videoUrl: 'test',
  videoCode: 'test',
  ingredients: [
    {
      ingredient: 'Ingredient 1',
      measure: 'Measure 1',
    },
    {
      ingredient: 'Ingredient 2',
      measure: 'Measure 2',
    },
  ],
};

const drinkMock = {
  id: 'test-drink',
  title: 'Title',
  tags: 'Tags',
  type: 'drink',
  categories: 'Categories',
  thumbnailUrl: 'Thumbnailurl',
  instructions: 'Instructions',
  nationality: 'Nationality',
  ingredients: [
    {
      ingredient: 'Ingredient 1',
      measure: 'Measure 1',
    },
    {
      ingredient: 'Ingredient 2',
      measure: 'Measure 2',
    },
  ],
};

export {
  drinkMock,
  mealMock,
};
