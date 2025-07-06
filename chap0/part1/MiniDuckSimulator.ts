import { FlyRocketPowered } from "./FlyRocketPowered";
import { MallardDuck } from "./MallardDuck";
import { ModelDuck } from "./ModelDuck";

function main(): void {
  // const mallard = new MallardDuck();
  // mallard.display();
  // mallard.performQuack();
  // mallard.performFly();
  // mallard.swim();

  //new examole
  const model = new ModelDuck();
  model.performFly();
  //Dynamically change the fly behaviour
  model.setFlyBehaviour(new FlyRocketPowered());
  model.performFly();
}

main();
