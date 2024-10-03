//function takes first and lastname to generate a welcome message
let firstname = prompt('Please enter your firstname');
let lastname = prompt('Please enter your lastname');

function welcomeMessage (firstname, lastname){
let fullname = firstname + " " + lastname;
return `Hello, ${fullname}! Welcome to our house`;
}

console.log(welcomeMessage(firstname, lastname));
