function celsiusToFahrenheit(celsius) {
  return (9.0 / 5.0) * celsius + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5.0 / 9.0);
}

function onToFahrenheintClick(event) {
  var celsius = parseFloat(document.getElementById('celsius').value);
  var result = document.getElementById('c_to_f_result');
  result.innerHTML = celsiusToFahrenheit(celsius);
}

function onToCelsiusClick(event) {
  var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  var result = document.getElementById('f_to_c_result');
  result.innerHTML = fahrenheitToCelsius(fahrenheit);
}

function bindClicks() {
  var toFahrenheitButton = document.getElementById('to_f') || {};
  toFahrenheitButton.onclick = onToFahrenheintClick;

  var toCelsiusButton = document.getElementById('to_c') || {};
  toCelsiusButton.onclick = onToCelsiusClick;
}

document.addEventListener('DOMContentLoaded', bindClicks);
