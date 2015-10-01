var pigLatin = function(userInput) {
  var vowels = ["a","e","i","o","u"];
  for(var i = 0; i < vowels.length; i++) {
    if(userInput[0] === vowels[i]) {
      var newUserInput = userInput.slice(userInput.length - 1);
      return userInput.replace(newUserInput, "ay");
    } else {
      return userInput;
    }
  }
};
