const Node = require('./Node');

describe('Node class', () => {
  it('should return the node value', () => {
    const node = new Node('foo');

    expect(node.getValue()).toBe('foo');
  });

  it('should set the node value', () => {
    const node = new Node('foo');
    node.setValue('bar');

    expect(node.getValue()).toBe('bar');
  });
});
