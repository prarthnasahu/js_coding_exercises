function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const value = 1;
  let newArr = [];
  for(i=0; i<nums.length; i++)
  {	if(nums[i]<1)
	  {let lesserNo = nums[i];
	 newArr.push(lesserNo);
	  }
  } return newArr;
  }

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let newArr=[];
  for(i=0; i<names.length; i++)
  {	if(names[i].startsWith(char))
	  {newArr.push(names[i]);
  	}
  }
    return newArr;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const charStart = "to ";
  let newArr = [];
  for(i=0; i<words.length; i++)
  {	if(words[i].startsWith(charStart))
	  {newArr.push(words[i]);
	  }
  } return newArr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let newArr = [];
  for(i=0;i<nums.length;i++)
  {	if(Number.isInteger(nums[i]))
	  {newArr.push(nums[i])
	  }
  } return newArr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let newArr=[];
  for(i=0;i<users.length;i++)
  {
    newArr.push(users[i].data.city.displayName);
  }  
    return newArr;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let newArr=[];
  for(i=0;i<nums.length;i++)
  { let sq = Math.sqrt(nums[i])
    newArr.push(Math.round(sq*100)/100);
  }
    return newArr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let sent=[];
  for(i=0;i<sentences.length;i++)
  {	if(sentences[i].toLowerCase().includes(str.toLowerCase()))
    {sent.push(sentences[i]);
    }
  } return sent;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
