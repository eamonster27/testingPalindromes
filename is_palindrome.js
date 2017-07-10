function isPalindrome(text) {
  // TODO write this function
  var palindrome = true;

  // Remove spaces
  text = text.replace(/\s/g, '');
  text = text.replace(/,/g, '');
  text = text.toLowerCase();

  var original_text = text.split("");
  // Reversal
  var reversed_text = text.split("");

  if((reversed_text.length % 2) == 0){
    for(let j = 0; j < reversed_text.length / 2; ++j){
      var temp = reversed_text[j];
      reversed_text[j] = reversed_text[reversed_text.length - (j+1)];
      reversed_text[reversed_text.length - (j+1)] = temp;
    }
  }
  else{
    for(let j = 0; j < (reversed_text.length + 1) / 2; ++j){
      var temp = reversed_text[j];
      reversed_text[j] = reversed_text[reversed_text.length - (j+1)];
      reversed_text[reversed_text.length - (j+1)] = temp;
    }
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
