import { FlyBehaviour } from "./FlyBehaviour";
import { QuackBehaviour } from "./QuackBehaviour";

export abstract class Duck {
  protected flyBehaviour!: FlyBehaviour;
  protected quackBehaviour!: QuackBehaviour;

  performFly(): void {
    this.flyBehaviour.fly();
  }
  setFlyBehaviour(fb: FlyBehaviour): void {
    this.flyBehaviour = fb;
  }

  performQuack(): void {
    this.quackBehaviour.quack();
  }

  setQuackBehaviour(qb: QuackBehaviour): void {
    this.quackBehaviour = qb;
  }

  swim(): void {
    console.log("All ducks float, even decoys!");
  }

  abstract display(): void;
}
