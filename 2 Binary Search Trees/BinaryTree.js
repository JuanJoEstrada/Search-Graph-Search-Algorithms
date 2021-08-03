class BinaryTree {

  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value)
      } else {
        this.left = new BinaryTree(value, this.depth + 1)
      }
    } else {
      if (this.right) {
        this.right.insert(value)
      } else {
        this.right = new BinaryTree(value, this.depth + 1)
      }
    }
  }

  getNodeByValue(value) {
    if (this.value === value) {
      return this
    } else if ((this.left) && (value < this.value)) {
      return this.left.getNodeByValue(value)
    } else if (this.right) {
      return this.right.getNodeByValue(value)
    } else {
      return null
    }
  }

  // Inorder is when we perform an action on the left child node first, followed by the current node and the right child node
  depthFirstTraversal() {
    if (this.left) {
      this.left.depthFirstTraversal();
    }
    if (this.right) {
      this.right.depthFirstTraversal();
    }
    console.log(`Depth=${this.depth}, Value=${this.value}`);
  }

};

// Test
const bt = new BinaryTree(100);

// insert values to the BinaryTree
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);

console.log('\n')
console.log(bt.getNodeByValue(100))
console.log(bt.getNodeByValue(55))
console.log(bt.getNodeByValue(75))
console.log('\n')
bt.depthFirstTraversal()
console.log('\n')

module.exports = BinaryTree;