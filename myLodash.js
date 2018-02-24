// function chunk(array, num) {
//     var innerArray = [];
//     var result = [innerArray];
//     for (var i = 0; i < array.length; i++) {
//         innerArray.push(array[i]);
//         if ((i + 1) % num === 0 && i > 0) {
//             innerArray = [];
//             result.push(innerArray);
//         }
//     }
//     return result;
// }
//
// var _ = {
//     chunk: chunk
// }
//
// console.log(_.chunk(['a', 'b', 'c', 'd','e'], 2));
// console.log(_.chunk(['a', 'b', 'c', 'd'], 3));

// function compact(array) {
//     var result = []
//     for (var i = 0; i < array.length; i++) {
//         console.log(array[i])
//         if (array[i]) {
//            result.push(array[i])
//         }
//     }
//     return result;
// }
//
//
// var _ = {
//     compact: compact
// }
// console.log(_.compact([0, 1, false, 2, '', 3,NaN,undefined,false]))
// function concat(array,elements){
//
// return array.push(elements);
//
// console.log(array)
//
// }
// var _={
//     concat: concat
// };
// console.log(_.concat([1,2,3],5))

// function pullAll(array,arr){
//    var result=[]
//     var lenarr=arr.length
//   var lenarr=arr.length;
//    for(var i=0;i<array.length;i++){
//    if(array[i]!==arr[0]&&array[i]!==arr[lenarr-1]){
//
//        result.push(array[i]);
//    }
//    }
//    return result;
// }
//
// var _={
//     pullAll: pullAll
// };
// console.log(_.pullAll(['a', 'b', 'c', 'a', 'b', 'c'],['a', 'c']))


// function join(array, string) {
//     var str = ''
//     for (var i = 0; i < array.length; i++) {
//
//         if (array[i] < array[array.length - 1]) {
//             str += array[i] + string
//         } else {
//             str += array[i]
//         }
//     }
//
//     return str;
// }
//
// var _ = {
//     join: join
// }
// console.log(_.join(['a', 'b', 'c'], '~'))

//


// function reverse(array) {
//     var result = [];
//     for (var i = array.length - 1; i >= 0; i--) {
//         result.push(array[i])
//
//     }
//     return result
// }
//
// var _ = {
//     reverse: reverse
// }
// console.log(_.reverse([1, 2, 3]))

// function sortedIndex(array,value){
//     for (var i=0;i<array.length;i++){
//         if(value > array[i]&& value<array[i+1]){
//
//             value=i+1;
//
//         }
//     }
//
// return value;
// }
// var _={
//     sortedIndex:sortedIndex
// }
// console.log(_.sortedIndex([30,50,70],60))

// function tail(array) {
//     var result = []
//     for (var i = 1; i < array.length; i++) {
//         result.push(array[i])
//
//     }
//     return result;
// }
//
// var _ = {
//     tail: tail
// }
// console.log(_.tail([1, 2, 3]))

// function union(arrays) {

// }
// var _={
//     union:union
// }
// console.log(_.union([2],[1,2]))

// function split(string, separator, limit) {
//     var result = [];
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] !== separator && result.length < limit) {
//             console.log(string[i])
//             result.push(string[i])
//         }
//     }
//     return result
// }
// var _ = {
//     split: split
// }
// console.log(_.split('a-b-c', '-', 2))

// function repeat(string,num){
// var result='';
//     for (var i=1;i<=num;i++){
//     result+=string;
//     }
// return result
// }
// var _={
//     repeat:repeat
// }
// console.log(_.repeat('*', 1))
//  function forEach(array, func){
//     for(var i=0; i<array.length;i++){
//         func(array[i])
//     }
// };
//
// var _={
//     forEach: forEach
// }
// _.forEach([54,9,7,6],function (value) {
// console.log(value);
// });
// function forEach(obj, func) {
//         for (var i in obj) {
//             func(obj[i], i)
//         }
// }
// var _ = {
//     forEach: forEach
// }
// _.forEach({'a': 1, 'b': 2}, function (value, key) {
//     console.log( key)
// });


// function map(obj,func){
//
//     for(var i in obj){
//         obj[i]=obj[i]*obj[i]
//         func(obj[i])
//     }
// }
// var _={
//     map:map
// }
//
// _.map({ 'a': 4, 'b': 8 },function(value){
//     console.log(value)
// })
//
// function keys(obj){
// var result=[]
// for(var i in obj){
//      result.push(i)
// }
// return result
// }
// var _={
//     keys:keys
// }
// console.log(_.keys({ 'a': 4, 'b': 8 }))

// function omit(obj, path) {
//     for (var i in obj) {
//         for(var j in path){
//             if(i===path[j]){
//                delete obj[i]
//             }
//         }
//     }
// return obj
// }
// var _ = {
//     omit: omit
// }
//
// console.log(_.omit({'a': 1, 'b': '2', 'c': 3}, ['a', 'c']))
//
// function pick(obj,path) {
//     var result={}
// for(var i in obj){
// for(var j in path){
//     if(i===path[j]){
//         result[path[j]]=obj[i]
// }
//
//         }
// }
//     return result
// }
// var _={
//     pick:pick
// }
// console.log(_.pick({'a': 1, 'b': '2', 'c': 3}, ['a', 'c']))

// function isString(string){
// if(typeof string==='string'){
//     return true;
// }else {
//     return false;
// }
// }
// var _={
//     isString:isString
// }
// console.log(_.isString('abc'))

// function isEmpty(value){
//     if(value==={}||value===[]|| typeof value==='string'||typeof value==='number'|| value ===null||value===undefined || value===true||value===false){
//         return true
//     }else{
//         return false
//     }
//
// }
// var _={
//     isEmpty:isEmpty
// }
// console.log(_.isEmpty(false))

function add(a,b){
    if(typeof a==='number'&& typeof b==='number'){
        return a+b;
    }
    else{
        console.log('Wrong value')
    }
}
var _={
    add:add
}
console.log(_.add(6,9))