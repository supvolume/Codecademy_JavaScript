let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;
if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly === true){
  console.log('Runner number '+raceNumber+', your race start at 9:30');
} else if (age > 18 && registeredEarly === false) {
  console.log('Runner number '+raceNumber+', your race start at 11:00');
} else if (age < 18) {
  console.log('Runner number '+raceNumber+', your race start at 12:30');
} else {
  console.log('Runner number '+raceNumber+', please contact registration desk.');
}