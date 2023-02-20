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
    
  }
}

module.exports = Math;
