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

module.exports = Node;