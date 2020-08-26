function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let square = [];
  for(let i=0; i<nums.length; i++){
   square.push(Math.pow(nums[i],2));
   }
   return square;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let result = "";
    for(let i = 0 , len = words.length; i < len; i++) {
      let currentStr = words[i];
	    let tempStr = currentStr.toLowerCase();
      if(i != 0) {
	        // convert first letter to upper case (the word is in lowercase) 
          tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
       }      
       result +=tempStr;
          }  
       return result;

}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let count=0;
  for(i=0;  i<people.length; i++){
  if(Array.isArray(people[i].subjects)) 
  count += people[i].subjects.length; 
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
