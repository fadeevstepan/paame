function checkKeyType(key, expectedType) {
    return hasType(key, expectedType);
}

// Example usage
const key = 'log';
const Log = 'Log';

console.log(checkKeyType(key, Log)); // Should print true if the type matches
