import { Character } from "./Character";
import { KnifeWeaponBehaviour } from "./KnifeWeaponBehaviour";

export class King extends Character {
  constructor() {
    super();
    this.weaponBehaviour = new KnifeWeaponBehaviour();
  }
  fight(): void {
    console.log("king started fighting");
    this.weaponBehaviour.useWeapon();
    console.log("king ended fighting");
  }
}
