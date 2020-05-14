// A Class Decorator are used just before a class declaration.

// It can be used to modify, observe or replace any class definition.

// The class decorator are applied to constructor of user defined class. 

// The class decorator at runtime overrides original constructor logic with new one, returns only argument.

// We can log, modify or replace the original constructor within the class decorator function.

function invoke(constructor:Function) {
    // the new constructor behaviour
   const newconstructor: any = function(...args) {
      this.productId = 875;
      this.productName = 'Tablet';
      };
  // return newconstructor will override the original constructor
   return newconstructor;
 }
@invoke
class Product {
    public productId: number;
    public productName: string;
    constructor(productId: number, productName: string) {
        this.productId = productId;
        this.productName = productName;
        }
}
const p = new Product(326, 'Mobile');
console.log(`Product id is: ${p.productId}`);
console.log(`Product name is : ${p.productName}`);
 
