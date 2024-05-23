import Api from '../../constants/Api';
import JsonService from '../common/JsonService';

const endpoint = '/recipes/complexSearch';

export default class RecipeService extends JsonService {
  constructor() {
    super(endpoint, {
      apiKey: Api.key,
      query: null,
      fillIngredients: false,
      includeIngredients: null,
      excludeIngredients: null,
    });
  }

  reset() {
    this.parameters = {
      apiKey: Api.key,
      query: null,
      fillIngredients: false,
      includeIngredients: null,
      excludeIngredients: null,
    };
  }

  setQuery(query) {
    this.parameters.query = query;
  }
  setIsFillIngredients(isFilledIngredients) {
    this.parameters.fillIngredients = isFilledIngredients;
  }
  addIncludeIngredient(includeIngredient) {
    if (this.parameters.includeIngredients === null)
      this.parameters.includeIngredients = [];
    this.parameters.includeIngredients.push(includeIngredient);
  }
  addExcludeIngredient(excludeIngredient) {
    if (this.parameters.excludeIngredients === null)
      this.parameters.excludeIngredients = [];
    this.parameters.excludeIngredients.push(excludeIngredient);
  }
}
