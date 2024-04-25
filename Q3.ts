// 3. Name cases: store a person's name in a variable, and then print that person's name in lowcase, uppercase, and titlecase

let firstName: string = "Areej Shah"

console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
console.log(firstName.charAt(0).toLocaleUpperCase() + firstName.slice(1));