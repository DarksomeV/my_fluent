# my_fluent_interface
My training project. Fluent Interface. Hexlet.

### Initialization

For example there is such collection:
```javascript
const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
```
Initializing new instance
```javascript
const coll = new Enumerable(cars);
```

### Select
To select some fields from collection:
```javascript
const result = coll.select(car => car.model);

assert.deepEqual(result.toArray(), ['m5', 'm4', 'sorento', 'rio', 'sportage']);
```

### Filter
To select some fields from collection:
```javascript
const result = coll.where(car => car.brand === 'kia');

assert.deepEqual(result.toArray(), [cars[2], cars[3], cars[4]]);
```

### Sort
To select some fields from collection:
```javascript
const result = coll.orderBy(car => car.year, 'desc')
  .where(car => car.brand === 'bmw')
  .select(car => car.model);

assert.deepEqual(result.toArray(), ['m5', 'm4']);
```
