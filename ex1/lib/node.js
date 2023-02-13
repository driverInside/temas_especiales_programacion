/**
 * +----------+
 * |   Node   |
 * +----------+
 * | value    |
 * | next     |
 * +----------+
 */
class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }

  getValue () {
    return this.value;
  }

  setValue (value) {
    this.value = value;
  }
}

const firstNode = new Node(3);
console.log(firstNode.getValue());
firstNode.setValue(7);
console.log(firstNode.getValue());


// Class: definition
// Object: class' instance
