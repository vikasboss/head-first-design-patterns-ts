import { WeaponBehaviour } from "./WeaponBehaviour";

export class SwordWeaponBehaviour implements WeaponBehaviour {
  useWeapon(): void {
    console.log("Swinging a sword");
  }
}
