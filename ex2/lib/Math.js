class Math {
  /**
   * add
   * @param {number} a the first number to add
   * @param {number} b the second number to add 
   * @returns {number} the sum of a and b
   */
  add (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('both numbers must be type number')
    }
    return a + b;
  }

  /**
   * sumArr
   * @param {Array<number>} arr the array of numbers to add
   */
  sumArr (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  avg (arr) {
    const sum = this.sumArr(arr);

    return sum / arr.length;
  }

  uniques (arr) {
    // return [...new Set(arr)];
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (!newArr.includes(element)) {
        newArr.push(element);
      }
    }

    return newArr;
  }
}

module.exports = Math;
