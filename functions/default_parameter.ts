function getUsername(first: string="Tanisha", second: string): string {
    if (second)
        return `${first} ${second}`
    return first
}

console.log(getUsername('Mohit', 'gupta'))

console.log(getUsername(undefined,'sharma'))