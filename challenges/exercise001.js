function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.charAt(0).toUpperCase() + word.slice(1);
  }

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
      return firstName.charAt(0) + '.' + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  let total = originalPrice + ((vatRate/100)*originalPrice);
  return Math.round(total*100)/100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let saleprice = originalPrice - ((reduction/100)*originalPrice);
  return Math.round(saleprice*100)/100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
let length = str.length;
if(length%2==0)
{
let ch1=str.charAt((length/2)-1);
let ch2 = str.charAt(length/2);
return ch1 + ch2;
}
else
{
let ch = str.charAt(length/2);
return ch;
} 
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  for(let i=0; i<reverseAllWords.length; i++){
   // return reverseAllWords[i].split("").reverse().join("");
   }
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  const type = "Linux";
let count = users.filter((obj) => obj.type === type).length;
return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  return eval(scores.join('+'))/scores.length;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
let str='';
if(n%3===0){
str = "fizz";
if (n%3===0 && n%5===0){
str = "fizzbuzz";
}
}
else if(n%5===0){
str = "buzz";
}
else {
return n;
}
return str;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
