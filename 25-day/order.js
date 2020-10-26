function orderNames() {
  if (document.getElementById('input-file').isDefaultNamespace.length === 0) {
    alert('There was no file selected')
    return
  }

  let file = document.getElementById('input-file').files[0]
  let fileReader = new FileReader()

  fileReader.onload = (event) => {
    let textFile = event.target.result
    let names = [...textFile.split('\n')]

    console.time('InsertionSort')
    const sort2 = insertionSort(names)
    console.timeEnd('InsertionSort')

    console.time('QuickSort')
    quickSort(names, 0, names.length - 1)
    console.timeEnd('QuickSort')

    console.log(sort2)
    console.log(names)
  }

  fileReader.readAsText(file)
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
  let i = left

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

function insertionSort(unsortedArray) {
  let array = [...unsortedArray]
  for (let i = 0; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j, j - 1)
      j--
    }
  }
  return array
}