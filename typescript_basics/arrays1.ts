let arr1: string[] = ['aa', 'bb', 'cc']
let arr2: Array<string> = ['ss', 'dd', 'eee']
let arr3: any = [111, "ffff", true]

console.log('arr1',arr1)

arr1.push('dd')
console.log("arr1",arr1)

arr2[4] = '333' //["ss", "dd", "eee", empty, "333"] added data using indexing
console.log("arr2",arr2)

console.log(arr2.pop())
console.log("arr2",arr2)

arr1.splice(1, 2)
console.log("arr1",arr1)
