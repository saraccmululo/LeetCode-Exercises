function sameFrequency(num1, num2) {
    let str1 = String(num1);
    let str2 = String(num2);

    // If lengths differ, they cannot have the same frequency
    if (str1.length !== str2.length) return false;

    let lookup = {};

    // Count frequency of each digit in str1
    for (let char of str1) {
        lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
    }

    // Check if str2 has the same frequency
    for (let char of str2) {
        if (!lookup[char]) {
            // Digit not found or overused
            return false;
        } else {
            lookup[char] -= 1;
        }
    }

    return true;
}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
