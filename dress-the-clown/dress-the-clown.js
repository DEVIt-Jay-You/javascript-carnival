// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0
let clothingIndex = 0
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

//////////////////////////////////////////////////

function headOnRight() {
  if (clothingIndex === 0) {
    headIndex = headIndex === 5 ? 0 : (headIndex += 1)
    head.src = './images/head' + headIndex + '.png'
  } else if (clothingIndex === 1) {
    bodyIndex = bodyIndex === 5 ? 0 : (bodyIndex += 1)
    body.src = './images/body' + bodyIndex + '.png'
  } else if (clothingIndex === 2) {
    shoesIndex = shoesIndex === 5 ? 0 : (shoesIndex += 1)
    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
  // `${clothingIndex === 0 ? head : clothingIndex === 1 ? body : clothingIndex === 2 ? shoes}.src = "./images/"`
}

/////////////////////////////////////////////////
function headOnLeft() {
  if (clothingIndex === 0) {
    headIndex = headIndex === 0 ? 5 : (headIndex -= 1)
    head.src = './images/head' + headIndex + '.png'
  } else if (clothingIndex === 1) {
    bodyIndex = bodyIndex === 0 ? 5 : (bodyIndex -= 1)
    body.src = './images/body' + bodyIndex + '.png'
  } else if (clothingIndex === 2) {
    shoesIndex = shoesIndex === 0 ? 5 : (shoesIndex -= 1)
    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}

function up() {
  clothingIndex = clothingIndex === 2 ? 0 : (clothingIndex += 1)
  console.log(clothingIndex)
}

function down() {
  clothingIndex = clothingIndex === 0 ? 2 : (clothingIndex -= 1)
  console.log(clothingIndex)
}

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      headOnLeft()
      break
    case 'ArrowRight':
      headOnRight()
      break
    case 'ArrowUp':
      up()
      break
    case 'ArrowDown':
      down()
      break
  }
})
