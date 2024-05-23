import Equipment from './Equipment';

export default class EquipmentList {
  constructor({ equipment }) {
    this.equipment = equipment.map((e) => new Equipment(e));
  }

  getEquipment() {
    return this.equipment;
  }
}
