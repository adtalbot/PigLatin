var pigLatin = function(userInput) {
  var vowels = ["a","e","i","o","u"];
  for(var i = 0; i < vowels.length; i++) {
    if(userInput[0] === vowels[i]) {
      var newUserInput = userInput.slice(userInput.length - 1, userInput.length);
      return userInput.replace(newUserInput, "ay");
    } else {
      var newWord = userInput.split("");
      var newWord2 = newWord.shift();
      var result = (newWord.join("") + newWord2);
      return result;


    }
  };
};
