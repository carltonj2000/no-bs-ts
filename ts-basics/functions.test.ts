import addNumber, {
  addStrings,
  printFormat,
  introduce,
  getName,
} from "./functions";

console.log(addNumber(1, 3));
console.log(addStrings("a", "b"));
console.log(addStrings("c"));

printFormat("hi", "there");
printFormat("hi", 3);

console.log(introduce("hi", "carlton", "tina"));
console.log(getName({ first: "carlton", last: "joseph" }));
