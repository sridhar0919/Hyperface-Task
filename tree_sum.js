function addBT(root) {
  if (root == null) return 0;
  return root.value + addBT(root.left) + addBT(root.right);
}

console.log(addBT(root));
