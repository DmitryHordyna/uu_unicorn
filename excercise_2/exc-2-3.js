function isPalindrom(word) {
  return word.split('').reverse().join('') === word;
}

console.log(isPalindrom('ohoho')); //true
