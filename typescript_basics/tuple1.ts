//Tuple type is a kind of array which accepts more than one predefined type of data. Arrays are used to represent collection of similar objects, whereas tuples are used to represent collection of different objects.
let customerCreditInfo: [string, number];


//The order of the first set of data entry while initializing a tuple variable should be same as the order in which the type is declared in a tuple.
// customerCreditInfo = [333,'string'] //Type 'string' is not assignable to type 'number'.
customerCreditInfo = ["string1", 4345]
console.log(customerCreditInfo)
// customerCreditInfo = ['mohit',4545,'gupta',1111111] //error: Type '[string, number, string, number]' is not assignable to type '[string, number]'.  Types of property 'length' are incompatible.    Type '4' is not assignable to type '2'.
customerCreditInfo = ["string3",4564565]
console.log(customerCreditInfo)

customerCreditInfo.push("rohit", "gupta", 2222222)
console.log( customerCreditInfo)
console.log("4", customerCreditInfo[4]) //error: Tuple type '[string, string, number]' of length '3' has no element at index '5'. But, returns 222222

customerCreditInfo.push(5555)
console.log(customerCreditInfo)