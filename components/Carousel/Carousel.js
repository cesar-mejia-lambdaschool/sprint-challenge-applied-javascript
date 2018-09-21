class Carousel {}

let carousel = document.querySelector('.carousel')
const left = carousel.firstElementChild
console.log('left', left)
const right = carousel.lastElementChild
console.log('right', right)
const imgs = carousel.querySelectorAll('img')
console.log('imgs', imgs)
let index = 0

left.addEventListener('click', () => {
  --index
  if (index < 0) index = 3
  imgs.forEach(img => (img.style.display = 'none'))
  imgs[index].style.display = 'block'
})

right.addEventListener('click', () => {
  ++index
  if (index > 3) index = 0
  imgs.forEach(img => (img.style.display = 'none'))
  imgs[index].style.display = 'block'
})

console.log('index', index)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
