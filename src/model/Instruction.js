import StepList from './StepList';

export default class Instruction {
  constructor({ name, steps = [] }) {
    this.name = name;
    this.stepList = new StepList(steps);
  }

  getName() {
    return this.name;
  }

  getStepList() {
    return this.stepList;
  }
}
