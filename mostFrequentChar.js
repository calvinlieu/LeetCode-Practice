const mostFrequentChar = (s) => {
  let count = {};
  let max = null;
  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0
    }
    count[char] += 1;
  }
  
  for (let num of s) {
    if (max === null || count[num] > count[max]) {
      max = num;
    }
  }
  
  return max;
  
  return max;
};

