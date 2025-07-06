import { BowAndArrowsWeaponBehaviour } from "./BowAndArrowsWeaponBehaviour";
import { Character } from "./Character";

export class Queen extends Character {
  constructor() {
    super();
    this.weaponBehaviour = new BowAndArrowsWeaponBehaviour();
  }
  fight(): void {
    console.log("Queen started fighting");
    this.weaponBehaviour.useWeapon();
    console.log("Queen ended fighting");
  }
}
