import Recipe from './Recipe';

export default class RecipeList {
  constructor(recipes = []) {
    this.recipes = recipes.map((r) => new Recipe(r));
  }

  getRecipes() {
    return this.recipes;
  }
}
