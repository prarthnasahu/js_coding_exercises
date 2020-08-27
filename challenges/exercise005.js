const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  if(nums.indexOf(n)>=0 && nums.indexOf(n)<nums.length-1)
  {
  let a = nums.indexOf(n);
  return nums[a+1];
  }
  else
  {
  return null;
  }
};

const count1sand0s = str => {
  let result = [...str].reduce((a,e) => {a[e]=a[e]?a[e]+1:1; return a}, {});
 return result;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let rev = n.toString().split('').reverse().join('');
  return parseFloat(rev);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let count = 0;
  for(i=0;i<arrs.length;i++)
  {
  count += arrs[i].reduce((a, b) => a + b, 0)
  }
  return count;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if(arr.length>=2)
  {
  let temp = arr[0];
  arr[0] = arr[arr.length-1];
  arr[arr.length-1]=temp;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  let result =false ;
  let strArr = [];
Object.entries(haystack).map
(haystack =>
  {
    const key   = haystack[0];
    const value = haystack[1];
    strArr.push(value.toString().toLowerCase());
  }
)
  for (i = 0 ; i<strArr.length; i++)
  {
    if (strArr[i].includes(searchTerm.toLowerCase()))
  {
    result = true;
    break;
  }
}
  return result;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let input = str.toLowerCase().replace(/[^a-zA-Z ]/g, "");
  var output = {};
  var strArr = input.split(" ");
//A loop
  for (var i=0; i < strArr.length; i++) {
    var word = strArr[i];
    if (output[word] === undefined) {
      output[word] = 1;
    } else {
      output[word] += 1;
    }
    
  }
  return output;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
