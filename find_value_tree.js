const containValue = (value) => {
  if (this.root === null) return false;

  let current = this.root;
  let found = false;

  while (current && !found) {
    if (value < current.value) {
      current = current.left;
    } else if (value > current.value) {
      current = current.right;
    } else {
      return true;
    }
  }

  return false;
};
