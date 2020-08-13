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