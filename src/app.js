const date = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const displayYear = document.querySelector(".display-year");
const displayMonth = document.querySelector(".display-month");
const displayDate = document.querySelector(".display-day");

const errors = document.querySelectorAll(".error");
const inputs = document.querySelectorAll(".input");
const inputLabels = document.querySelectorAll(".input-label");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    if(date.value == "" || month.value == "" || year.value == "") {
        emptyInputErrCase();
    } else {
        escapeErrCase();
        calcAge();
    }
})

function calcAge() {
    let today = new Date();

    let currentDate = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    let birthDate = date.value;
    let birthMonth = month.value;
    let birthYear = year.value;

    console.log(currentDate, currentMonth, currentYear);

    let resultDate, resultMonth, resultYear;

    resultYear = currentYear - birthYear;

    if(birthMonth <= currentMonth) {
        resultMonth = currentMonth - birthMonth;
    } else {
        resultYear--;
        resultMonth = 12 + (currentMonth - birthMonth);
    }

    if(resultMonth < 0) {
        resultMonth = 11;
        resultYear--;
    }

    if(birthDate <= currentDate) {
        resultDate = currentDate - birthDate;
    } else {
        resultMonth--;
        resultDate = getDaysInMonth(birthYear, birthMonth) + (currentDate - birthDate);
    }

    console.log(resultDate, resultMonth, resultYear);
    displayDate.innerHTML = resultDate;
    displayMonth.innerHTML = resultMonth;
    displayYear.innerHTML = resultYear;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function emptyInputErrCase() {
        errors.forEach(error => {
            error.classList.remove("hidden");
        });
        inputLabels.forEach(inputLabel => {
            inputLabel.classList.add("text-lightRed");
        });
        inputs.forEach(input => {
            input.classList.add("border-lightRed");
        })
}

function escapeErrCase() {
    errors.forEach(error => {
        error.classList.add("hidden");
    });
    inputLabels.forEach(inputLabel => {
        inputLabel.classList.remove("text-lightRed");
    });
    inputs.forEach(input => {
        input.classList.remove("border-lightRed");
    })
}