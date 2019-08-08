import Enumerable from './Enumerable.js';

const cars = [
    { brand: 'bmw', model: 'm5', year: 2014 },
    { brand: 'bmw', model: 'm4', year: 2013 },
    { brand: 'kia', model: 'sorento', year: 2014 },
    { brand: 'kia', model: 'rio', year: 2010 },
    { brand: 'kia', model: 'sportage', year: 2012 },
];

const coll = new Enumerable(cars);
coll.orderBy(car => car.year, 'asc').toArray();
// const result = coll.where(car => car.brand === 'kia')
//     .where(car => car.year > 2011);

const newColl = coll.where(car => car.brand === 'kia').select(car => car.model);

const result = newColl.toArray();
result.pop();

console.log(result.toArray());
console.log(result.memo, 'memo1');
