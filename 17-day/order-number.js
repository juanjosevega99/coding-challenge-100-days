function sortNumbers(numbers) {
  numbers.sort((a, b) => b - a)
  return numbers
}

const quantity = parseInt(prompt('How many numbers do you want order: '))
const numbers = []
for (let i = 0; i < quantity; i++) {
  numbers.push(parseFloat(prompt(`Enter the number (${i + 1}/${quantity})`)))
}

alert(`Numbers orders: ${numbers}`)

// version 2

function reverseQuickSort(array) {
  let sortedArray = quickSort(array, 0, array.length - 1)
  console.log(sortedArray.reverse());
}

function quickSort(array, left, right) {
  if (left < right) {
    index = quickSortPartition(array, left, right)
    quickSort(array, left, index - 1)
    quickSort(array, index + 1, right)
  }
}

function quickSortPartition(array, left, right) {
  let pivot = array[right]
  let i = let

  for (let j = 0; j < array.length; j++) {
    if (array[j] < pivot) {
      swap(array, i, j)
      i++
    }
  }
  swap(array, i, right)

  return i
}

function swap(array, numA, numB) {
  let aux = array[numA]
  array[numA] = array[numB]
  array[numB] = aux
}