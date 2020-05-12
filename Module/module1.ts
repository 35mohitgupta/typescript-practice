// The content of modules cannot be accessible outside unless exported.
// Precede export keyword to the function, class, interface, etc.. which you need to export from a module.
export function maxDiscountAllowed(noOfProduct: number): number {

}

class Utility {
    calculateAmount(price: number, quantity: number): number {
        return price*quantity;
    }
}

export interface CAtegory{

}

const productName: string = 'sdsadas';

//Exporting class using export block
//Using alias name for class while exporting
export {Utility as MainUtility, productName}