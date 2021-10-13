const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.startData = null;
  }

  root() {
    return this.startData;
  }

  add(data) {
    this.startData = addWithin(this.startData, data);

    function addWithin(node, data) {
        if(!node) {
            return new Node(data);
        }
        
        if (node.data === data) {
            return node;
        }

        if (data < node.data) {
            node.left = addWithin(node.left, data)
        } else {
            node.right = addWithin(node.right, data)
        }

        return node;
    }
}

  has(data) {

  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}