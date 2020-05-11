//If we need to access private properties outside the class we can use the getter and if we need to update the value of a private property we can use the setter.

class Product2{
    constructor(private _productId: number) { }

    get productId(): number {
        return this._productId;
    }

    set productId(productId: number) {
        this._productId = productId;
    }
    
}

let p2 = new Product2(34234);
console.log(p2.productId); //get function will get executed automatically whenever we try to access property with same name as the get funtion name
p2.productId = 111111; //set function will get executed automatically whenever we try to assign a new value to property with same name as set function name. 
console.log(p2.productId)
