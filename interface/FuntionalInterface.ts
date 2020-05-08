// Interfaces can be used to define the structure of functions similar to defining structure of objects.

// Once the interface for a function type is declared, we can declare variables of that type and assign functions to the variable as long as the function matches the signature defined in the interface.

// Function type interface is used to enforce same number and type of parameters to any function which is been declared with the function type interface.

function createCustomerId(name: string, id: number) {
    return `${name} - ${id}`;
}

interface StringGenerator{
    (chars: string, nums: number): string
}

let IdGenerator: StringGenerator;

IdGenerator = createCustomerId;

console.log(IdGenerator('mohit',35353))