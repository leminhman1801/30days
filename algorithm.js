// 1 - 10;
// const result = [];

// for (i = 10; i > 0; i--) {
//   result.push(i);
// }
// console.log(result);

// number table
// const result = [];

// for (i = 1; i < 11; i++) {
//   for (j = i; j <= 100; j += 10) {
//     // console.log(i);
//     result.push(j);
//   }
//   console.log(result);

//   //   result.push(i * 10);
// }

// multiplication
// const result = [];

// for (i = 2; i <= 9; i++) {
//   for (j = 1; j <= 10; j++) {
//     result.push(j * i);
//   }
// }
// console.log(result);

// even
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 0; i <= array.length - 1; i++) {
//   if (array[i] % 2 == 0) {
//     console.log(array[i]);
//   } else {
//     console.log(`${array[i]} day la so le`);
//   }
// }

// triangle
// const number = 5;
// let star = "";
// let space = " ";
// const arraySpace = [];
// // for (i = 1; i <= number; i++) {
// for (j = number - 1; j >= 0; j--) {
//   star = star + "*" + " ";
//   space = space + " ";
//   arraySpace.push(space);
//   console.log(arraySpace);
//   console.log(arraySpace[j] + star);

//   // for (j = number - 1; j >= 0; j--) {}
// }
// console.clear();
// for (i = 1; i <= number; i++) {
//   console.log("*".repeat(i));
// }

// Reverse array
// const result = [];
// const array = [1, 2, 3, 24, 5, 70, -17, 8, 9, 10];
// for (i = array.length; i >= 0; i--) {
//   result.push(array[i]);
// }
// console.log(result);

// average
// let temp = 0;

// for (i = 0; i <= array.length - 1; i++) {
//   temp = temp + array[i];
// }
// console.log(temp / array.length);

// min - max value
// const result = [];
// let array = [1, 2, 3, 24, 5, 70, -17, 8, 9, 10];
// let array1 = [1, 2, 3, 24, 5, 70, -17, 8, 9, 10, 11];
// console.log(array[10] + array1[10]);
// let max = array[0];
// let min = array[0];
// let temp;
// for (i = 1; i <= array.length - 1; i++) {
//   if (array[i] > max) max = array[i];

//   if (array[i] < min) min = array[i];

//   console.log(array[i]);
// }

// console.log(min, max);
// for (i = 0; i <= array.length - 1; i++) {
//   for (j = 0; j <= array.length - 1; j++) {
//     if (array[j] > array[j + 1]) {
//       temp = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = temp;
//     }
//     if (array1[j + 1] > array1[j]) {
//       temp = array1[j + 1];
//       array1[j + 1] = array1[j];
//       array1[j] = temp;
//     }
//   }
// }
// console.log(array, array1);

// divide 2 array
// let array = [1, 2, 3, 24, 5, 70, -17, 8, 9, 10];
// let arrayOdd = [];
// let arrayEven = [];
// for (i = 0; i <= array.length - 1; i++) {
//   if (array[i] % 2 == 0) {
//     arrayEven.push(array[i]);
//   } else {
//     arrayOdd.push(array[i]);
//   }
// }
// console.log(arrayEven, arrayOdd);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// console.log(john["name"]);
// let users = [john, pete, mary];

// let names = [];
// names.push(john.name, john.age);
// john.address = "can tho";
// john.name = "Man";
// // console.log(names);
// console.log(john);
// user = {
//   name: "tung",
//   age: 20,
//   friends: ["vy", "tung", "tuan"],
//   address: {
//     city: "HCM",
//     district: "Q1",
//   },
// };
// const info = prompt("choose");
// if (user[info]) {
//   console.log(user[info]);
// } else {
//   console.log("wrong");
// }
// console.log(user["age"]);
// let name = user.name;
// let age = user.age;
// let friends = user.friends;
// let address = user.address;

// address.street = "nguyen trai";
// friends.push("thai");
// console.log(
//   user.friends,
//   user.friends[user.friends.length - 1],
//   user.address,
//   user.address.city
// );
// // user.address.push(street:'nguyen trai');
// console.log(user.address, friends);

// function unique(arr) {
//   /* your code */
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// convert binary to decimal
// const array = [7, 6, 5, 4, 3, 2, 1, 0];
// const binary = prompt("Let type  binary number");
// const binaryArray = binary.split("");

// let temp = 0;
// for (i = 0; i <= array.length - 1; i++) {
//   if (array.length - 1 - i <= binaryArray.length) {
//     if (binaryArray[array.length - 1 - i] == 1) {
//       temp = temp + Math.pow(2, array[i]);
//     }
//   }
// }
// console.log(temp);
// const array = [0, 1, 2, 3, 4, 5, 6, 7];
// const binary = prompt("Let type  binary number");
// const binaryArray = binary.split("");

// let temp = 0;
// for (i = array.length - 1; i >= 0; i--) {
//   if (i <= binaryArray.length) {
//     if (binaryArray[i] == 1) {
//       temp = temp + Math.pow(2, array[i]);
//     }
//   }
// }
// console.log(temp);
// convert binary to decimal advanced ???

// conver decimal to binary

// let decimal = prompt("let type a decimal");

// // if (decimal >= 0 && decimal <= 255) {
// //   console.log(decimal);
// // } else {
// //   console.log("Please try again!, The decimal number about 0 to 255");
// // }
// let temp = "";
// while (decimal > 0) {
//   temp = temp + Math.floor(decimal % 2);
//   if (decimal % 2 == 1) decimal = decimal - 1;

//   decimal = decimal / 2;
// }
// let tempArray = temp.split("");
// let result = [];
// for (i = tempArray.length - 1; i >= 0; i--) {
//   result.push(tempArray[i]);
// }
// console.log(result.length);

// while (result.length < 8) {
//   result.unshift("0");
// }

// console.log(result);
// console.log(result.length);

// ex callback
// function myFunction(param) {
//   myCallback("Học lập trình");
// }
// function myCallback(value) {
//   console.log("value: ", value);
// }
// myFunction("value: ");

// function sumCb(a, b) {
//   return a + b;
// }
// function subCb(a, b) {
//   return a - b;
// }
// function multiCb(a, b) {
//   return a * b;
// }
// function divCb(a, b) {
//   return a / b;
// }

// function caculate(a, b, cb) {
//   return cb(a, b);
// }

// console.log(caculate(1, 2, sumCb));
// console.log(caculate(1, 2, subCb));
// console.log(caculate(1, 2, multiCb));
// console.log(caculate(3, 1, divCb));

// let courses = ["Javascript", "PHP", "Ruby"];
// Array.prototype.map2 = function (callback) {
//   let output = [],
//     arrayLength = this.length;
//   for (i = 0; i < arrayLength; i++) {
//     let result = callback(this[i], i);
//     output.push(result);
//   }
//   return output;
// };
// let htmls = courses.map2(function (course) {
//   return `<h2>${course}</h2>`;
// });
// console.log(htmls.join());
// let courses = [
//   {
//     name: "Javascript",
//     coin: 680,
//   },
//   {
//     name: "PHP",
//     coin: 860,
//   },
//   {
//     name: "Ruby",
//     coin: 980,
//   },
// ];
// Array.prototype.filter1 = function (callback) {
//   let output = [];
//   for (let i in this) {
//     if (this.hasOwnProperty(i)) {
//       let result = callback(this[i], i, this);
//       if (result) {
//         output.push(this[i]);
//       }
//     }
//   }
//   return output;
// };
// let filterCourse = courses.filter1(function (course, index, array) {
//   return course.coin > 700;
// });
// console.log(filterCourse);

// let string = "java";
// for (let key in string) {
//   console.log(key, string[key]);
// }

//   to Decimal
//
// let char = prompt("please type a roman");
// let charToArray = char.split("");
// let temp = 0;
// function valueRoman(char) {
//   if (char == "I" || char == "i") return 1;
//   if (char == "V" || char == "v") return 5;
//   if (char == "X" || char == "x") return 10;
//   if (char == "L" || char == "l") return 50;
//   if (char == "C" || char == "c") return 100;
//   if (char == "V" || char == "v") return 500;
//   if (char == "M" || char == "m") return 1000;
//   return -1;
// }
// console.log(charToArray);
// // translation.set(I,1)
// // function romanToDecimal() {}

// for (let i = 0; i <= charToArray.length - 1; i++) {
//   let decimal1 = valueRoman(charToArray[i]);
//   let decimal2 = valueRoman(charToArray[i + 1]);
//   if (decimal1 >= decimal2) {
//     temp = temp + decimal1;
//   } else {
//     temp = temp + decimal2 - decimal1;
//   }
//   console.log(temp);
//   console.log(decimal1, decimal2);
// }
// console.log(temp);

// console.log(temp);
// Decimal to Roman
// function convertToRoman(number) {
//   let romanToNumber = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };

//   let roman = "";
//   for (let key in romanToNumber) {
//     while (number >= romanToNumber[key]) {
//       roman += key;
//       number -= romanToNumber[key];
//     }
//     console.log(key);
//   }
//   return roman;
// }
// console.log(convertToRoman(25));

// function clock() {
//   let second = document.getElementById("second");
//   let minute = document.getElementById("minute");
//   let hour = document.getElementById("hour");
//   let secondNow = new Date().getSeconds();
//   let minuteNow = new Date().getMinutes();
//   let hourNow = new Date().getHours();
//   second.innerHTML = secondNow;
//   minute.innerHTML = minuteNow;
//   hour.innerHTML = hourNow;
// }
// let countTime = setInterval(clock, 1000);
// let l1 = [9, 9, 9, 9, 9, 9, 9],
//   l2 = [9, 9, 9, 9];
// var addTwoNumbers = function (l1, l2) {
//   let result = [];
//   let temp = 0;

//   if (l1.length !== l2.length) {
//     let diff = Math.abs(l1.length - l2.length);
//     for (let j = 0; j < diff; j++) {
//       if (l1.length > l2.length) {
//         l2.push(0);
//       } else {
//         l1.push(0);
//       }
//     }
//   }

//   for (let i = 0; i <= l1.length - 1; i++) {
//     sum = l1[i] + l2[i] + temp;
//     temp = 0;
//     if (sum >= 10) {
//       temp = Math.floor(sum / 10);
//       result.push(sum % 10);
//       if (i == l1.length - 1) {
//         result.push(temp);
//       }
//       // result.push(sum);
//     } else {
//       result.push(sum);
//     }
//     // if (result(result.length) >= 10) {
//     // }
//   }

//   return result;
// };
// console.log(addTwoNumbers(l1, l2));

// let list1 = [1, 2, 4],
//   list2 = [1, 3, 4];
// // var mergeTwoLists = function (list1, list2) {
// let temp = 0;
// let list = list1.concat(list2);
// console.log(list);

// for (let i = 0; i < list.length; i++) {
//   for (let j = 0; j < list.length; j++) {
//     if (list[j] >= list[j + 1]) {
//       temp = list[j];
//       list[j] = list[j + 1];
//       list[j + 1] = temp;
//     }
//   }
// }
// // return list;
// // };
// // console.log(mergeTwoLists(list1, list2));
// console.log(list);

// let prices = [7, 1, 5, 3, 6, 4];
// // let prices = [7, 6, 4, 3, 1];
// var maxProfit = function (prices) {
//   let profit = [];
//   let maxProfit = 0;
//   let maxBuy = 0;
//   let maxSell = 0;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let currentProfit = prices[j] - prices[i];
//       if (currentProfit > maxProfit) {
//         maxSell = j + 1;
//         maxBuy = i + 1;
//         maxProfit = currentProfit;
//       }
//     }
//   }
//   if (maxProfit > 0) {
//     console.log(
//       `Buy on day ${maxBuy} price: ${
//         prices[maxBuy - 1]
//       }, sell on day ${maxSell} price: ${
//         prices[maxSell - 1]
//       } => Profit ${maxProfit}`
//     );
//   } else {
//     console.log(0);
//   }

// };
// // console.log(maxProfit(prices));
// maxProfit(prices);
// s = "A man, a plan, a canal: Panama";
// console.log(s.to);

// root = [4, 2, 7, 1, 3, 6, 9];
// var invertTree = function (root) {
//   for (let i = 0; i < root.length; i++) {
//     xcdasd;
//   }
// };

// let myString = ")[[[]]]()";

// let openBracket = ["(", "{", "["];
// let closeBracket = [")", "}", "]"];

// let bracketQueue = [];

// function BracketCheck(inputString) {
//   for (let i = 0; i < inputString.length; i++) {
//     if (openBracket.includes(inputString[i])) {
//       let currentBracketIndex = openBracket.indexOf(inputString[i]);
//       bracketQueue.push(currentBracketIndex);
//     } else if (closeBracket.includes(inputString[i])) {
//       let currentBracketIndex = closeBracket.indexOf(inputString[i]);
//       if (
//         bracketQueue.length > 0 &&
//         currentBracketIndex === bracketQueue[bracketQueue.length - 1]
//       ) {
//         bracketQueue.pop();
//       } else {
//         return false;
//       }
//     } else {
//       console.log("Something was wrong");
//       return false;
//     }
//     console.log(bracketQueue);
//   }
//   return true;
// }
// console.log(BracketCheck(myString));

// let myString = "{()()}[[[]]]()";

// let openBracket = ["(", "{", "["];
// let closeBracket = [")", "}", "]"];

// let bracketQueue = [];

// function checkBracket(inputString) {
//   for (let i = 0; i < inputString.length; i++) {
//     if (openBracket.includes(inputString[i])) {
//       let currentBracketIndex = openBracket.indexOf(inputString[i]);
//       bracketQueue.push(currentBracketIndex);
//       console.log(currentBracketIndex);
//     } else if (closeBracket.includes(inputString[i])) {
//       let currentBracketIndex = closeBracket.indexOf(inputString[i]);
//       if (
//         bracketQueue.length > 0 &&
//         currentBracketIndex === bracketQueue[bracketQueue.length - 1]
//       ) {
//         bracketQueue.pop();
//       } else {
//         return false;
//       }
//     } else {
//       console.log("Wrong");
//       return false;
//     }
//   }
//   console.log(bracketQueue);
//   if (bracketQueue.length > 0) {
//     return false;
//   }
//   return true;
// }
// console.log(checkBracket(myString));

// let s = "anagram";
// let t = "nagaram";
// // const test = s.split("").sort().join();

// var isAnagram = function (s, t) {
//   if (s.length != t.length) return false;
//   const hashTable = {};

//   for (let i = 0; i < s.length; i++) {
//     if (!hashTable[s[i]]) {
//       hashTable[s[i]] = 0;
//       console.log(hashTable[s[i]]);
//     }
//     hashTable[s[i]]++;
//     // console.log(hashTable[s[i]], hashTable, s[i]);
//     console.log(hashTable);
//   }

//   for (let j = 0; j < t.length; j++) {
//     if (!hashTable[t[j]]) {
//       console.log(hashTable[t[j]]);

//       return false;
//     }
//     hashTable[t[j]]--;
//     // if (hashTable[t[j]] < 0) return false;
//     console.log(hashTable);
//   }

//   return true;
// };
// console.log(isAnagram(s, t));

// let s = "anagram";
// let t = "nagaram";
// let validAnagram = function (s, t) {
//   const sString = s.split("").sort().join();
//   const tString = t.split("").sort().join();
//   const sCount = {};
//   const tCount = {};

//   if (s.length !== t.length) return false;
//   if (sString === tString) return true;
//   for (let i = 0; i < s.length; i++) {
//     if (!sCount[s[i]]) sCount[s[i]] = 0;
//     if (!tCount[t[i]]) tCount[t[i]] = 0;
//     sCount[s[i]]++;
//     tCount[t[i]]++;
//   }
//   for (let value in sCount) {
//     if (sCount[value] !== tCount[value]) return false;
//   }
// };
// console.log(validAnagram(s, t));

// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// nums = [-2, 2, 1, 2];
// const numsLength = nums.length;
// var maxSubArray = function (nums) {
//   let result = [];
//   let sum = 0;
//   for (let i = 0; i < numsLength; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       sum = sum + nums[j];
//       result.push(sum);
//       // console.log(result);
//     }
//     nums.shift();
//     // console.log(nums);
//     sum = 0;
//   }
//   let maxSum = Math.max(...result);
//   return maxSum;
// };
// console.log(maxSubArray(nums));

// let input = [-1, 2, 1, -1, -7, 7];
// function MaxSubArray(array, minArrayLength) {
//   let maxSum = -999;
//   let resultArray = [];
//   for (
//     let subArrayLength = minArrayLength;
//     subArrayLength <= array.length;
//     subArrayLength++
//   ) {
//     for (
//       let firstIndex = 0;
//       firstIndex < array.length && firstIndex + subArrayLength <= array.length;
//       firstIndex++
//     ) {
//       let currentSum = 0;
//       let currentArray = [];
//       for (let i = 0; i < subArrayLength; i++) {
//         currentSum += array[i + firstIndex];
//         currentArray.push(array[i + firstIndex]);
//         if (currentSum > maxSum && i == subArrayLength - 1) {
//           maxSum = currentSum;
//           resultArray = currentArray;
//         }
//       }
//     }
//   }
//   console.log(
//     "final result : " +
//       maxSum +
//       " and result sub array: " +
//       resultArray +
//       " with min array length is: " +
//       minArrayLength
//   );
// }
// MaxSubArray(input, 2);
// function Maxan(nums) {
//   let result = [];
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       sum = sum + nums[j];
//       result.push(sum);
//     }
//     nums.shift();
//     sum = 0;
//   }
//   let maxSum = Math.max(...result);
//   console.log("Maxan result: " + maxSum);
// }
// Maxan(input);

// function logger(log, type = "log") {
//   console[type](log);
// }
// logger("????");
// let type1 = "log";
// console["log"]("123");

// var promise = new Promise(function (resolve, reject) {
//   resolve();
// });

// promise
//   .then(function () {
//     return 1;
//   })

//   .then(function (data) {
//     console.log(data);
//     return 2;
//   })
//   .then(function (data) {
//     console.log(data);
//     return 3;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function () {
//     console.log("wrong");
//   })
//   .finally(function () {
//     console.log("done");
//   });

let input = [-1, 2, 1, -1, -7, 7];
function MaxSubArray(array, minArrayLength) {
  let maxSum = -999;
  let resultArray = [];
  for (
    let subArrayLength = minArrayLength;
    subArrayLength <= array.length;
    subArrayLength++
  ) {
    for (
      firstIndex = 0;
      firstIndex < array.length && firstIndex + subArrayLength <= array.length;
      firstIndex++
    ) {
      let currentSum = 0;
      let currentArray = [];
      for (let i = 0; i < minArrayLength; i++) {
        currentSum += array[i + firstIndex];
        currentArray.push(array[i + firstIndex]);
        if (currentSum > maxSum && i == subArrayLength - 1) {
          maxSum = currentSum;
          resultArray = currentArray;
        }
      }
      console.log(resultArray);
    }
  }

  console.log(
    "final result: " +
      maxSum +
      " and result sub array: " +
      resultArray.join(", ") +
      " with min array length is: " +
      minArrayLength
  );
}
MaxSubArray(input, 2);

// var users = [
//   {
//     id: 1,
//     name: "Kieu Anh",
//   },
//   {
//     id: 2,
//     name: "Minh Man",
//   },
//   {
//     id: 3,
//     name: "Thuy Van",
//   },
// ];
// // console.log(users);
// var comments = [
//   {
//     id: 1,
//     user_id: 1,
//     content: "Anh hoc xong chua",
//   },
//   {
//     id: 2,
//     user_id: 2,
//     content: "Chua xong em oi",
//   },
// ];

// function getComments() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve(comments);
//     }, 1000);
//   });
// }
// function getUserByIds(userIds) {
//   return new Promise(function (resolve) {
//     var result = users.filter(function (user) {
//       return userIds.includes(user.id);
//     });
//     setTimeout(function () {
//       console.log(result);
//       resolve(result);
//     }, 1000);
//     resolve(result);
//   }, 1000);
// }
// getComments().then(function (comments) {
//   var userIds = comments.map(function (comment) {
//     return comment.user_id;
//   });
//   console.log(userIds);
// });

// getUserByIds([1, 2])
//   .then(function (users) {
//     console.log(users);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// let sub = "A";
// function withDrawMoney(moneyIn, sub) {
//   let currency = {
//     A: 500,
//     B: 200,
//     C: 100,
//     D: 50,
//     E: 20,
//     F: 10,
//     G: 5,
//     H: 2,
//     I: 1,
//   };
//   let result = [];
//   let resultAphabet = "";
//   // let count = 0;
//   // let resultArray = [];
//   for (let key in currency) {
//     while (moneyIn >= currency[key]) {
//       result.push(currency[key]);
//       moneyIn -= currency[key];
//       resultAphabet += key;
//     }
//   }
//   // resultArray = countString(resultAphabet, "A");
//   // console.log(count);
//   console.log(result);
//   console.log(resultAphabet);
// }
// withDrawMoney(4321, "A");

// function countString(sub, str) {
//   for (let i = 0; i < resultAphabet.length; i++) {
//     if (resultAphabet.substring(i, i + 1) == sub) {
//       count += 1;
//     }
//   }
// }
// let count = 0;
// let sub = "A";
// let test = "AABCEI";
// console.log(test.length);
// console.log(test.substring(1, 8));

// console.log(count);

// let money500 = { value: 500, quantity: 10 };
// let allMoneyInATM = [
//   { value: 500, quantity: 2 },
//   { value: 200, quantity: 16 },
//   { value: 100, quantity: 4 },
// ];
// let result = [
//   { value: 500, quantity: 0 },
//   { value: 200, quantity: 0 },
//   { value: 100, quantity: 0 },
// ];
// for (let key in allMoneyInATM) {
//   console.log(key);
// }
// function TakeMoney(money) {
//   let i = 0;
//   for (i = 0; i < allMoneyInATM.length; i++) {
//     if (money >= allMoneyInATM[i].value && allMoneyInATM[i].quantity > 0) {
//       money -= allMoneyInATM[i].value;
//       allMoneyInATM[i].quantity -= 1;
//       result[i].quantity += 1;
//     }
//     if (money >= allMoneyInATM[i].value) i--;
//   }

//   if (money > 0) {
//     console.log("khong du tien");
//   }
//   console.log(result);
// }
// TakeMoney(1220);

// let n = 4;
// let result = 1;

// if (n % 2 == 1) {
//   for (let i = 1; i <= n; i = i + 2) {
//     result *= i;

//     console.log("le");
//   }
// } else {
//   for (let j = 2; j <= n; j = j + 2) {
//     result *= j;
//     console.log("chan");
//   }
// }
// console.log(result);
