const kelvin = 293; //forecast temp today
const celsius =  kelvin - 273; // convert kelvin to celsius
let fahrenheit = celsius * (9/5) + 32; // convert to fahrenheit
fahrenheit = Math.floor(fahrenheit); // round down
console.log('The temperature is '+fahrenheit+' degrees Fahrenheit.');
let newton =  Math.floor(celsius*(33/100));
console.log('The temperature is '+newton+' Newton scale.');