const { Node } = require("../DataStructures/tree");
// given the root node of a tree, return an array where each element is the width of the tree at each level

function levelWidth(root) {
    const tempArr = [root, "stop"];
    const counters = [0];
    while(tempArr.length > 1) {
        const currNode = tempArr.shift();
        // if we have reached the stopper variable
        if (currNode === "stop") {
            tempArr.push("stop");
            counters.push(0);
        } else {
            tempArr.push(...currNode.children);
            // remove last element from counters array and increment by one
            const lastCounterElement = counters.pop() + 1;
            counters.push(lastCounterElement);
        }
    }
    return counters;
}

const node = new Node("jack");
node.add("randall");
node.add("kevin");
node.add("kate");
node.children[0].add("tess");
node.children[0].add("annie");
node.children[0].add("deja");
node.children[2].add("jack jr");

console.log(levelWidth(node));
// [1, 3, 4]