// Create a function using JavaScript for which you can pass the name of an item and theCobWeb
// and the function returns the smallest web it was found inside of.
// Your code should work if someone were to modify theCobWeb.  
// for example if you gave your program 
// comb it should give back biggestWeb
// toenails it should give back tinyWeb
// headphones it should give back otherBigWeb

const theCobWeb = {
    bigWeb: {
        item: "comb",
        biggerWeb: {
            items: ["glasses", "paperclip", "bubblegum"],
            smallerWeb: {
                item: "toothbrush",
                tinyWeb: {
                    items: ["toenails", "lint", "wrapper", "homework"]
                }
            }
        },
        otherBigWeb: {
            item: "headphones"
        }
    },
    otherBigWeb: {
        biggerWeb: {
            status: "working",
            residents: ["spiderOne, spiderTwo, spiderMan"]
        },
        brokenWeb: {
            status: "damaged"
        }
    }
};

function checkTheWeb(obj, item) {
    for (element in obj) {
        
    }
}

console.log(checkTheWeb(theCobWeb, "biggerWeb"));