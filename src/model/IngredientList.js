import Ingredient from './Ingredient';

export default class IngredientList {
  constructor(ingredients = []) {
    this.ingredients = ingredients.map((i) => new Ingredient(i));
  }

  getIngredients() {
    return this.ingredients;
  }
}
