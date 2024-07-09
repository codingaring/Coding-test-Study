function solution(arr) {
  let i = 1;
  let double = 1;

  while (double < arr.length) {
    double = 2 ** i;
    i++;
  }

  if (arr.length === double) {
    return arr;
  } else if (arr.length < double) {
    const go = double - arr.length;
    for (let i = 1; i <= go; i++) {
      arr.push(0);
    }
    return arr;
  }
  return arr;
}
