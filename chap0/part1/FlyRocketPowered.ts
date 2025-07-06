import { FlyBehaviour } from "./FlyBehaviour";

export class FlyRocketPowered implements FlyBehaviour {
  fly(): void {
    console.log("I'm flying with a rocket!");
  }
}
