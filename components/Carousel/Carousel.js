class Carousel {}

let carousel = document.querySelector('.carousel')
const left = carousel.firstElementChild
const right = carousel.lastElementChild
const imgs = carousel.querySelectorAll('img')
let index = 0
imgs[index].style.display = 'block'
left.addEventListener('click', () => {
  --index
  if (index < 0) index = 3
  imgs.forEach(img => (img.style.display = 'none'))
  imgs[index].style.display = 'block'
  TweenLite.fromTo(imgs[index], 1, { opacity: 0, ease: Power0.easeInOut })
})

right.addEventListener('click', () => {
  ++index
  if (index > 3) index = 0
  imgs.forEach(img => (img.style.display = 'none'))
  imgs[index].style.display = 'block'
  TweenLite.from(imgs[index], 1, { opacity: 0, ease: Power0.easeInOut })
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
