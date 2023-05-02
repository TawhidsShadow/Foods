const icons = document.querySelectorAll('.section-1-icons i');
const menuEl = document.querySelector('.menu');
let counter = 1;

setInterval(() => {
  counter++;

  const icon = document.querySelector('.section-1-icons .change'); // getting icon that has class name change
  icon.classList.remove('change'); // and removing class name change

  if (counter > icons.length) {
    icons[0].classList.add('change'); // hitting the last icon it resets to the first one
    counter = 1; // resetting counter
  } else {
    icon.nextElementSibling.classList.add('change'); // adding class name change to the next icon looping back to line 7
  }
}, 2000);

menuEl.addEventListener('click', () => {
  const targetEl = document.querySelectorAll('.target')
  targetEl.forEach(item => {
    item.classList.toggle('change');
  })
})