class Enumerable {
    constructor(collection) {
        this.collection = collection;
    }

    where(fn) {
        const filtered = this.collection.filter(fn);
        return new Enumerable(filtered);
    }

    select(fn) {
        const selected = this.collection.map(fn);
        return new Enumerable(selected);
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
        const ordered = this.collection.slice().sort(comparator);
        return new Enumerable(ordered);
    }


    toArray() {
        return this.collection.slice();
    }
}

export default Enumerable;
