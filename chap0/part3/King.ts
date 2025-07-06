import { Character } from "./Character";
import { SwordWeaponBehaviour } from "./SwordWeaponBehaviour";

export class King extends Character {
  constructor() {
    super();
    this.weaponBehaviour = new SwordWeaponBehaviour();
  }
  fight(): void {
    console.log("king started fighting");
    this.weaponBehaviour.useWeapon();
    console.log("king ended fighting");
  }
}
