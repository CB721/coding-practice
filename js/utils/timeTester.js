function timeTester(fn, ...paramters) {
    console.time('test function');
    fn(...paramters);
    return console.timeEnd('test function');
}

module.exports = { timeTester };