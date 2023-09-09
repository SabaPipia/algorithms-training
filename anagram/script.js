function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < word1.length; i++) {
    let letter = word1[i];
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }
  for (let i = 0; i < word2.length; i++) {
    let letter = word2[i];
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
