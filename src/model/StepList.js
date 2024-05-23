import Step from './Step';
export default class StepList {
  constructor(steps = []) {
    this.steps = steps.map((s) => new Step(s));
  }

  getSteps() {
    return this.steps;
  }
}
