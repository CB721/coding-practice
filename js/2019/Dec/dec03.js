var body = document.body;
var doc = document.getElementsByClassName("all-sections");
console.log(doc);

// if (doc[0].id === "my-div") {
//     var currentDiv = doc.id;
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "🤩";
//     body.appendChild(paragraph);
//     paragraph.setAttribute("style", "font-size: 25px;");
// }
// if (doc[0].id === "your-div") {
//     var currentDiv = doc.id;
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "🤩";
//     body.appendChild(paragraph);
//     paragraph.setAttribute("style", "font-size: 25px;");
// }
// if (doc[0].id === "our-div") {
//     var currentDiv = doc.id;
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "🤩";
//     body.appendChild(paragraph);
//     paragraph.setAttribute("style", "font-size: 25px;");
// }
// if (doc[1].id === "my-div") {
//     var currentDiv = doc.id;
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "🤩";
//     body.appendChild(paragraph);
//     paragraph.setAttribute("style", "font-size: 25px;");
// }
// if (doc[1].id === "your-div") {
//     var currentDiv = doc.id;
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "🤩";
//     body.appendChild(paragraph);
//     paragraph.setAttribute("style", "font-size: 25px;");
// }
// if (doc[1].id === "our-div") {
//     var currentDiv = doc.id;
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "🤩";
//     body.appendChild(paragraph);
//     paragraph.setAttribute("style", "font-size: 25px;");
// }
// if (doc[2].id === "my-div") {
//     var currentDiv = doc.id;
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "🤩";
//     body.appendChild(paragraph);
//     paragraph.setAttribute("style", "font-size: 25px;");
// }
// if (doc[2].id === "your-div") {
//     var currentDiv = doc.id;
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "🤩";
//     body.appendChild(paragraph);
//     paragraph.setAttribute("style", "font-size: 25px;");
// }
// if (doc[2].id === "our-div") {
//     var currentDiv = doc.id;
//     var paragraph = document.createElement("p");
//     paragraph.textContent = "🤩";
//     body.appendChild(paragraph);
//     paragraph.setAttribute("style", "font-size: 25px;");
// }

for (var i = 0; i < doc.length; i++) {
    createDivs(doc[i]);
}
function createDivs(classArtItem) {
    var currentDiv = classArtItem.id;
    var paragraph = document.createElement("p");
    if (currentDiv === "my-div") {
        paragraph.textContent = "All-🤩";
    } else if (currentDiv === "your-div") {
        paragraph.textContent = "🐧"
    } else {
        paragraph.textContent = "Eat da 🍔";
    }
    body.appendChild(paragraph);
    paragraph.setAttribute("style", "font-size: 25px;");
}
