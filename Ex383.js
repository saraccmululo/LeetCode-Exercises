const canConstruct = (ransomNote, magazine) => {
  // Step 1: Create an object to store letter counts from magazine
  const magazineCount = {};

  // Step 2: Count how many times each letter appears in magazine
  for (let char of magazine) {
    if (magazineCount[char]) {
      magazineCount[char]++; // If the letter is already there, add 1
    } else {
      magazineCount[char] = 1; // If it's not there, start with 1
    }
  }

  // Step 3: Go through each letter in the ransom note
  for (let char of ransomNote) {
    if (!magazineCount[char]) {
      // If the letter doesn't exist or was used up
      return false;
    }
    magazineCount[char]--; // Use the letter, so subtract 1
  }

  // Step 4: If we didn't return false, it means all letters are available
  return true;
}

