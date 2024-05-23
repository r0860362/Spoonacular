export default class Ingredient {
  constructor({ id, name, image = '', measures }) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.measures = measures;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }

  getImage() {
    return this.image;
  }

  getAmount() {
    return this.measures.metric.amount;
  }
  getUnit() {
    return this.measures.metric.unitLong;
  }
}
