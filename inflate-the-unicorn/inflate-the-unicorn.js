// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = Array.from(document.getElementsByClassName('inflate-an-image'))
let uniOne = unicorns[0]
let uniTwo = unicorns[1]
let uniThree = unicorns[2]

function inflate(uniImg) {
  uniImg.addEventListener('click', function () {
    let uniSrc = uniImg.getAttribute('src')
    if (uniSrc === './images/unicorn-0.png') {
      uniImg.setAttribute('src', './images/unicorn-1.png')
    } else if (uniSrc === './images/unicorn-1.png') {
      uniImg.setAttribute('src', './images/unicorn-2.png')
    } else if (uniSrc === './images/unicorn-2.png') {
      uniImg.setAttribute('src', './images/unicorn-3.png')
    } else {
      alert(`Unicorn Number ${unicorns.indexOf(uniImg) + 1} says thank you!`)
    }
  })
}

inflate(uniOne)
inflate(uniTwo)
inflate(uniThree)
