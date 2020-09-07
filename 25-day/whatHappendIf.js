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