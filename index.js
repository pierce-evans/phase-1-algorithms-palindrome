function isPalindrome(str) {
  // Write your algorithm here

    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   isPalindrome("A man, a plan, a canal. Panama");


/* if(palendrome) {
  return true
}
  else{
    return false
  }
*/

/*
  Set rules to a variable to allow for specific inputs.
  Break down algorithm for palendromes.
  Use if statement to dictate output.
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
