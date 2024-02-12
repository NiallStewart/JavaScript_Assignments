// 1 - Write a function which checks given input/parameter:
//    1.If input/parameter is divisible by 3 print => Fizz
//    2.If input/parameter is divisible by 5 print => Buzz
//    3.If input/parameter is divisible by 3 or 5 print => FizzBuzz
//    4.If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value
//    5.If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number'
function FizzBuzz(input) {
  if (typeof input == "number") {
    if (input % 3 == 0 && input % 5 == 0) {
      console.log(`${input} - FizzBuzz`);
    } else if (input % 3 == 0) {
      console.log(`${input} - Fizz`);
    } else if (input % 5 == 0) {
      console.log(`${input} - Buzz`);
    } else {
      console.log(input);
    }
  } else {
    console.log(`${input}: Nan - Not a Number! Please input a number`);
  }
}

// 2 - Write a function which checks and count the truthy values from an array
function truthy(array) {
  let count = 0;
  for (let value of array) {
    if (![false, NaN, undefined, null, "", 0].includes(value)) {
      count++;
    }
  }
  return count;
}

// 3 - Write a function which show or print Sum of Arguments passed as an Array
function calculateSum(array) {
  let total = 0;
  for (let number of array) {
    total += number;
  }
  return total;
}

// 4 - Write a function which calculates the sum of multiples of 3 and 5 in an array
function multiplesOf3And5(arg) {
  let sumTotal = 0;
  for (let value of arg) {
    if (value % 3 == 0 || value % 5 == 0) {
      sumTotal += value;
    }
  }
  return sumTotal;
}

// 5 - Create a function which returns the maximum ie. largest number from an array
function findMax(input) {
  let maxValue = input[0];
  for (let value in input) {
    if (input[value] > maxValue) {
      maxValue = input[value];
    }
  }
  return maxValue;
}

let numbers = [10, 8, 12, 5, 25, 36, 4];

console.log(findMax(numbers));

// 6 - Create a method named 'includes' which checks an element exists in an array
function includes(value, array) {
  for (let element in array) {
    if (array[element] == value) {
      console.log(`${value}`);
      return true;
    }
  }
  return false;
}

let employees = ["Niall", "Conor", "Jamie"];
let value = "Jessica";

// 7 - Write a function which checks given input/parameter
//   1.If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'
//   2.If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print => 'Speed Limit Crossed by Penalty Point' + Point
//   3.If Driver gets more than 10 penalty points ie. above the speed limit 120, print => 'License Suspended'
const checkSpeed = (speed) => {
  if (speed < 70) {
    console.log("Good Safe Driving");
  } else if (speed > 120) {
    console.log("License Suspended");
  } else {
    let penaltyPoints = (speed - 70) / 5;
    console.log(`Speed Limit Crossed by Penalty Point ${penaltyPoints}`);
  }
};

checkSpeed(60);
checkSpeed(130);
checkSpeed(80);
checkSpeed(70);

// 8 - Write a function which checks number if given input/parameter is odd or even
function isEvenOrOdd(arg) {
  if (arg % 2 != 0) {
    console.log(`${arg} is odd`);
  } else {
    console.log(`${arg} is even`);
  }
}

isEvenOrOdd(1);
isEvenOrOdd(3);
isEvenOrOdd(5);
isEvenOrOdd(7);

isEvenOrOdd(2);
isEvenOrOdd(4);
isEvenOrOdd(6);
isEvenOrOdd(8);

// 9 - Write a function that checks if 2 objects are equal
function objectsEqual(obj1, obj2) {
  if (typeof obj1 !== "object" && typeof obj2 !== "object") {
    return false;
  }
  let props1 = Object.getOwnPropertyNames(obj1);
  let props2 = Object.getOwnPropertyNames(obj2);
  if (props1.length != props2.length) {
    return false;
  }
  for (var i = 0; i < props1.length; i++) {
    let val1 = obj1[props1[i]];
    let val2 = obj2[props1[i]];
    if (val1 !== val2) {
      return false;
    }
  }
  return true;
}

const student1 = {
  name: "Niall",
  age: 23,
};

const student2 = {
  name: "Conor",
  age: 24,
};

const student3 = {
  name: "Niall",
  age: 23,
};

console.log(objectsEqual(student1, student2));
console.log(objectsEqual(student1, "student"));
console.log(objectsEqual(student1, student3));
