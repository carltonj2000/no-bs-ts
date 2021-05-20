let userName: string = "Carlton";
let hasLoggedIn: boolean = true;

userName += " Joseph";

console.log(userName);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");

const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Carlton",
  last: "Joseph",
};

const ids: Record<number, string> = {
  10: "a",
  20: "a",
};
ids[30] = "c";

if (ids[30] === "d") {
  //
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));

const out = [4, 5, 6].map((v) => `${v * 10}`);
