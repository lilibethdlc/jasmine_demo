function celsiusToFahrenheit(celsius) {
  return (9.0 / 5.0) * celsius + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5.0 / 9.0);
}

function onToFahrenheintClick(event) {
  var celsius = parseFloat(document.getElementById('celsius').value);
  var resultElement = document.getElementById('c_to_f_result');
  var result = celsiusToFahrenheit(celsius)

  if(isNaN(result)){
    result = ''
  }

  resultElement.innerHTML = result;
}

function onToCelsiusClick(event) {
  var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  var resultElement = document.getElementById('f_to_c_result');
  var result = fahrenheitToCelsius(fahrenheit)

  if(isNaN(result)){
    result = ''
  }

  resultElement.innerHTML = result;
}

function bindClicks() {
  var toFahrenheitButton = document.getElementById('to_f') || {};
  toFahrenheitButton.onclick = onToFahrenheintClick;

  var toCelsiusButton = document.getElementById('to_c') || {};
  toCelsiusButton.onclick = onToCelsiusClick;
}

document.addEventListener('DOMContentLoaded', bindClicks);
