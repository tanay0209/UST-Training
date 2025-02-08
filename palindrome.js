const palindrome = (number) => {
    let reversed = 0;
    const originalNumber = number
    while (number > 0) {
        const digit = number % 10
        number = Math.round(number / 10)
        reversed = reversed * 10 + digit
    }
    return originalNumber === reversed
}

console.log(palindrome(1002));
