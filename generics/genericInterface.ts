interface Inventory<T> {
    addItem: (newItem: T) => void;
    getProductList: ()=> Array<T>;
}

class Gadget implements Inventory<string> {
    addItem(newItem: string): void{
        console.log('Item added - '+newItem)
    }

    productList: Array<string> = ['mobile','tablet','ipod']

    getProductList() : Array<string>{
        return this.productList;
    }
    
}

let productInventory: Inventory<string> = new Gadget();
let allProducts: Array<string> = productInventory.getProductList();


class Shipping implements Inventory<number>{

    addItem(newItem: number): void {
        console.log('Item added - '+newItem);
    }

    shippingId: Array<number> = [3432,344,444];

    getProductList(): Array<number>{
        return this.shippingId;
    }
}

let shippingInventory: Inventory<number> = new Shipping();
let shippingIds: Array<number> = shippingInventory.getProductList();