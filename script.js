//Exercises: Level 1
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
//1.Iterate 0 to 10 using for loop, do the same using while and do while loop
console.log("miskiat is a **** girl!");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let misky = 0;
while (misky <= 10) {
  console.log(misky);
  misky++;
}
let zaynab = 0;
do {
  console.log(zaynab);
  zaynab++;
} while (zaynab <= 10);

// 2.Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let m = 10; m >= 0; m--) {
  console.log(m);
}
let aisha = 10;
while (aisha >= 0) {
  console.log(aisha);
  aisha--;
}
let arif = 10;
do {
  console.log(arif);
  arif--;
} while (arif >= 0);

// 3.Iterate 0 to n using for loop
let n = 100;
for (let i = 0; i <= n; i++) {
  console.log(i);
}
// 4.Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
let hash = "#";
for (let r = 1; r <= 7; r++) {
  console.log(hash);
  hash += "#";
}
// 5.Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let u = 0; u <= 10; u++) {
  console.log(`${u} * ${u} = ${u * u}`);
}
//6.Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
for (let t = 0; t <= 10; t++) {
  console.log(`${t}  ${t * t}  ${t * t * t}`);
}
//7.Use for loop to iterate from 0 to 100 and print only even numbers
for (let v = 0; v <= 100; v++) {
  if (v % 2 === 0) {
    console.log(v);
  }
}
//8.Use for loop to iterate from 0 to 100 and print only odd numbers
for (let g = 0; g <= 100; g++) {
  if (!(g % 2 === 0)) {
    console.log(g);
  }
}
//9.Use for loop to iterate from 0 to 100 and print only prime numbers
let pr = 0;
for (let r = 2; r <= 100; r++) {
  for (let i = 2; i <= 9; i++) {
    if (i != r) {
      if (r % i == 0) {
        pr = 0;
        break;
      } else {
        pr = 1;
      }
    }
  }
  if (pr === 1) console.log(r);
}
//10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let u = 0; u <= 100; u++) {
  sum += u;
}
console.log(sum);
//11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even = 0;
for (let e = 0; e <= 100; e += 2) {
  even += e;
}
console.log(even);

let odd = 0;
for (let o = 1; o <= 100; o += 2) {
  odd += o;
}
console.log(odd);
//12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let arr = [even, odd];
console.log(arr);
//13.Develop a small script which generate array of 5 random numbers
let array = [];
for (let t = 1; t <= 5; t++) {
  let num = Math.floor(Math.random() * 5);
  array.push(num);
}
console.log(array);
//14.Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arra = [];

while (arra.length < 5) {
  var r = Math.floor(Math.random() * 5) + 1;
  if (arra.indexOf(r) === -1) arra.push(r);
}
console.log(arra);
//15.Develop a small script which generate a six characters random id:

// let characters = "";
// let result = "";
// let  chaactersLength = characters.length;

// for (var i = 0; i < 5; i++) {
//   result += characters.charAt(Math.floor(Math.random() * chaactersLength));
// }

// console.log(result);

//Exercises: Level 2
//1.Develop a small script which generate any number of characters random id:

//4.Using the above countries array, create the following new array.
const countrie = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const newArr = [];
for (let i = 0; i < countrie.length; i++) {
  newArr.push(countrie[i].toUpperCase());
}
console.log(newArr);

//5.Using the above countries array, create an array for countries length'.
const countri = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
console.log(countri.length);
let newArrr = [];
for (let index = 0; index < countri.length; index++) {
  newArrr.push(countri[index].length);
}
console.log(newArrr);
//6.Use the countries array to create the following array of arrays:
const countr = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let newAr = [];
for (let i = 0; i < array.length; i++) {
  newAr.push([countr[i], countr[i].slice(0, 3), countri[i].length]);
}
console.log(newAr);
//7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const counts = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let newA = [];
for (const count of counts) {
  count.includes("land")
    ? console.log(newA.concat(count))
    : console.log("all these countries are without land");
}
//8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const countss = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let newAy = [];
for (const count of countss) {
  if (count.includes("ia")) {
    newAy.push(count);
  }
}
newAy.length === 0
  ? console.log("these are countries ends without ia")
  : console.log(newAy);
//9.Using the above countries array, find the country containing the biggest number of characters.

const countsss = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
