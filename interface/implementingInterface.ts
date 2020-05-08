// We can make use of interface to define class types to explicitly enforce that a class meets a particular contract. We use implements keyword to implement interface inside a class.

// To enforce interface type on a class, while instantiating object of a class declare it using the interface type.

// Only interface declared functions and properties will be available with the instantiated object.

interface Product{
    getProductDetails(productId: number): string;
    //arrow funtion declaration
    displayProductName: (productId: number) =>string;
}

class Gadget implements Product{

    //parameter changes are allowed but return type change 'string[]'not allowed
    getProductDetails(): string{
        return 'Parle ';
    }

    displayProductName(productId: number): string {
        return `Parle ${productId}`
    }
}

let parle: Product = new Gadget();