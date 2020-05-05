//Rest Parameter is used to pass multiple values to a single parameter of a function. It accepts zero or more values for a single parameter.

//Rest Parameter should be declared as an array.

//Rest parameter should be the last parameter in the function parameter list.

function getOrderDetails(orderId: number, ...items: string[]): string {
    return `OrderId - ${orderId} contains item - ${items}`;
}

console.log(getOrderDetails(1111,'sugar','soap','mobile','furniture'))