/*
Delete occurrences of an element if it occurs more than n times
*/

const test = require('node:test');
const assert = require('assert/strict');

function deleteNth(array, n) {
  const result = [];

  for (const number of array) {
    const count = result.filter(a => a === number).length;
    if (count >= n) {
      continue;
    } else {
      result.push(number);
    }
  }
  return result;
}

test('deleteNth', async t => {
  await t.test(
    'should create a new array that contains each number at most N times',
    () => {
      assert.deepStrictEqual(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
    }
  );

  await t.test(
    'should create a new array that contains each number at most N times',
    () => {
      assert.deepStrictEqual(
        deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
        [1, 1, 3, 3, 7, 2, 2, 2]
      );
    }
  );
});
