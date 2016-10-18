let userArray = process.argv.slice(2);
let userObj = {};

// Destructured assignment:
[ , userObj.username, userObj.email] = userArray;

console.log(userObj);