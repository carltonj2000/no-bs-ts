const { addStrings, printFormat, introduce, getName } = require("./functions");

console.log(addStrings("a", "b"));
console.log(addStrings("c"));

printFormat("hi", "there");
printFormat("hi", 3);

console.log(introduce("hi", "carlton", "tina"));
console.log(getName({ first: "carlton", last: 1 }));
console.log(getName({}));
