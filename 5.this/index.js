// console.log(this);

// const test = {
//     props: "test",
//     functions() {
//         console.log(" hi from fun 1");
//     }
// }

// console.log(test.functions());
// console.log(this === window);

// a = 33;
// console.log(window.a);
function fun1() {
    'use strict';
    return this;
}
console.log(fun1() === globalThis);