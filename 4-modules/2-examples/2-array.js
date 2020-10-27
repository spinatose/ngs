// Top-level API is an array

exports.b = 26;// this adds a proerty to the module.exports
module.exports.a = 23 ; // this adds a property to the module.exports object
module.exports = [2, 3, 5, 7]; // this replaces the whole object so line above is lost
exports = 5; // this has no effect, because just makes exports no longer point to module.exports