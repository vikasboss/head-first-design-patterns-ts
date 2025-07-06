import { FlyBehaviour } from './FlyBehaviour';
import { QuackBehaviour } from './QuackBehaviour';

export abstract class Duck {
  protected flyBehaviour!: FlyBehaviour;
  protected quackBehaviour!: QuackBehaviour;

  performFly(): void {
    this.flyBehaviour.fly();
  }

  performQuack(): void {
    this.quackBehaviour.quack();
  }

  swim(): void {
    console.log("All ducks float, even decoys!");
  }

  abstract display(): void;
}
