// Properties and method declared with protected access are accessible within class as well as within inherited classes

class Product {

    protected productId: number;

    constructor(productId: number) {
        this.productId = productId;
    }

}

class Gadget extends Product{
    
    getProductId(): string{
        return 'Product id - ' + this.productId;
    }
}

let g: Gadget = new Gadget(3333)
console.log(g.getProductId())