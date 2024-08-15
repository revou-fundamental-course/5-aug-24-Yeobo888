// move page button for 'greeting'
function navigateToIntro(target) {
    window.location.href= `./intro.html`;
    };

// move page button for 'intro'
function navigateToForm(target) {
    window.location.href= `./form.html`;
    };

// submiting form
function focusNext(event, nextElementId) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        document.getElementById(nextElementId).focus();
    }
}

// BMI'S calculate
var weight = parseFloat(sessionStorage.getItem('weight'));
var height = parseFloat(sessionStorage.getItem('height'));

function hitungBMI(weight, height) {
    height = height / 100;
    var bmi = weight / (height * height);
    return bmi.toFixed(2);
}