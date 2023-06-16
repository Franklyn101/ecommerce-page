
  // images switch
  document,addEventListener('DOMContentLoaded', () => {
  
  let mainImage = document.getElementById('mainImage');
  let thumbnail = document.querySelectorAll('.thumbnail');

  thumbnail.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {

      mainImage.src = thumbnail.src;
      mainImage.classList.add('enlarged')
    });
  });



  // counter
//   window.onload = function() {
  let count = 0

let minus = document.getElementById('minus');
let value = document.getElementById('value');
let add = document.getElementById('add');


minus.addEventListener('click', ()=> {
  count--;

  if(count < 0){
    count = 0
  }
 value.textContent = count

});



add.addEventListener('click', ()=> {
  count++;
  value.textContent = count

});

//   };



//   window.onload = function() {
    let slider = 0 
    let previous = document.getElementById('previous');
    let next = document.getElementById('next');
    let img = document.getElementById('mainImage')

    next.addEventListener('click', ()=>{
        slider++;
        if (slider == 1) {
            img.src = '/image-product-2.jpg'
        }
        if (slider == 2) {
            img.src = '/image-product-3.jpg'
        }
        if (slider == 3) {
            img.src ='/image-product-4.jpg'

        

        }else if (slider >= 4){
            img.src = '/image-product-1.jpg'
        }

    })

    previous.addEventListener('click', ()=>{
        slider--
        if (slider == 1) {
        img.src = '/image-product-2.jpg'
        }
        if (slider == 2) {
            img.src = '/image-product-3.jpg'
        }
        if (slider == 3) {
            img.src = '/image-product-4.jpg'
        } else if(slider <= 0) {
            img.src = '/image-product-1.jpg'
        }

    })



//   hamburger
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let isActive = false;

function toggleMenu() {
  isActive = !isActive; // Toggle the active state

  hamburger.classList.toggle('active');
  menu.classList.toggle('active');

  if (isActive) {
    document.addEventListener('click', closeMenu);
  } else {
    document.removeEventListener('click', closeMenu);
  }
}

function closeMenu(event) {
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    isActive = false;
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    document.removeEventListener('click', closeMenu);
  }
} 
  });