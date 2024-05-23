import Instruction from './Instruction';

export default class InstructionList {
  constructor(analyzedInstructions = []) {
    this.instructions = analyzedInstructions.map(
      (instruction) => new Instruction(instruction)
    );
  }

  getInstructions() {
    return this.instructions;
  }
}
