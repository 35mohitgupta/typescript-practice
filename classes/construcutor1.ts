// Constructor can be created maximum one per class.

// We can use optional parameters with a constructor function as well.

class Product {

    productId: number;

    constructor(productId: number, productName?: string) {
        this.productId = productId;
    }

    getProductId(): string{
        return 'Product id - ' + this.productId;
    }
}

let p1 = new Product(42342)
