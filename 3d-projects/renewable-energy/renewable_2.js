let circleMaxSize = 100;
let circleMinSize = 50;
let interval = 2000;

document.querySelector('.renewable_2 .add').addEventListener('click', (e) => {
  circleMaxSize += 100;
  circleMinSize = circleMaxSize - 85
});
document.querySelector('.renewable_2 .subtract').addEventListener('click', (e) => {
  circleMaxSize >= 200 ? circleMaxSize -= 100 : null;
  circleMinSize = circleMaxSize - 85
});


const randomColorNumber = () => {
  return ((Math.random() * 255) + 50).toFixed(0);
};

const randomize = () => {
  let circles = document.querySelectorAll(".renewable_2 .circle");
  
  circles.forEach(circle => {
    const size = ((Math.random() * circleMaxSize) + circleMinSize).toFixed(0);
    circle.style.height = `${size}px`;
    circle.style.width = `${size}px`;
    circle.style.top = `${(Math.random() * window.innerHeight)}px`
    circle.style.left = `${(Math.random() * window.innerWidth)}px`
    circle.style.background = `linear-gradient(
    ${randomColorNumber()}deg, 
    rgb(${randomColorNumber()},${randomColorNumber()},${randomColorNumber()}) 0%,             rgb(${randomColorNumber()},${randomColorNumber()},${randomColorNumber()}) 100%)`;
    
  });  
  
};

setInterval(() => {
  randomize();
}, interval);