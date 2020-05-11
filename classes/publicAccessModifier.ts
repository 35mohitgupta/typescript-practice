// Properties declared as public can be accesssed outside class

class Product {

    public productId: number;
    //By default Public
    productName: string;

    constructor(productId: number,productName: string) {
        this.productId = productId;
        this.productName = productName;
    }

    getProductId(): string{
        return 'Product id - ' + this.productId;
    }
}

let p1 = new Product(42342,'mohit')
console.log(p1.productId)