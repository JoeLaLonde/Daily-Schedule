//All Input variables
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var input5 = document.getElementById("input5");
var input6 = document.getElementById("input6");
var input7 = document.getElementById("input7");
var input8 = document.getElementById("input8");
var input9 = document.getElementById("input9");

//all button variables
var saveButton1 = document.getElementById("button-addon1");
var saveButton2 = document.getElementById("button-addon2");
var saveButton3 = document.getElementById("button-addon3");
var saveButton4 = document.getElementById("button-addon4");
var saveButton5 = document.getElementById("button-addon5");
var saveButton6 = document.getElementById("button-addon6");
var saveButton7 = document.getElementById("button-addon7");
var saveButton8 = document.getElementById("button-addon8");
var saveButton9 = document.getElementById("button-addon9");

//all local storage vars
var storedinput1 = localStorage.getItem('event1');
var storedinput2 = localStorage.getItem('event2');
var storedinput3 = localStorage.getItem('event3');
var storedinput4 = localStorage.getItem('event4');
var storedinput5 = localStorage.getItem('event5');
var storedinput6 = localStorage.getItem('event6');
var storedinput7 = localStorage.getItem('event7');
var storedinput8 = localStorage.getItem('event8');
var storedinput9 = localStorage.getItem('event9');

//Current date variables
var today = new Date();
var hours = today.getHours();
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

//changes color of 9am input depending on if past, present, future
if (hours < 9) {
    input1.style.backgroundColor = "green";
}
else if (hours == 9) {
    input1.style.backgroundColor = "red";
}
else (hours > 9) ;{
    input1.style.backgroundColor = "lightgray";
};


//changes color of 10am input depending on if past, present, future
if (hours < 10) {
    input2.style.backgroundColor = "green";
}
else if (hours == 10) {
    input2.style.backgroundColor = "red";
}
else (hours > 10) ;{
    input2.style.backgroundColor = "lightgray";
};


//changes color of 11am input depending on if past, present, future
if (hours < 11) {
    input3.style.backgroundColor = "green";
}
else if (hours == 11) {
    input3.style.backgroundColor = "red";
}
else (hours > 11) ;{
    input3.style.backgroundColor = "lightgray";
};


//changes color of 12pm input depending on if past, present, future
if (hours < 12) {
    input4.style.backgroundColor = "green";
}
else if (hours == 12) {
    input4.style.backgroundColor = "red";
}
else (hours > 12) ;{
    input4.style.backgroundColor = "lightgray";
};


//changes color of 1pm input depending on if past, present, future
if (hours < 13) {
    input5.style.backgroundColor = "green";
}
else if (hours == 13) {
    input5.style.backgroundColor = "red";
}
else (hours > 13) ;{
    input5.style.backgroundColor = "lightgray";
};

//changes color of 2pm input depending on if past, present, future
if (input6) {
    if (hours < 14) {
        input6.style.backgroundColor = "green";
    }
    else if (hours == 14) {
        input6.style.backgroundColor = "red";
    }
    else (hours > 14) ;{
        input6.style.backgroundColor = "lightgray";
    }
};

//changes color of 3pm input depending on if past, present, future
if (hours < 15) {
    input7.style.backgroundColor = "green";
}
else if (hours == 15) {
    input7.style.backgroundColor = "red";
}
else (hours > 15) ;{
    input7.style.backgroundColor = "lightgray";
};

//changes color of 4pm input depending on if past, present, future
if (hours < 16) {
     input8.style.backgroundColor = "green";
}
else if (hours == 16) {
    input8.style.backgroundColor = "red";
}
else (hours > 16) ;{
    input8.style.backgroundColor = "lightgray";
};

//changes color of 5pm input depending on if past, present, future
if (hours < 17) {
    input9.style.backgroundColor = "green";
}
else if (hours == 17) {
     input9.style.backgroundColor = "red";
}
else (hours > 17) ;{
    input9.style.backgroundColor = "lightgray";
};

//button 1 event click function
saveButton1.addEventListener('click', function(event) {

    localStorage.setItem('event1', input1.textContent);
});

function renderMessage() {}

//button 2 event click function
saveButton2.addEventListener("click", function(event) {

    var task2 = input2.value;
    localStorage.setItem('event2', input2.textContent);
});

//button 3 event click function
saveButton3.addEventListener("click", function(event) {

    var task3 = input3.value;
    localStorage.setItem('event3', 'task3');
});

//button 4 event click function
saveButton4.addEventListener("click", function(event) {

    var task4 = input4.value;
    localStorage.setItem('event4', 'task4');
});

//button 5 event click function
saveButton5.addEventListener("click", function(event) {

    var task5 = input5.value;
    localStorage.setItem('event5', 'task5');
});

//button 6 event click function
saveButton6.addEventListener("click", function(event) {

    var task6 = input6.value;
    localStorage.setItem('event6', 'task6');
});

//button 7 event click function
saveButton7.addEventListener("click", function(event) {

    var task7 = input7.value;
    localStorage.setItem('event7', 'task7');
});

//button 8 event click function
saveButton8.addEventListener("click", function(event) {

    var task8 = input8.value;
    localStorage.setItem('event8', 'task8');
});

//button 9 event click function
saveButton9.addEventListener("click", function(event) {

    var task9 = input9.value;
    localStorage.setItem('event9', 'task9');
});

if (input1) {
    input1.textContent = storedinput1
};

if (input2) {
    input2.textContent = storedinput2
};
