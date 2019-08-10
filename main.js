import Enumerable from './Enumerable.js';

const cars = [
    { brand: 'bmw', model: 'm5', year: 2014 },
    { brand: 'bmw', model: 'm4', year: 2013 },
    { brand: 'kia', model: 'sorento', year: 2014 },
    { brand: 'kia', model: 'rio', year: 2010 },
    { brand: 'kia', model: 'sportage', year: 2012 },
];
const coll = new Enumerable(cars);

const result = coll
    .where(car => car.brand === 'kia', car => car.year > 2011);

console.log(result.toArray());

// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]

const result2 = coll.where({ brand: 'bmw' });
console.log(result2.toArray());
console.log(result2.operations);
// [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
// ]

// const result3 = coll.where({ brand: 'kia', model: 'sorento' });
// result3.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

// const result3 = coll.where({ brand: 'kia' }, {  model: 'sorento' });
// result3.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

// const result4 = coll.where({ brand: 'kia' }, car => car.year < 2013);
// result4.toArray();
// [
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]
