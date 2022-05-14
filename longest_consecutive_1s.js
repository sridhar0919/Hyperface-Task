const maxConsecutiveOnes = (number) => {
  let count = 0;

  while (number != 0) {
    number = number & (number << 1);
    count++;
  }
  return count;
};

console.log(maxConsecutiveOnes(222));
