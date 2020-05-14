// A Method Decorator are declared before needed method declaration.

// They are used to modify, observe, or replace a method definition.

// The decorator logic is applied to the Property Descriptor attribute of the respective method.

// The method decorator function will be invoked at runtime with the below three arguments:

// target - Either the constructor function of the class for a static member or the prototype of the class for an instance member

// Key - name of the decorated method

// descriptor - Property Descriptor value of the method

 


function logMethod() {
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    return  {
        value: ( ... args: any[]) => {
            console.log('Arguments: ', args.join(', '));
            const result = descriptor.value.apply(target, args);
            console.log('Total Payable Amount is: ', result);
            return result;
        }
    };
    };
}
class Product {
    @logMethod()
    calculateAmountPayable(price: number, quantity: number) {
        return price * quantity;
    }
}
const p: Product = new Product();
p.calculateAmountPayable(220, 3);
 
