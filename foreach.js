// const nombres = ['Dani', 'Noelia'];
const flores = ['rosa', 'margarita', 'clavel'];

// nombres.forEach((nombre, i) => {
//   console.log(i);
// });

// // flores.forEach((flor) => {
// //   console.log(flor);
// // });


let numeros = [1, 2, 3, 4, 11, 15, 39]
let dobles = []
numeros.forEach((element) => {
  return dobles.push(2*element)
})

console.log(dobles)

const doblesFiltered = dobles.filter((element) => {
  return element > 8 && element < 31
})

dob

console.log(doblesFiltered);