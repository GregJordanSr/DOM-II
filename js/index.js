// Your code goes here

// Change Background color 2
document.getElementById('contain').addEventListener('dblclick', changeColor);

function changeColor() {
    this.style.backgroundColor = "blue";
    return false;
}

// buttons 3
document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("btn").innerHTML = "We're the same";
};

// Window load 4
window.addEventListener('load', e => {
    alert(`Welcome!`)
  });


let words = document.querySelectorAll('p');
    words.forEach(item => {
        item.addEventListener('mousemove', event => {
          item.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    }
,);

const words = document.querySelectorAll('p');
words.forEach(item => {
  item.addEventListener('mousemove', _ => {
    item.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  });
)};
