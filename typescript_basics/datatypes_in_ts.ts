let boolVar:boolean = true;

let numVar:number = 444.33;

let strVar: string = 'hello_chris';

let stringTemplate1 = `number - ${numVar}`;
let stringTemplate2 = `Dear X,
    X wants Y and Y wants Z 
        and     Z wants A and so on...`;

let anyVar: any = 333;
anyVar = "ss -33";
anyVar = false;

let voidVar: void = undefined;
//voidVar = null; //only undefined allowed for void

console.log(boolVar)
console.log(numVar)
console.log(strVar)
console.log(stringTemplate1)
console.log(stringTemplate2)
console.log(anyVar)
console.log(voidVar)


