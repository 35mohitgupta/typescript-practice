// Generic constraints is used to add constraints to the generic type.

// Generic constraints are added using the extends keyword.

// If we need to access a property on the type parameter, we can add those properties in an interface or class and extend the type parameter from the declared interface or class.

interface AddLength{
    length: number;
}

function orderDetails <T extends AddLength>(arg: T){
    console.log(arg.length)
    return arg;
}

let orderName: Array<string> = ['aaa','bbb','ccc']
console.log(orderDetails(orderName))

console.log(orderDetails([11,2,33,44]))

// console.log(orderDetails(4534)) this method doesn't include length

console.log(orderDetails('dfgdf'))