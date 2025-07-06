import { MallardDuck } from './MallardDuck';

function main(): void {
  const mallard = new MallardDuck();
  mallard.display();
  mallard.performQuack();
  mallard.performFly();
  mallard.swim();
}

main();
