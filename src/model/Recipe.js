import IngredientList from './IngredientList';
import StepList from './StepList';

export default class Recipe {
  constructor({ id, title, image }) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.ingredientList = null;
    this.instructionList = null;
  }

  getTitle() {
    return this.title;
  }

  getId() {
    return this.id;
  }

  getImage() {
    return this.image;
  }

  getIngredientList() {
    return this.ingredientList;
  }
  setIngredientList(ingredientList) {
    this.ingredientList = ingredientList;
  }

  getInstructionList() {
    return this.instructionList;
  }
  setInstructionList(instructionList) {
    this.instructionList = instructionList;
  }
}
