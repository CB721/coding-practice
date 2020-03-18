// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

function getOrder(input) {
    // split into individual characters
    const splitOrder = input.split("");
    // unsorted order array
    const orderArr = [];
    // temp variable for each order item
    let orderItem = "";
    // loop through characters to create order items
    for (let i = 0; i < splitOrder.length; i++) {
        // if the string is equal to a menu item
        if (orderItem === "Burger" || orderItem === "Fries" || orderItem === "Chicken" || orderItem === "Pizza" || orderItem === "Sandwich" || orderItem === "Onionrings" || orderItem === "Milkshake" || orderItem === "Coke") {
            // add to order array
            orderArr.push(orderItem);
            // clear the order item string
            orderItem = "";
        } 
        // if the order item string is empty
        if (orderItem.length < 1) {
            // capitalize and add to order item string
            orderItem = splitOrder[i].toUpperCase();
        } else {
            // just add to order item string
            orderItem += splitOrder[i];
        }
    }
    orderArr.push(orderItem);
    // create an object to keep a tally of how many times an item appears in the order array
    const orderObj = {};
    for (let i = 0; i < orderArr.length; i++) {
        if (orderObj[orderArr[i]]) {
            orderObj[orderArr[i]]++;
        } else {
            orderObj[orderArr[i]] = 1;
        }
    }
    // create a set of the order array
    const orderSet = new Set(orderArr);
    // template for the specified order of the menu items
    const order = ["Burger",
        "Fries",
        "Chicken",
        "Pizza",
        "Sandwich",
        "Onionrings",
        "Milkshake",
        "Coke"];
    // sort the set and store in a new array
    const sortedArr = order.filter(item => orderSet.has(item));
    const completeOrderArr = [];
    // iterate over the array
    for (let i = 0; i < sortedArr.length; i++) {
        // for however many times the item appears in the order object
        for (let j = 0; j < orderObj[sortedArr[i]]; j++) {
            // add to the complete order array
            completeOrderArr.push(sortedArr[i]);
        }
    }
    return completeOrderArr.join(" ");
}

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"))
//  "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"))
//  "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"