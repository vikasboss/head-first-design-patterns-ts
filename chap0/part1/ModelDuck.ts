import { Duck } from "./Duck";
import { FlyNoWay } from "./FlyNoWay";
import { MuteQuack } from "./MuteQuack";

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyNoWay();
    this.quackBehaviour = new MuteQuack();
  }
  display(): void {
    console.log("I'm a model duck");
  }
}
