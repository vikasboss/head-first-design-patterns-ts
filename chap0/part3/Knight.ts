import { AxeWeaponBehaviour } from "./AxeWeaponBehaviour";
import { BowAndArrowsWeaponBehaviour } from "./BowAndArrowsWeaponBehaviour";
import { Character } from "./Character";

export class Knight extends Character {
  constructor() {
    super();
    this.weaponBehaviour = new AxeWeaponBehaviour();
  }
  fight(): void {
    console.log("Knight started fighting");
    this.weaponBehaviour.useWeapon();
    console.log("Knight ended fighting");
  }
}
