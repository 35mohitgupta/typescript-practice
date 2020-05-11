// Namespace is used to group functions, classes or interfaces under a common name.

// The content of namespaces are hidden by default unless exported.

// We can have nested namespaces if required.

// The function or any construct which is not exported cannot be accessible outside the namespace.

namespace Utility{
    export namespace Payment {
        export function calculateAmount(price: number, quantity: number){

        }
    }

    export function maxDiscountAllowed(noOfProduct: number): number{
        return noOfProduct;
    }

    //not exported function
    function privateFunc(): void {

    }
}