const myAge =100; // my age
let earlyYears = 2; // first 2 years of dog
earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2; // the first 2 years already accounted, so we need to subtract it
laterYears /= 4 // calculate the number of dog years by my later years
myAgeInDogYears =  earlyYears + laterYears; // calculate my age in dog years
const myName = 'Name'.toLowerCase(); // store my name in lowercase
console.log('My name is '+myName+'. I am '+myAge+' years old in human years which is '+myAgeInDogYears+' years old in dog years.');