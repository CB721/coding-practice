// a hash table is used to store key/value pairs - like an object
// it uses a hash function to compute an index into an array in which an element will be inserted or searched
// it should contain three properties: data, numItems and loadFactor
// it should have 4 functions: hash, resize, getItem and setItem
// average time to search for an element in a hash table is O(n)


class HashTable {
    constructor() {
        this.data = new Array(7);
        this.numItems = 0;
        this.loadFactor = this.numItems / this.data.length;
    }
    hash(str, size) {
        let num = 7;
        for (let i = 0; i < str.length; i++) {
            num = (13 * str[i].charCodeAt(0)) % size;
        }
        return num;
    }
    resize() {
        const newData = new Array(this.data.length * 2);
        this.data.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const num = this.hash(key, newData.length);
                    if (newData[num]) {
                        newData[num].push([key, value]);
                    } else {
                        newData[num] = [[key, value]];
                    }
                    newData[num] = value;
                })
            }
        });
        this.numItems = newData.length;
        this.data = newData;
    }
    getItem(key) {
        const num = this.hash(key, this.data.length);
        if (!this.data[num]) {
            return null;
        }
        return this.data[num].find(element => element[0] === key)[1];
    }
    setItem(key, value) {
        if (this.loadFactor > 0.8) {
            this.resize();
        }
        const num = this.hash(key, this.data.length);
        if (this.data[num]) {
            this.data[num].push([key, value]);
        } else {
            this.data[num] = [[key, value]];
            this.numItems++;
            this.loadFactor = this.numItems / this.data.length;
        }
    }
}

const table = new HashTable();
table.setItem("city", "cleveland");
table.setItem("teamName", "cavaliers");
table.setItem("lastChampionship", 2016);
table.setItem("yearEst", 1970)
console.log(table);
console.log(table.getItem("city")); // cleveland
console.log(table.getItem("teamName")); // cavaliers
console.log(table.getItem("lastChampionship")); // 2016
console.log(table.getItem("yearEst")); // 1970