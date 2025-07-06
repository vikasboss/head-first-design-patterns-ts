import { WeaponBehaviour } from "./WeaponBehaviour";

export class AxeWeaponBehaviour implements WeaponBehaviour {
  useWeapon(): void {
    console.log("Chopping with an axe");
  }
}
