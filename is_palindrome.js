function isPalindrome(text) {
  // TODO write this function
  var palindrome = true;

  // Alter Original
  text = text.replace(/\s/g, '');
  text = text.replace(/,/g, '');
  text = text.toLowerCase();

  // Array conversion
  var original_text = text.split("");
  var reversed_text = text.split("");

  // Iteration calculation
  var length;
  if((reversed_text.length % 2) == 0){
    iterations = reversed_text.length / 2;
  }
  else {
    iterations = (reversed_text.length + 1) / 2;
  }

  // Reversal
  var temp;
  for(let j = 0; j < iterations; ++j){
    temp = reversed_text[j];
    reversed_text[j] = reversed_text[reversed_text.length - (j+1)];
    reversed_text[reversed_text.length - (j+1)] = temp;
  }

  // Comparison
  for(let i = 0; i < text.length; ++i){
    if(original_text[i] !== reversed_text[i]){
      palindrome = false;
    }
  }

  return palindrome;
}

module.exports = isPalindrome;
