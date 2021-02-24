let apples: number = 5;
let speed: string = 'slow';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing:  undefined =  undefined;

// Array
let colors: string[] = ['red', 'green', 'blue'];

// Classes
class Car {

}
// creates an instance of the class car
let ferrari: Car = new Car;

// Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};

// Function
const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
}

// When to use annotations
// returns any type
const json =  '{"x":10, "y": 20}';
const coordinates = JSON.parse(json);

// Use the any type
// 2. When we declare a variable on one line and initialize it on another
let colorsTwo = ['red', 'green', 'blue'];
let foundColor:boolean;

for(let i=0; i<colorsTwo.length; i++){
  if(colorsTwo[i] === 'green'){
    foundColor = true;
  }
}

// Use the any type
// 3. variable who's type cannot be inferred correctly

let numbers = [-10,-1,12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i<numbers.length; i++){
  if(numbers[i]> 0) {
    numberAboveZero = numbers[i];
  }
}
