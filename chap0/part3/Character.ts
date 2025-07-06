import { WeaponBehaviour } from "./WeaponBehaviour";

export abstract class Character {
  protected weaponBehaviour!: WeaponBehaviour;
  setWeapon(weapon: WeaponBehaviour): void {
    this.weaponBehaviour = weapon;
  }
  abstract fight(): void;
}
