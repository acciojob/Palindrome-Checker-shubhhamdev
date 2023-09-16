// complete the given function

function palindrome(str){
	 const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the cleaned string with its reverse
  const reversedStr = cleanedStr.split('').reverse().join('');

  // Check if the cleaned string is a palindrome
  return cleanedStr === reversedStr;

}
module.exports = palindrome
