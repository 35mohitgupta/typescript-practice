// Abstract classes are base classes that may not be instantiated.

// Abstract class can be created using abstract keyword.

// Abstract methods with in an abstract class are methods declared with abstract keyword and does not contain implementation.

// They must be implemented inside the derived classes.

// Abstract classes can contain both abstract methods and method implementations.

abstract class Product{
    getFeatures(): void{

    }

    abstract getProductName(): string;
}

class Gadget extends Product{
    getProductName(): string {
        return 'hello';
    }
}

let g = new Gadget();
console.log(g.getProductName())