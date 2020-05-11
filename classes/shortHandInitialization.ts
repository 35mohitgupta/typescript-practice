class Product{
    private productId: number;
    constructor(productId: number) {
        this.productId = productId;
    }
}


//Instead of this we can declare the parameter itself with any of the access modifiers and reduce the lines of code used for the initialization.

class Product2{
    constructor(private productId:  number){}
}