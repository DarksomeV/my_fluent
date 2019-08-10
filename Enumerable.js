class Enumerable {
    constructor(collection, operations) {
        this.collection = collection;
        this.operations = operations || [];
    }


    build(fn) {
        return new Enumerable(this.collection.slice(), this.operations.concat(fn));
    }


    where(...args) {
        let newOps = [];
        newOps = args.reduce((acc, curr) => {
            if (typeof curr === "function"){
                return acc.concat(coll => coll.filter(curr));
            }

            if (typeof curr === "object"){
                // { brand: 'kia', model: 'sorento' }
                let newKeys = Object.keys(curr);
                return acc.concat(coll => coll.filter(car => {
                    return newKeys.every(c => car[c] == curr[c]);
                }))
            }
        }, []);
        return this.build(newOps);
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

    getProcessedCollection() {
        if (!this.memo) {
            this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
        }

        return this.memo;
    }


    toArray() {
        return this.getProcessedCollection().slice();
    }

    get length() {
        return this.toArray().length;
    }
}

export default Enumerable;
