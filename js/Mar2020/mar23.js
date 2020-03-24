// convert an array of objects into a binary search tree
// each object should have two properties, product name and sales total
// sort by sales total
// then return an object with the product with the lowest and highest sales total
// bonus get value closest to average of the lowest and highest sales total

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
            if (this.right) {
                return this.right.maxValue();
            } else {
                return this.data;
            }
        }
        minValue() {
            if (this.left) {
                return this.left.minValue();
            } else {
                return this.data;
            }
        }
        averageValue() {
            // calculate the average of the maximum and minimum values
            const averageTarget = (this.maxValue().sales_total + this.minValue().sales_total) / 2;
            const tempArr = [this];
            while (tempArr.length > 0) {
                const currNode = tempArr.shift();
                if (currNode.data.sales_total === averageTarget) {
                    return currNode;
                    // if the current node is less than the target and there is a value to the right and the value to the right is less than the average
                } else if (currNode.data.sales_total < averageTarget && currNode.right && currNode.right.data.sales_total < averageTarget) {
                    // add the right node to the array
                    tempArr.push(currNode.right);
                // if the current node is greater than the target and there is a value to the left and the value to the left is greater than the average
                } else if (currNode.data.sales_total > averageTarget && currNode.left && currNode.left.data.sales_total > averageTarget) {
                    // add the left node to the array
                    tempArr.push(currNode.left);
                    // if the current nodes is less than the target and there is a right node and the right node is less than the average
                    // we are then left with three potential options
                    // the current node
                    // the node to the right of the current node
                    // or the the node to the left of the node to the right of the current node
                } else if (currNode.data.sales_total < averageTarget && currNode.right && currNode.right.data.sales_total > averageTarget) {
                    // compare the three nodes
                    // set to absolute value to compare which one is closest to zero
                    const diff = {
                        curr: Math.abs(averageTarget - currNode.data.sales_total),
                        right: Math.abs(averageTarget - currNode.right.data.sales_total),
                        left: Math.abs(averageTarget - currNode.right.left.data.sales_total)
                    }
                    // get the difference closest to zero
                    const closestNodeDiff = Math.min(diff.curr, diff.right, diff.left);
                    // return the corresponding node
                    switch (closestNodeDiff) {
                        case diff.curr:
                            return currNode.data;
                        case diff.right:
                            return currNode.right.data;
                        case diff.left:
                            return currNode.right.left.data;
                        default:
                            return;
                    }
                    // if the current nodes is greater than the target and there is a left node and the left node is greater than the average
                    // we are then left with three potential options
                    // the current node
                    // the node to the left of the current node
                    // or the the node to the right of the node to the left of the current node
                } else if (currNode.data.sales_total > averageTarget && currNode.left && currNode.left.data.sales_total < averageTarget) {
                    // compare the three nodes
                    // set to absolute value to compare which one is closest to zero
                    const diff = {
                        curr: Math.abs(averageTarget - currNode.data.sales_total),
                        right: Math.abs(averageTarget - currNode.right.left.data.sales_total),
                        left: Math.abs(averageTarget - currNode.left.data.sales_total)
                    }
                    // get the difference closest to zero
                    const closestNodeDiff = Math.min(diff.curr, diff.right, diff.left);
                    // return the corresponding node
                    switch (closestNodeDiff) {
                        case diff.curr:
                            return currNode.data;
                        case diff.right:
                            return currNode.left.right.data;
                        case diff.left:
                            return currNode.left.data;
                        default:
                            return;
                    }
                } else {
                    // if none of these conditions are met, we are at the end of the tree and have reached the average node
                    return currNode.data;
                }
            }
        }
    }
    const originNode = new Node(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        originNode.insert(arr[i]);
    }
    const sales = {};
    sales["higest_sales"] = originNode.maxValue();
    sales["lowest_sales"] = originNode.minValue();
    sales["avg_product"] = originNode.averageValue();
    return sales;
}

console.log(convertBTS([
    { name: "soap", sales_total: 134.34 },
    { name: "popcorn", sales_total: 432.21 },
    { name: "fork", sales_total: 34.78 },
    { name: "light bulb", sales_total: 783.23 },
    { name: "pencil", sales_total: 12.99 },
    { name: "chip", sales_total: 234.03 },
    { name: "kombucha", sales_total: 553.56 },
    { name: "paper", sales_total: 7.23 },
    { name: "stress ball", sales_total: 56.34 },
    { name: "video game controller", sales_total: 99.99 },
    { name: "lottery ticket", sales_total: 52.39 },
    { name: "scissor", sales_total: 21.23 },
    { name: "cell phone", sales_total: 1003.76 },
    { name: "cheddar cheese", sales_total: 45.73 },
    { name: "toliet paper", sales_total: 870.45 }
]));
// { higest_sales: { name: 'cell phone', sales_total: 1003.76 },
//   lowest_sales: { name: 'paper', sales_total: 7.23 },
//   avg_product: { name: 'kombucha', sales_total: 553.56 } }