//If the sublass has a constructor defined, then it is mandatory to invoke the super class constructor using the super function.

// We can use super keyword to access the methods of the super class inside the subclass methods.

// We can override the superclass methods inside subclass by specifying the same function signature.

class Product{
    // protected productId: number;
    constructor(protected productId: number){

    }
     getProduct(): void{
         console.log('super class ',this.productId)
     }

}

class Gadget extends Product{
    
    constructor (public productName: string, productId: number){
        super(productId)
    }

    getProduct(): void{
        console.log('sub class ',this.productId)
        super.getProduct()
    }
    
}

let  g: Product = new Gadget("Parle",343423)
g.getProduct()