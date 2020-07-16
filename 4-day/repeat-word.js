let str = prompt('Message to repeat')
let num = prompt('Number of times')

function loop(message, times) {
  if (times <= 1) {
    return message
  } else {
    return loop(message, times - 1) + ' ' + message + ' '
  }
}

console.log(loop(str, num))