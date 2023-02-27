const Math = require('./Math');

describe('Math class', () => {
  // test('first test', () => {
  //   expect(1 + 1).toBe(2);
  // });
  
  it('should add two numbers', () => {
    const math = new Math();

    expect(math.add).toBeDefined();
    expect(math.add(1, 1)).toBe(2);
    expect(math.add(5, 6)).toBe(11);
    expect(math.add(1, -1)).toBe(0);
    expect(math.add(-1, -1)).toBe(-2);
  });

  it('should get the sum of the elements of an array of numbers', () => {
    const math = new Math();
    const arr = [4, 5, 2, 8, 11, 9];

    const sum = math.sumArr(arr)

    expect(math.sumArr).toBeDefined();
    expect(sum).toBe(39);
  });

  it('should return the average of an array of numbers', () => {
    const math = new Math();
    const arr = [4, 5, 2, 8, 11, 9];

    const avg = math.avg(arr)

    expect(math.avg).toBeDefined();
    expect(avg).toBe(6.5);
  });

  it('the unique values of an array of numbers', () => {
    const math = new Math();
    const arr = [1, 3, 2, 2, 6, 1, 5, 4, 2, 3, 4];

    const uniques = math.uniques(arr)

    expect(math.uniques).toBeDefined();
    expect(uniques).toStrictEqual([1, 3, 2, 6, 5, 4]);
  });
});
