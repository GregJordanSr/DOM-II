// Your code goes here

// 1. Window alert

// let page = window.addEventListener('load', e => {
//     alert(`WARNING!!! The colors on this page change rapidly!!!!`)
    
// });

// 2. Change Background color

const bodyBGC = document.querySelector('body').addEventListener('mouseenter', event => {
    event.target.style.backgroundColor =" rgba(93, 181, 244, 0.69)";
})

//
const bodyBGCB = document.querySelector('body').addEventListener('mouseleave', event => {
    event.target.style.backgroundColor =" rgba(94, 84, 244, 0.69)";
})

// 3. Change the colors randomly

let words = document.querySelector('body');

    words.addEventListener('mousemove', event => {
          event.target.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        });
    
// 4.

let button = document.querySelectorAll('.btn');

button.forEach( item => { 
  item.addEventListener('click', event => {
  item.textContent = "We're the same";
})});


// 5. Nav

let nav = document.querySelectorAll('a')

nav.forEach( item => { 
  item.addEventListener('dblclick', event => {
  item.textContent = 'New label';
})});

// 6.
let logo = document.querySelector('.logo-heading');
document.addEventListener('scroll', event => {
  logo.style.transition = 'all 4s ease'
  logo.style.fontSize = '7rem';

})

// 7.

let img = document.querySelectorAll('img');

img.forEach(item => {
  document.addEventListener('scroll', event => {
    item.style.transition = 'all .3s ease'
    item.style.opacity = 0;

})});

// 8.

window.addEventListener('scroll', event => {
  if (window.scrollY === 0) {
    let img = document.querySelectorAll('img');
    img.forEach(item => {
        item.style.transition = 'all .3s ease'
        item.style.opacity = 1;
    })
  }
}) 
    
  
  

