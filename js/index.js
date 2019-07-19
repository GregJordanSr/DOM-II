// Your code goes here



let page = window.addEventListener('load', e => {
    alert(`WARNING!!! The colors on this page change rapidly!!!! It might cause epileptic fits!!!`)
    
});



const bodyBGC = document.querySelector('body').addEventListener('mouseenter', event => {
    event.target.style.backgroundColor =" rgba(93, 181, 244, 0.69)";
})


const bodyBGCB = document.querySelector('body').addEventListener('mouseleave', event => {
    event.target.style.backgroundColor =" rgba(94, 84, 244, 0.69)";
})



let words = document.querySelector('body');

    words.addEventListener('mousemove', event => {
          event.target.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        });
    


let button = document.querySelectorAll('.btn');

button.forEach( item => { 
  item.addEventListener('click', event => {
  item.textContent = "We're the same";
})});




let nav = document.querySelectorAll('a')

nav.forEach( item => { 
  item.addEventListener('dblclick', event => {
  item.textContent = 'New label';
})});


let logo = document.querySelector('.logo-heading');
document.addEventListener('scroll', event => {
  logo.style.transition = 'all 4s ease'
  logo.style.fontSize = '7rem';

})



let img = document.querySelectorAll('img');

img.forEach(item => {
  document.addEventListener('scroll', event => {
    item.style.transition = 'all .3s ease'
    item.style.opacity = 0;

})});



window.addEventListener('scroll', event => {
  if (window.scrollY === 0) {
    let img = document.querySelectorAll('img');
    img.forEach(item => {
        item.style.transition = 'all .3s ease'
        item.style.opacity = 1;
    })
  }
}) 
    
  
  

