function isPalindrome(word) {
  // Write your algorithm here
  for (i=0; i < word.length; i++) {

      let j = word.length - 1;

      if (word[i] !== word[j]) {
        return false
      } else {
        j += 1
      }
      
      return true
  }
}

/* 
  Add your pseudocode here
*/

const str = "madam"

// take the firs letter of word

// compare the letter with the last letter of the string
// if it is the same, check the letter next to it
// if it is not much, return false
// if it is the last letter, return true

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
