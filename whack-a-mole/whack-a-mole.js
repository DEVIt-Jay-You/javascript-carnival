// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let holes = Array.from(document.getElementsByTagName('TD'))

putMole(holes)

function putMole(holes) {
  let randNum = Math.floor(Math.random() * holes.length)
  let randHole = holes[randNum]
  randHole.innerHTML = "<img id='mole' src='./mole.PNG' />"
  document.getElementById('mole').onclick = function () {
    whackedMole()
  }
}

function whackedMole(e) {
  let audio = new Audio('./whack-audio.wav')
  audio.play()
  document.getElementById('mole').remove()
  putMole(holes)
}
