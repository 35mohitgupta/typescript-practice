// Properties and method declared as private can only be accesssed within class but not outside the class

class Product {

    private productId: number;
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

let p1 = new Product(42342, 'mohit')
//Can't be accessed
// console.log(p1.productId)
console.log(p1.productName)