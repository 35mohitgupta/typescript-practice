function printData<T>(data: T): T{
    return data;
}

let data1 = printData<string>('Hello World!')
console.log(data1)

let data2 = printData('Hey')
console.log(data2)

let data3 = printData(4543)
console.log(data3)