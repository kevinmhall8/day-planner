document.addEventListener("DOMContentLoaded", function() {

// Adding the date to the page

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

document.getElementById("full-date").innerHTML = today

//variables for the divs that will change color depending on hour
var nineColor = document.getElementById("9am");
var tenColor = document.getElementById("10am");
var elevenColor = document.getElementById("11am");
var twelveColor = document.getElementById("12pm");
var oneColor = document.getElementById("1pm");
var twoColor = document.getElementById("2pm");
var threeColor = document.getElementById("3pm");
var fourColor = document.getElementById("4pm");
var fiveColor = document.getElementById("5pm");

//function to change color of div depending on hour
function colorSwap() {
    var currentTime = new Date().getHours();
    if (9 < currentTime) {
     nineColor.style.backgroundColor = "lightcoral";
    } else if (9 === currentTime) {
    nineColor.style.backgroundColor = "#fdfd96";
    } else {
    nineColor.style.backgroundColor = "lightgreen";
    }
    if (10 < currentTime) {
    tenColor.style.backgroundColor = "lightcoral";
    } else if (10 === currentTime){
    tenColor.style.backgroundColor = "#fdfd96";
    } else {
    tenColor.style.backgroundColor = "lightgreen"
    }
    if (11 < currentTime) {
    elevenColor.style.backgroundColor = "lightcoral";
    } else if (11 === currentTime){
    elevenColor.style.backgroundColor = "#fdfd96";
    } else {
    elevenColor.style.backgroundColor = "lightgreen"
    }
    if (12 < currentTime) {
    twelveColor.style.backgroundColor = "lightcoral";
    } else if (12 === currentTime){
    twelveColor.style.backgroundColor = "#fdfd96";
    } else {
    twelveColor.style.backgroundColor = "lightgreen"
    }
    if (13 < currentTime) {
    oneColor.style.backgroundColor = "lightcoral";
    } else if (13 === currentTime){
    oneColor.style.backgroundColor = "#fdfd96";
    } else {
    oneColor.style.backgroundColor = "lightgreen"
    }
    if (14 < currentTime) {
    twoColor.style.backgroundColor = "lightcoral";
    } else if (14 === currentTime){
    twoColor.style.backgroundColor = "#fdfd96";
    } else {
    twoColor.style.backgroundColor = "lightgreen"
    }
    if (15 < currentTime) {
    threeColor.style.backgroundColor = "lightcoral";
    } else if (15 === currentTime){
    threeColor.style.backgroundColor = "#fdfd96";
    } else {
    threeColor.style.backgroundColor = "lightgreen"
    }
    if (16 < currentTime) {
    fourColor.style.backgroundColor = "lightcoral";
    } else if (16 === currentTime){
    fourColor.style.backgroundColor = "#fdfd96";
    } else {
    fourColor.style.backgroundColor = "lightgreen"
    }
    if (17 < currentTime) {
    fiveColor.style.backgroundColor = "lightcoral";
    } else if (17 === currentTime){
    fiveColor.style.backgroundColor = "#fdfd96";
    } else {
    fiveColor.style.backgroundColor = "lightgreen"
    }

}
//activating function
colorSwap()

//variables for the user inputs and buttons
var nineToDo = document.querySelector("#input9")
var tenToDo = document.querySelector("#input10")
var elevenToDo = document.querySelector("#input11")
var twelveToDo = document.querySelector("#input12")
var oneToDo = document.querySelector("#input1")
var twoToDo = document.querySelector("#input2")
var threeToDo = document.querySelector("#input3")
var fourToDo = document.querySelector("#input4")
var fiveToDo = document.querySelector("#input5")
var saveButton = document.querySelector(".button")


//setting local storage to autofill on load
var savedList = JSON.parse(localStorage.getItem("fullList"));
nineToDo.textContent = savedList.nineAMSaved;
tenToDo.innerHTML = savedList.tenAMSaved;
elevenToDo.innerHTML = savedList.elevenAMSaved;
twelveToDo.innerHTML = savedList.twelvePMSaved;
oneToDo.innerHTML = savedList.onePMSaved;
twoToDo.innerHTML = savedList.twoPMSaved;
threeToDo.innerHTML = savedList.threePMSaved;
fourToDo.innerHTML = savedList.fourPMSaved;
fiveToDo.innerHTML = savedList.fivePMSaved;

//string for local storage
saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var fullList = {
        nineAMSaved: nineToDo.innerHTML,
        tenAMSaved: tenToDo.innerHTML,
        elevenAMSaved: elevenToDo.innerHTML,
        twelvePMSaved: twelveToDo.innerHTML,
        onePMSaved: oneToDo.innerHTML,
        twoPMSaved: twoToDo.innerHTML,
        threePMSaved: threeToDo.innerHTML,
        fourPMSaved: fourToDo.innerHTML,
        fivePMSaved: fiveToDo.innerHTML
    }

//saving string to local storage    
    localStorage.setItem("fullList", JSON.stringify(fullList));

//setting local storage to autofill on click    
    var savedList = JSON.parse(localStorage.getItem("fullList"));
    nineToDo.textContent = savedList.nineAMSaved;
    tenToDo.innerHTML = savedList.tenAMSaved;
    elevenToDo.innerHTML = savedList.elevenAMSaved;
    twelveToDo.innerHTML = savedList.twelvePMSaved;
    oneToDo.innerHTML = savedList.onePMSaved;
    twoToDo.innerHTML = savedList.twoPMSaved;
    threeToDo.innerHTML = savedList.threePMSaved;
    fourToDo.innerHTML = savedList.fourPMSaved;
    fiveToDo.innerHTML = savedList.fivePMSaved;

 });


})