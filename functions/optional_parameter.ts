function username(first: string, second: string): string {
    if (second)
        return `${first} ${second}`
    return first
}

// console.log(username('mohit')) Error: Expected 2 arguments, but got 1. An argument for 'second' was not provided.
console.log(username('mohit','gupta'))

// Optional parameter must appear after all the mandatory parameters of a function.
function username2(first: string, second?: string): string {
    if (second)
        return `${first} ${second}`
    return first
}

console.log(username2('mohit'))
console.log(username2('mohit','gupta'))