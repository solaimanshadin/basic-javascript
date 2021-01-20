// Variable 
var myName = 'Solaiman Shadin';
myName = 'ENGR. Solaiman Shadin';

var myName = 'Pondit developer';
console.log('myName', myName);

let age = 16;
age = 18;

const designation = 'Web developer';

console.log('age', age);

console.log('myName', myName);

// Array
const friends = ['Rahim', 'Karim', 'sattar'];
friends[1] = 'Sofik';
console.log(friends.pop());
friends.push('Maink', 'Srikanta')
friends.splice(1, 0, 'Faysal');
console.log('friends', friends);

// Object
const input = 'age';
const person = {
    name : 'Solaiman Shadin',
    designation : 'Web developer',
    age : 16,
};

console.log('Name:', person.input);
console.log('Name:', person[input]);

// function

function greetings () {
    console.log('Good Evening');
}

const gResult = greetings();
console.log('gResult', gResult);

function addition (num1, num2) {
    return num1 + num2;
    console.log('Math on processing');
}

function chorki(n) {
    if(n === 0) {
        return 'Khela sesh';
    }
    console.log("Hello" , n);
    return chorki(n - 1);
    
}

console.log(chorki(5));


let count = 1;
while(count <= 5) {
    console.log('Hello', count);
    count++;
}
const n = 5;

for (let i = 0; i <= n ; ++i) {
    console.log('Hello', i);
}

const additionResult = addition(2, 2);
console.log(additionResult);


