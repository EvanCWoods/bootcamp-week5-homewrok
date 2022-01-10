// Get the current date to be displayed on the top banner
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

// Get the current time to compare to the calendar times
var currentHour = new Date().getHours();


// Function to set the color of the input field based on the current time
function setColor() {
    if (currentHour > 9) {
        $("#time9").addClass("past");
    } else if (currentHour == 9) {
        $("#time9").addClass("present");
    } else if (currentHour < 9) {
        $("#time9").addClass("future");
    }
    if (currentHour > 10) {
        $("#time10").addClass("past");
    } else if (currentHour == 10) {
        $("#time10").addClass("present");
    } else if (currentHour < 10) {
        $("#time10").addClass("future");
    }
    if (currentHour > 11) {
        $("#time11").addClass("past");
    } else if (currentHour == 11) {
        $("#time11").addClass("present");
    } else if (currentHour < 11) {
        $("#time11").addClass("future");
    }
    if (currentHour > 12) {
        $("#time12").addClass("past");
    } else if (currentHour == 12) {
        $("#time12").addClass("present");
    } else if (currentHour < 12) {
        $("#time12").addClass("future");
    }
    if (currentHour > 13) {
        $("#time1").addClass("past");
    } else if (currentHour == 13) {
        $("#time1").addClass("present");
    } else if (currentHour < 13) {
        $("#time1").addClass("future");
    }
    if (currentHour > 14) {
        $("#time2").addClass("past");
    } else if (currentHour == 14) {
        $("#time2").addClass("present");
    } else if (currentHour < 14) {
        $("#time2").addClass("future");
    }
    if (currentHour > 15) {
        $("#time3").addClass("past");
    } else if (currentHour == 15) {
        $("#time3").addClass("present");
    } else if (currentHour < 15) {
        $("#time3").addClass("future");
    }
    if (currentHour > 16) {
        $("#time4").addClass("past");
    } else if (currentHour == 16) {
        $("#time4").addClass("present");
    } else if (currentHour < 16) {
        $("#time4").addClass("future");
    }
    if (currentHour > 17) {
        $("#time5").addClass("past");
    } else if (currentHour == 17) {
        $("#time5").addClass("present");
    } else if (currentHour < 17) {
        $("#time5").addClass("future");
    }
}


// Function to save what is written in a box to local storage
function storeTimeSlot() {

    var time9Content = document.getElementById("time9");
    var output9 = document.getElementById("time9");
    var saveButton9 = document.getElementById("button9");

    output9.textContent = localStorage.getItem("Content9");
    time9Content.value = localStorage.getItem("Content9");

    saveButton9.addEventListener("click", function() {
        localStorage.setItem("Content9", time9Content.value);
        output9.textContent = time9Content.value;
    });
    
    var time10Content = document.getElementById("time10");
    var output10 = document.getElementById("time10");
    var saveButton10 = document.getElementById("button10");

    output10.textContent = localStorage.getItem("Content10");
    time10Content.value = localStorage.getItem("Content10");

    saveButton10.addEventListener("click", function() {
        localStorage.setItem("Content10", time10Content.value);
        output10.textContent = time10Content.value;
    });

    var time11Content = document.getElementById("time11");
    var output11 = document.getElementById("time11");
    var saveButton11 = document.getElementById("button11");

    output11.textContent = localStorage.getItem("Content11");
    time11Content.value = localStorage.getItem("Content11");

    saveButton11.addEventListener("click", function() {
        localStorage.setItem("Content11", time11Content.value);
        output11.textContent = time11Content.value;
    });

    var time12Content = document.getElementById("time12");
    var output12 = document.getElementById("time12");
    var saveButton12 = document.getElementById("button12");

    output12.textContent = localStorage.getItem("Content12");
    time12Content.value = localStorage.getItem("Content12");

    saveButton12.addEventListener("click", function() {
        localStorage.setItem("Content12", time12Content.value);
        output12.textContent = time12Content.value;
    });
    var time1Content = document.getElementById("time1");
    var output1 = document.getElementById("time1");
    var saveButton1 = document.getElementById("button1");

    output1.textContent = localStorage.getItem("Content1");
    time1Content.value = localStorage.getItem("Content1");

    saveButton1.addEventListener("click", function() {
        localStorage.setItem("Content1", time1Content.value);
        output1.textContent = time1Content.value;
    });
    var time2Content = document.getElementById("time2");
    var output2 = document.getElementById("time2");
    var saveButton2 = document.getElementById("button2");

    output2.textContent = localStorage.getItem("Content2");
    time2Content.value = localStorage.getItem("Content2");

    saveButton2.addEventListener("click", function() {
        localStorage.setItem("Content2", time2Content.value);
        output2.textContent = time2Content.value;
    });
    var time3Content = document.getElementById("time3");
    var output3 = document.getElementById("time3");
    var saveButton3 = document.getElementById("button3");

    output3.textContent = localStorage.getItem("Content3");
    time3Content.value = localStorage.getItem("Content3");

    saveButton3.addEventListener("click", function() {
        localStorage.setItem("Content3", time3Content.value);
        output3.textContent = time3Content.value;
    });
    var time4Content = document.getElementById("time4");
    var output4 = document.getElementById("time4");
    var saveButton4 = document.getElementById("button4");

    output4.textContent = localStorage.getItem("Content4");
    time4Content.value = localStorage.getItem("Content4");

    saveButton4.addEventListener("click", function() {
        localStorage.setItem("Content4", time4Content.value);
        output4.textContent = time4Content.value;
    });
    var time5Content = document.getElementById("time5");
    var output5 = document.getElementById("time5");
    var saveButton5 = document.getElementById("button5");

    output5.textContent = localStorage.getItem("Content5");
    time5Content.value = localStorage.getItem("Content5");

    saveButton5.addEventListener("click", function() {
        localStorage.setItem("Content5", time5Content.value);
        output5.textContent = time5Content.value;
    });
}

// Main function to execute all logic
function main() {
    setColor();
    storeTimeSlot();
}

// Run the app
main();