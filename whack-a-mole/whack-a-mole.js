// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cells = document.getElementsByTagName('TD')

putMole()

function putMole() {
  let randNum = Math.floor(Math.random() * cells.length)
  let randCell = cells[randNum]
  randCell.innerHTML = "<img id='mole' src='./mole.PNG' />"
  console.log(randNum)
}

// document.getElementById('mole').onclick = function (e) {
//   // document.getElementById('mole').style.display = 'none'
//   document.getElementById('mole').remove()
//   putMole()
// }

document.getElementById('mole').onclick = function () {
  whackedMole()
}

function whackedMole(e) {
  // let audio = new Audio('./whack-audio.wav')
  // audio.play()
  document.getElementById('mole').remove()
  let randNum = Math.floor(Math.random() * cells.length)
  console.log(randNum)
  putMole()
}
