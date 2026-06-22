// Typing Animation

const roles = [

"Full Stack Developer",
"Python Developer",
"AI Enthusiast",
"React Developer",
"Node.js Developer",
"Problem Solver"

];

let roleIndex = 0;

function changeText(){

document.getElementById("typing").innerText =
roles[roleIndex];

roleIndex++;

if(roleIndex >= roles.length){

roleIndex = 0;

}

}

setInterval(changeText,2000);

changeText();


// Dark Light Theme

function toggleTheme(){

document.body.classList.toggle("light");

}


// Animated Counter

const counters =
document.querySelectorAll(".card h1");

const speed = 100;

counters.forEach(counter => {

const animate = () => {

const value =
+counter.innerText.replace("+","");

const data =
+counter.getAttribute("data-count") || value;

const time =
data / speed;

if(value < data){

counter.innerText =
Math.ceil(value + time);

setTimeout(animate,20);

}else{

counter.innerText =
data + "+";

}

};

animate();

});


// Scroll Reveal Animation

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

}

);

document
.querySelectorAll(
".card"
)
.forEach(el=>{

observer.observe(el);

});


// Mouse Glow Effect

document.addEventListener(
"mousemove",
(e)=>{

const glow =
document.querySelector(
".mouse-glow"
);

if(glow){

glow.style.left =
e.pageX + "px";

glow.style.top =
e.pageY + "px";

}

}
);


// Page Loading Animation

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

}
);


// Button Ripple Effect

document
.querySelectorAll(".btn")
.forEach(button=>{

button.addEventListener(
"click",
function(e){

let circle =
document.createElement(
"span"
);

circle.style.left =
e.offsetX + "px";

circle.style.top =
e.offsetY + "px";

circle.classList.add(
"ripple"
);

this.appendChild(
circle
);

setTimeout(()=>{

circle.remove();

},600);

});

});


// Smooth Scroll

document
.querySelectorAll(
'nav a'
)
.forEach(anchor=>{

anchor.addEventListener(
'click',

function(e){

e.preventDefault();

document
.querySelector(
this.getAttribute(
'href'
)
)
.scrollIntoView({

behavior:'smooth'

});

});

});


// Welcome Message

console.log(
"Welcome to Abhijat Patel Portfolio"
);