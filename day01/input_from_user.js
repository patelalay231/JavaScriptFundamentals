const uid = 242; //can't change value later on

var fullName ="Alay patel";
var email ="patelalay02@gmail.com";
var password = "123";
var confirmPassword = "123";
var courseCount=0
var isLoggedInFromGoogle = false;

/*
taking input from users

    alert("enter a full name");
    prompt("Enter your Full name :\n");
*/

/*
1st method to rpint

    console.log("Full Name :- " + fullName);
    console.log("Email :- " + email);
    console.log("No of course taken :- " +courseCount);
*/ 


//better method
console.log(`
With unique ID: ${uid}
User is: ${fullName}
Email Id: ${email}
No. of courses taken: ${courseCount}
and use the password: ${password}
`)

