function orderDetails<T>(args: Array<T>): Array<T> {
    return args;
}

let orderid: Array<number> = [10,22,33,44];
let idList = orderDetails(orderid)

let ordername: Array<string> = ['mohit','gupta','infy']
let nameList = orderDetails(ordername)
