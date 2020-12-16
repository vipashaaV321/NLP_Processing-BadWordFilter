var Filter = require('bad-words'),
filter = new Filter();
var customFilter = new Filter({ placeHolder: 'x'});
customFilter.clean("Don't be an ash0le")
console.log(filter.clean("Don't be an ash0le"));
 
filter.addWords('some', 'bad', 'word');
 
filter.clean("some bad word!") //**** *** ****!
 
//or use an array using the spread operator
 
var newBadWords = ['some', 'bad', 'word'];
 
filter.addWords(...newBadWords);
 
console.log(filter.clean("some bad word!")) //**** *** ****!
 
//or
 
var filter = new Filter({ list: ['some', 'bad', 'word'] }); 
 
 
console.log(filter.clean("some bad word!")) //**** *** ****!