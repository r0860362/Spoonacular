import { TouchableNativeFeedbackBase } from 'react-native';
import IngredientList from './IngredientList';

export default class Step {
  constructor({ number, step, ingredients }) {
    this.number = number;
    this.step = step;
    this.ingredients = new IngredientList(ingredients);
  }

  getNumber() {
    return this.number;
  }
  getStep() {
    return this.step;
  }
  getIngredients() {
    return this.ingredients;
  }
}
