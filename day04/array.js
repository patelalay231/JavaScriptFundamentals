var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

//console.log(states[1]);

//console.log(states.length);
states[0] = "Punjab";
//console.log(states);

var user = ["hitesh", "hitesh@lco.dev", 3, 34, true];
//console.log(user);

user.pop();
user.pop();
//console.log(user);
states.unshift(2);
console.log(typeof(states));
console.log(states);
user.shift();
console.log(user);

console.log(user.indexOf("newyy"));

console.log(Array.from("hitesh"));
