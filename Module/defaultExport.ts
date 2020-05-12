// Default export is used to export any one of the construct such as class, interface, function and so on from the current module as a default one.

// Name for the default exported constructs are optional. We can assign a name to the default construct while importing it in the other file.

// We cannot have more than one default export per module.

export default class{
    constructor(private productId: number){

    }
    getProductDetails(productId: number): string{
        return `ProductId - ${productId}`;
    }
}

export class Utility{
    
}