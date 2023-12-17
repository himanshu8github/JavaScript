const firstname = 'Himanshu'
const lastname = "HC"

console.log(firstname + '' + lastname);
console.log(`my first name iS ${firstname} and last name is ${lastname}`);

const username = new String ('himanshucom')
console.log(username[0]);
console.log(username[3]);

console.log(username[6]);


console.log(username.length);

console.log(username.charAt(0));
console.log(username.substring(0 , 5));
console.log(username.substring(0 , 9));


let email = ' hc@.google  '
console.log(email);

let emailTwo = 'hc@.google'
console.log(emailTwo.replace('hc', 'himanshu'));
console.log(email.includes('hc'));
console.log(emailTwo.toUpperCase());