// normal callback function
var c;
// function addtion(a = 4,b = 5){
//     c = a+b;
//     return c;
// }

// let addtion = function(a = 4,b = 5) {
//     c = a+b;
//    return c;
// }


// Dooperation(addtion);

// function Dooperation(operation){
//     operation();
//     let b = 1;
//     b = b + c;
//     console.log(b);
//     operation(10,20);
// }

// forEach function

let arr = [1,2,3];

function operation(val,index){
    console.log(index,val*val);
}

arr.forEach(operation);

// map

const arrmap = arr.map((v1) => v1 + v1);
console.log(arrmap);

// filter

let arobj = [{ name : "sam"},{name : "ramasamy"},{name : "ramky"}];

const arfilter = arobj.filter((names) => (names.name.length)  > 3);
console.log(arfilter);

// find

const findar = arobj.find((val) => val.name ==="sam");
console.log(findar);

// findIndex

const findindexar = arobj.findIndex((val) => val.name ==="sam");
console.log(findindexar);

// reduce

arr = [1,2,3,4];

function ops(prev, curr){
    return prev + curr;

}

const output = arr.reduce(ops);
console.log(output);

// print keys

a = {
    name : "sam",
    age : 36,
    val : { name : "ram", age : 36}
}

console.log(Object.keys(a));

