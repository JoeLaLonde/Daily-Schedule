//All Input variables
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var input4 = document.getElementById("input4")
var input5 = document.getElementById("input5")
var input6 = document.getElementById("input6")
var input7 = document.getElementById("input7")
var input8 = document.getElementById("input8")
var input9 = document.getElementById("input9")

//all button variables
var saveButton1 = document.getElementById("button-addon1")
var saveButton2 = document.getElementById("button-addon2")
var saveButton3 = document.getElementById("button-addon3")
var saveButton4 = document.getElementById("button-addon4")
var saveButton5 = document.getElementById("button-addon5")
var saveButton6 = document.getElementById("button-addon6")
var saveButton7 = document.getElementById("button-addon7")
var saveButton8 = document.getElementById("button-addon8")
var saveButton9 = document.getElementById("button-addon9")

//Current date variables
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var currentDate = day + '/' + month + '/' + year;

//Variables for appending the current date
var parent = document.getElementById("currentDay")
var h2El = document.createElement("h2")

//setting the current date as a header
h2El.textContent = currentDate

//appending the current date to the header
parent.appendChild(h2El)



//button 1 event click function
saveButton1.addEventListener("click", function(event) {
    event.preventDefault();

    var task1 = input1.value;
    console.log(task1)
});

//button 2 event click function
saveButton2.addEventListener("click", function(event) {
    event.preventDefault();

    var task2 = input2.value;
    console.log(task2)
});

//button 3 event click function
saveButton3.addEventListener("click", function(event) {
    event.preventDefault();

    var task3 = input3.value;
    console.log(task3)
});

//button 4 event click function
saveButton4.addEventListener("click", function(event) {
    event.preventDefault();

    var task4 = input4.value;
    console.log(task4)
});

//button 5 event click function
saveButton5.addEventListener("click", function(event) {
    event.preventDefault();

    var task5 = input5.value;
    console.log(task5)
});

//button 6 event click function
saveButton6.addEventListener("click", function(event) {
    event.preventDefault();

    var task6 = input6.value;
    console.log(task6)
});

//button 7 event click function
saveButton7.addEventListener("click", function(event) {
    event.preventDefault();

    var task7 = input7.value;
    console.log(task7)
});

//button 8 event click function
saveButton8.addEventListener("click", function(event) {
    event.preventDefault();

    var task8 = input8.value;
    console.log(task8)
});

//button 9 event click function
saveButton9.addEventListener("click", function(event) {
    event.preventDefault();

    var task9 = input9.value;
    console.log(task9)
});