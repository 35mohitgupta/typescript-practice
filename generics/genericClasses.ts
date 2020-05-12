class Gadget<T> {

    constructor(public productList: Array<T>) {
        
    }
    
    addItems(newItemList: Array<T>): void {
        this.productList = newItemList;
        console.log('Item added')
    }

    getProductList(): Array<T>{
        return this.productList;
    }
}

let productList: Array<string> = ['Mobile', 'Tablet', 'Ipod'];
let product1 = new Gadget<string>(productList);
product1.addItems(productList)
let allProducts: Array<string> = product1.getProductList();
console.log(allProducts)


let shippingList: Array<number> = [111, 222, 333];
let product2 = new Gadget<number>(shippingList)
product2.addItems(shippingList)
let allItems: Array<number> = product2.getProductList();
console.log(allItems)

