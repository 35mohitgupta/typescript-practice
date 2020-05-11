// A static variable belongs to the class and not to the instance of the class.

// A variable or function declared with static keyword can be accessible using the class name instead of instance of the class.

// Static variables are initialized only once, at the start of the execution.

// A single copy of the static variables has to be shared by all instances of the class.

// A static variable can be accessible inside static function as well as non static function.

// A static function can access only static variables and other static functions.

class Product {

    static productName: string='Mobile';

    static getProductDetails(): string{
        return "Product Number = " + Product.productName;
    }

    getProduct(): string{
        return "Product name - " + Product.productName;
    }

}

Product.productName = 'Tablet';
console.log(Product.productName)
console.log(Product.getProductDetails())