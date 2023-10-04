const compress = (s) => {
  // we approach using the 2 pointer method.
  let i = 0;
  let j = 0;

  // utilize an array instead of a string because pushing a value into an array happens in constant time.
  let result = [];


  //while our second pointer is less than the length of s
  while (j <= s.length) {
    //if the value of the two pointers are the same, we continue to move j until it is a different character.
    if (s[i] === s[j]) {
      j++
    } else {
      //else, we would grab the number of times the character has passed using our 2 pointers, and push the number as well as the character to the result. 
      let number = j - i;
      if (number === 1) {
        result.push(s[i])
      } else {
        result.push(number, s[i]);
      }
      // reset the pointers.
      i = j;
    }
  }
  
  return result.join("");
};
