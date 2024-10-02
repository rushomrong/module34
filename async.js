//? fetch and set timeout has some issue they don't play the role at the same time

console.log(1);
console.log(2);
// setTimeout(doSomething, 4000);
setTimeout(() => {
  console.log("lazy load");
}, 4000);
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
  console.log(3);
}
