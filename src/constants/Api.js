export default {
  serviceUrl: 'https://api.spoonacular.com',
  fileUrl: 'https://spoonacular.com',
  //key: 'd278e8d1b02d43a0ae76d13041bf8c60', //mine
  key: 'c957b6816ba048139fbc25a67d2cff33', //other
  endpoints: {
    recipes: {
      recipesByIngredients: '/recipes/findByIngredients',
    },
  },
  returnType: {
    json: 'json',
    csv: 'csv',
  },
  parameters: {
    maxResults: 'number',
  },
  firstDelimiter: '?',
  delimiter: '&',
  listDelimiter: ',',
  imageSource: 'https://spoonacular.com/cdn/ingredients_100x100/',
};
