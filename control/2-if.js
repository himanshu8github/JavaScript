// short hand syntax
// if(balance > 10) console.log("IF part");
// else console.log("Else part");


// login system


// const email1 = ""

// if email is present, ask for password. Otherwise ask for email

// if (email1 == "" ){
//     console.log("please enter your password");
// } else {
//     console.log("Please enter your email1");
// }



// if (email1 != "") {
//     console.log("Please provide a password");
// } else {
//     console.log("Please enter your email1");
// }

console.log(Boolean(email1));

// truthy falsy

// falsy values

/*

false
0           (-0 and BigInt 0n)
""
null
undefined
NaN


*/


// if user provides email, password, then allow login, else ask for it

const email = ""
const password = ""

if(email){
    if (password) {
        console.log("welcome to the app");
    }else{
        console.log("please enter password");
    }
}else {
    console.log("please enter your email");
}

// Logical Operation
// && -> and ; || => OR


if (email && password) {
    console.log("welcome to the app");
}else {
    console.log("Please enter email and password");
}

// allow user to signin with google or github

const googleLoginToken = ""
const githubLoginToken = ""

if (googleLoginToken || githubLoginToken) {
    console.log("Welcome to the app");
}else {
    console.log("Please login to view your account");
}

//new

let age = 19
const willYougetDrivinglicense = false
// let willYougetDrivinglicense = false

// if(age >= 18){
//     console.log("you get driving license");
//     willYougetDrivinglicense = true
// }
// else{
//     console.log("you are not eligible for driving license");
//     willYougetDrivinglicense = false
// }


(age >= 18) ? willYougetDrivinglicense = true : willYougetDrivinglicense = false

const getDrivingLicense = age >= 18 ? "true part" : "false"


// let loading = false

// if (loading) {
//      "loading ...."
// }

// console.log("Show the cards to user");

// loading ? "show loading spinner" : "show card to user"