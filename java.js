let myTemperature = function Temperature(celsius, fahrenheit, kelvin) {

    this.getcelsius = function() {
        if (celsius < -273) {
        alert("Nhiệt độ quá thấp !!!");
        }
    };
    this.getfahrenheit = function() {
        return (1.8*celsius) + 32;
    };
    this.getkelvin = function() {
        return celsius + 273.15;
    };
};
let c = parseInt(prompt("Celsius: "));
let temp = new myTemperature(c);
temp.getcelsius();
let f = temp.getfahrenheit();
let k = temp.getkelvin();
alert("Fahrenheit: " + f + "," + " Kelvin: " + k);