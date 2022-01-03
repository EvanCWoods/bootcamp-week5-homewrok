// Get the current date to be displayed on the top banner
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

// Get the current time to compare to the calendar times
var currentHour = new Date().getHours();
console.log(currentHour);


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
    
}

// Main function to execute all logic
function main() {
    setColor();
    storeTimeSlot();
}

// Runn the app
main();