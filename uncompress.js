const uncompress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;
  let numbers = "0123456789"
  
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j++
    } else {
      let num = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        result.push(s[j])
      }
      j++;
      i = j;
    }
  }
  
  return result.join("")
};
