import { Duck } from "./Duck";
import { FlyWithWings } from "./FlyWithWings";
import { MuteQuack } from "./MuteQuack";

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyWithWings();
    this.quackBehaviour = new MuteQuack();
  }

  display(): void {
    console.log("I'm a real Mallard duck");
  }
}
