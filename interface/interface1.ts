// Properties or methods in an interface should not have any access modifiers.

// Properties cannot be initialized in a TypeScript interface.

// declaring a Category interface
interface Category {
    categoryName: string;
    }

// declaring a Product interface
interface Product {
        productName: string;
        productId: number;
        //Optional Property
        productMRP?: number;
    }

// declaring a ProductList interface which is extends from Category and Product interfaces
interface ProductList extends Category, Product {
        list: Array<string>;
    }

// declaring a variable which is type of ProductList interface
const productDetails: ProductList = {
        categoryName: 'Gadget',
        productName: 'Mobile',
        productId: 1234,
        list: ['Samsung', 'Motorola', 'LG']
    };