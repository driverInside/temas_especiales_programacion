const Node = require('./node');

/**
 * +----------------+
 * |   LinkedList   |
 * +----------------+
 * | head           |
 * | tail           |
 * | size           |
 * +----------------+
 * | toString       |
 * |                |
 * +----------------+
 */
class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty () {
    /* if (!this.size) {
      return true;
    } else {
      return false;
    } */
    // return !this.size === false
    return !this.size ? true : false;
  }

  /**
   * appendToStart
   * @param {number} value The new node value 
   */
  appendToStart (value) {
    // 1. Create a new node
    const newNode = new Node(value);
    // 2. new node points to head
    newNode.next = this.head
    // 3. head = new node
    this.head = newNode
    // 5 if list is empty then, this tail points to new Node
    if (this.isEmpty()) {
      this.tail = newNode;
    }
    // 4. ++this.size
    ++this.size;

  }

  appendToEnd (value) {
    // 1. Create a new node
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 2. tail points to new node
      this.tail.next = newNode;
      // tail = new node
      this.tail = newNode;
    }

    ++this.size
  }

  exists (value) {
    if (this.isEmpty()) return false;

    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  // TODO: update this method
  toString() {
    if (this.isEmpty()) return 'this list is empty';

    let str= '';
    let currentNode = this.head;

    while (currentNode !== null) {
      // str +=  currentNode.value + '-> ';
      str +=  `${currentNode.value} -> `;
      currentNode = currentNode.next;
    }

    str += 'null';
    return str;
  }
}

const myLinkedList = new LinkedList();
// const linkedString = myLinkedList.toString();

// console.log(linkedString)
console.log(myLinkedList.isEmpty()) // true

console.log(myLinkedList.toString()); // 'this list is empty'

myLinkedList.appendToStart(3); 

console.log(myLinkedList.isEmpty()) // false

console.log(myLinkedList.exists(3)); // true
console.log(myLinkedList.exists(5)); // false
console.log(myLinkedList.exists(7)); // false

console.log(myLinkedList.toString()); // 3 -> null

myLinkedList.appendToEnd(7);
myLinkedList.appendToEnd(1);
myLinkedList.appendToEnd(23);
myLinkedList.appendToEnd(12);

console.log(myLinkedList.toString()); // 3 - 7- 1- 23- 12 -> null


console.log(myLinkedList.exists(13)); // false
console.log(myLinkedList.exists(23)); // true
console.log(myLinkedList.exists(2)); // false
console.log(myLinkedList.exists(12)); // true
