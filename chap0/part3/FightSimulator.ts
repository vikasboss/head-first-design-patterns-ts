import { KnifeWeaponBehaviour } from "./KnifeWeaponBehaviour";
import { Knight } from "./Knight";

function main(): void {
  const knight = new Knight();
  //By Default knight would be fighting with Axe Lets change that behaviour to use Knife
  knight.setWeapon(new KnifeWeaponBehaviour());
  knight.fight();
}
main();
