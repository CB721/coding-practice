// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string

function domainName(url) {
    if (url.indexOf("//") < 0) {
        url = "http://" + url;
    }
    let name = new URL(url).hostname;
    if (name.indexOf("www.") >= 0) {
        name = name.split("www.")[1];
    }
    name = name.split(".")[0]
    return name;
}

console.log(domainName("http://google.com"));
// google
console.log(domainName("http://google.co.jp"));
// google
console.log(domainName("www.xakep.ru"));
// xakep
console.log(domainName("https://youtube.com"));
// youtube