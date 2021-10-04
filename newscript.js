
//grab the element from the document

let btnFirstName = document.querySelector("#btnFirstName");
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");
let simleyDiv = document.querySelector(".simleyDiv");
let welcomeText = document.querySelector("#welcomeText");

//let btnFirstName = document.getElementById('btnFirstName');
//console.log(btnFirstName);

// add an eventlistener

btnFirstName.addEventListener("click",displaySecond);

// define the function

function displaySecond(){
    //alert('here');
    if (firstName.value === ""){
        errMsg.innerHTML = "The textbox cannot be blank.";
        errMsg.style.color = "red";
    } else{
        simleyDiv.style.display = "block";
//let firstName = document.querySelector("#firstName");
welcomeText.innerHTML = `Welcome ${firstName.value}. What is your mood today?`

    }
}

// let sad = document.querySelector("#sad");
// let displayMood = document.querySelector("#displayMood");

// sad.addEventListener("mouseover",function2);

// function function2(){
//           displayMood.innerHTML = sad.getAttribute("alt");
//           displayMood.style.color = "red";
// }

// let imgtag = document.querySelectorAll("imgtag");
// let displayMood = document.querySelector("displayMood");

// for(let i = 0; i<imgtag.length; i++){
//     imgtag[i].addEventListener("mouseover", ()=> {
//         displayMood.innerHTML = imgtag[i].getAttribute("alt");
//         displayMood.style.color = "red";
// })
// }

let sad = document.querySelector("#sad");
let stressed = document.querySelector("#stressed");
let happy = document.querySelector("#happy");
let imgtag = document.querySelector("imgtag");
let displayMood = document.querySelector("#displayMood");
let displayMessage = document.querySelector("#displayMessage");

sad.addEventListener("mouseover", displayAlt);

function displayAlt() {
  displayMood.innerHTML = sad.getAttribute("alt");
  displayMood.style.color = "red";
}

stressed.addEventListener("mouseover",displaystressed);

function displaystressed(){
  displayMood.innerHTML = stressed.getAttribute("alt");
  displayMood.style.color = "yellow";
}

happy.addEventListener("mouseover", displayhappy);

function displayhappy(){
  displayMood.innerHTML = happy.getAttribute("alt");
  displayMood.style.color = "green";
}



let btnMessage = document.querySelector("#btnMessage");
btnMessage.addEventListener("click", displayLastMessage);
function displayLastMessage() {
  displayMessage.style.display = "block";
  if (displayMood.style.color === "red"){
  displayMessage.innerHTML = `You need to take a vacation <br/>
  <img src="./myimages/beach.jpg" alt="beach" class="beachimg">`;}
  else if(displayMood.style.color === "yellow"){
  displayMessage.innerHTML = `You need to do some meditation <br/>
  <img src="./myimages/meditation.jpg" alt="meditation" class="meditationimage">`;  }
  else if(displayMood.style.color === "green"){
    displayMessage.innerHTML = `You are having a great day <br/>
    <img src="./myimages/day.jpg" alt="Happy Day">`;
  }
}
 







