
class Product {
    //Property 'productId' has no initializer and is not definitely assigned in the constructor.
    productId: number;
    getProductId(productId: number): string{
        return 'Product id - ' + productId;
    }
}