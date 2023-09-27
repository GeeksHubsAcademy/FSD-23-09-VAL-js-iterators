const flores = ['rosa', 'mIta', 'clavel', 'andris'];

const floresFilteredByLength = flores.filter((element) => {
  return element.length > 5 || element.toLowerCase().includes('i')
})

// let arrayFlores = [];
// floresFilteredByLength.forEach((element) => {
//   if(element.length > 5) {
//     arrayFlores.push(element)
//   }
// });

console.log(floresFilteredByLength);