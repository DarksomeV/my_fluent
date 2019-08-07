class Enumerable {
    constructor(collection, operations) {
        this.collection = collection;
        this.operations = operations || [];
    }

    build(fn) {
        return new Enumerable(this.collection.slice(), this.operations.concat(fn));
    }

    where(fn) {
        return this.build(coll => coll.filter(fn));
    }

    select(fn) {
        return this.build(coll => coll.map(fn));
    }

    orderBy(fn, direction = 'asc') {
        const compareResult = direction === 'asc' ? 1 : -1;
        const comparator = (a, b) => {
            const a1 = fn(a);
            const b1 = fn(b);

            if (a1 > b1) {
                return compareResult;
            }
            if (a1 < b1) {
                return -compareResult;
            }

            return 0;
        };
        return this.build(coll => coll.sort(comparator));
    }


    toArray() {
        return this.operations.reduce((acc, func) => func(acc), this.collection);
    }
}

export default Enumerable;
