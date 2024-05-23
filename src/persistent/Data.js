let selectedRecipe = null;
let favoriteRecipes = {};
let subscribers = [];

export default {
  subscribe(subscriber) {
    subscribers.push(subscriber);
  },
  unsubscribe(unsubscriber) {
    subscribers.filter((subscriber) => subscriber !== unsubscriber);
  },

  notify() {
    subscribers.forEach((subscriber) => subscriber.persistentDataChanged());
  },

  isFavoriteRecipe(favoriteRecipe) {
    return favoriteRecipes.hasOwnProperty(favoriteRecipe.getId());
  },
  toggleFavoriteRecipe(favoriteRecipe) {
    this.isFavoriteRecipe(favoriteRecipe)
      ? delete favoriteRecipes[favoriteRecipe.getId()]
      : (favoriteRecipes[favoriteRecipe.getId()] = favoriteRecipe);

    this.notify();
  },
  clearFavoriteRecipes() {
    favoriteRecipes = {};
    this.notify();
  },

  getFavoriteRecipes() {
    return favoriteRecipes;
  },
};
