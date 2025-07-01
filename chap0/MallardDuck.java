public class MallardDuck extends Duck {
    public MallardDuck() {
        flyBehaviour = new FlyWithWings();
        quackBehaviour = new MuteQuack();
    };

    public void display() {
        System.out.println("I'm a real Mallard duck");
    }

}
