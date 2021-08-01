// function a() {
//     console.log('A');
// }

// console.log(a);

var a = function() {
    console.log('A');
}

function slowFunc(callback) {
    callback();
}

slowFunc(a);