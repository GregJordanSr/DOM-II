// Your code goes here

// 1. Window alert

let page = window.addEventListener('load', e => {
    alert(`Welcome To The Fun Bus, enjoy the ride!!!!!`)
    page.preventDefault();
});

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
        console.log("mousemove");
          event.target.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        })
    
