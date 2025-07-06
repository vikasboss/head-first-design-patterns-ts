import { WeaponBehaviour } from "./WeaponBehaviour";

export class KnifeWeaponBehaviour implements WeaponBehaviour {
  useWeapon(): void {
    console.log("Cutting with a knife");
  }
}
