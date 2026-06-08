const secretCode = "9/6/2009";

/* LOGIN */

function checkPassword(){

const input =
document.getElementById(
"passwordInput"
).value;

if(input === secretCode){

document.getElementById(
"loginPage"
).style.display = "none";

document.getElementById(
"mainPage"
).classList.remove(
"hidden"
);

}else{

document.getElementById(
"error"
).innerText =
"Wrong code 😭";

}

}

/* MODALS */

function openModal(id){

document.getElementById(
id
).style.display = "block";

}

function closeModal(id){

document.getElementById(
id
).style.display = "none";

}

window.onclick = function(event){

const modals =
document.querySelectorAll(
".modal"
);

modals.forEach(modal=>{

if(event.target===modal){

modal.style.display =
"none";

}

});

};

/* AGE COUNTER */

const birthDate =
new Date(
"2009-06-09T00:00:00"
);

function updateAgeCounter(){

const now =
new Date();

let years =
now.getFullYear() -
birthDate.getFullYear();

let months =
now.getMonth() -
birthDate.getMonth();

let days =
now.getDate() -
birthDate.getDate();

if(days < 0){

months--;

const lastMonth =
new Date(
now.getFullYear(),
now.getMonth(),
0
);

days +=
lastMonth.getDate();

}

if(months < 0){

years--;

months += 12;

}

const diff =
now - birthDate;

const hours =
Math.floor(
diff /
(1000*60*60)
);

const minutes =
Math.floor(
diff /
(1000*60)
);

const counter =
document.getElementById(
"ageCounter"
);

if(counter){

counter.innerHTML =

`

<p>${years} Years</p>

<p>${months} Months</p>

<p>${days} Days</p>

<p>${hours.toLocaleString()} Hours</p>

<p>${minutes.toLocaleString()} Minutes</p>
`;

}

}

updateAgeCounter();

setInterval(
updateAgeCounter,
60000
);

/* CATCH THE CAT */

let score = 0;

function moveCat(){

const cat =
document.getElementById(
"cat"
);

if(!cat) return;

const x =
Math.random()*80;

const y =
Math.random()*80;

cat.style.left =
x + "%";

cat.style.top =
y + "%";

}

document.addEventListener(
"click",
function(e){

if(
e.target.id==="cat"
){

score++;

document.getElementById(
"score"
).innerText =
"Score: " + score;

moveCat();

if(score===10){

alert(

"🎉 Congratulations!\n\nYou caught the cat.\n\nNow go touch grass 😭"

);

score = 0;

document.getElementById(
"score"
).innerText =
"Score: 0";

}

}

}
);
