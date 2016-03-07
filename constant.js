http://stackoverflow.com/questions/8595509/how-do-you-share-constants-in-nodejs-modules

./lib/constants.js
module.exports = Object.freeze({
    MY_CONSTANT: 'some value',
    ANOTHER_CONSTANT: 'another value'
});



./lib/some-module.js
var constants = require('./constants');

console.log(constants.MY_CONSTANT); // 'some value'

constants.MY_CONSTANT = 'some other value';

console.log(constants.MY_CONSTANT); // 'some value'
