function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;
  
  // Loop until the pointers meet in the middle
  while (left < right) {
    // If characters at the pointers don't match, return false
    if (word[left] !== word[right]) {
      return false;
    }
    
    // Move the pointers towards the middle
    left++;
    right--;
  }
  
  // If the loop completes without returning false, the word is a palindrome
  return true;
}

/*
  Pseudocode:
  1. Initialize two pointers, left and right, pointing to the start and end of the word respectively.
  2. Loop until left is less than right:
     - If characters at the left and right pointers don't match, return false.
     - Move left pointer to the right and right pointer to the left.
  3. If the loop completes without returning false, return true as the word is a palindrome.
*/

/*
  Explanation:
  This function checks if a given word is a palindrome by comparing characters from the start and end of the word.
  It uses two pointers, left and right, which start at the beginning and end of the word respectively.
  The function iterates over the word, comparing characters at the pointers.
  If at any point the characters don't match, the function returns false, indicating the word is not a palindrome.
  If the loop completes without finding any mismatch, the function returns true, indicating the word is a palindrome.
*/

// Custom test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

