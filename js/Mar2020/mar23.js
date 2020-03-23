// convert an array of objects into a binary search tree
// each object should have two properties, product name and sales total
// sort by sales total
// then return an object with the product with the lowest and highest sales total

function convertBTS(arr) {
    class Node {
        constructor(data) {
            this.data = data;
            this.right = null;
            this.left = null;
        }
        insert(data) {
            const evalData = data.sales_total;
            const thisData = this.data.sales_total;
            if (thisData > evalData && this.left) {
                this.left.insert(data);
            } else if (thisData < evalData && this.right) {
                this.right.insert(data);
            } else if (thisData > evalData) {
                this.left = new Node(data);
            } else if (thisData < evalData) {
                this.right = new Node(data);
            }
        }
        maxValue() {
            if(this.right) {
                return this.right.maxValue();
            } else {
                return this.data;
            }
        }
        minValue() {
            if(this.left) {
                return this.left.minValue();
            } else {
                return this.data;
            }
        }
    }
    const originNode = new Node(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        originNode.insert(arr[i]);
    }
    const minMax = {};
    minMax["higest_sales"] = originNode.maxValue();
    minMax["lowest_sales"] = originNode.minValue();
    return minMax;
}

console.log(convertBTS([
    { name: "soap", sales_total: 134.34 },
    { name: "popcorn", sales_total: 432.21 },
    { name: "forks", sales_total: 34.78 },
    { name: "light bulbs", sales_total: 783.23 },
    { name: "pencils", sales_total: 12.99 },
    { name: "chips", sales_total: 234.03 },
    { name: "kombucha", sales_total: 553.56 },
    { name: "paper", sales_total: 7.23 },
    { name: "stress balls", sales_total: 56.34 },
    { name: "video game controllers", sales_total: 99.99 },
    { name: "lottery tickets", sales_total: 52.39 },
    { name: "scissors", sales_total: 21.23 },
    { name: "cell phones", sales_total: 1003.76 },
    { name: "cheddar cheese", sales_total: 45.73 },
    { name: "toliet paper", sales_total: 870.45 }
]));