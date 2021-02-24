const carMakers =  ['Ford', 'Toyota', 'Hyundai'];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['Jeep'],
  ['Corolla']
];

// Help w inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(120);

// Help with 'map'
// TS will give autocomplete on the variable being passed in the function
carMakers.map((car:string) => {
    return car.toLowerCase();
  }
);

// Flexible Types
const importantDates: (Date|string)[] = [new Date(), '1992-21-07'];