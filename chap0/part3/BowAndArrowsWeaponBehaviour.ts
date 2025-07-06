import { WeaponBehaviour } from "./WeaponBehaviour";

export class BowAndArrowsWeaponBehaviour implements WeaponBehaviour {
  useWeapon(): void {
    console.log("Shooting an arrow with a bow");
  }
}
