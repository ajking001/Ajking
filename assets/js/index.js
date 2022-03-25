const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
burger.addEventListener('click', () => {
    burger.classList.toggle('rotate')
})
burger.addEventListener ('click', () => {
    mobileMenu.classList.toggle('showMenu')
})

// cars modal
const carsModal = document.querySelector('.cars__modal');
const carsCard = document.querySelectorAll('.cars__card');
const closeCard = document.querySelector('.close_car');

carsCard.forEach(item => {
    item.addEventListener('click', () => {
        carsModal.classList.add('car_modal_open');
    })
});
closeCard.addEventListener ('click', () => {
    carsModal.classList.remove('car_modal_open')
})

var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
  // do something...
})


