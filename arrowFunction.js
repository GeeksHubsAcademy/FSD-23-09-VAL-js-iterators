function saludar() {
  console.log('saludo 1');
}

// const saludar2 = () => {

//   return ["Noelia"];
// } 

// const result = saludar2();
// console.log(result[0]);


// const saludar3 = () => { 
//   // console.log(saludo);
//   // const frase = saludo + " " + name
//   // return frase;
// } 

// const buenosDias = "Buenos dias";
// const result3 = saludar3(buenosDias, "Cristian");

// // console.log(result3);


// function dniValidator(numDni, letterDni) {
//   const lettersDni = "TRWAGMYFPDXBNJZSQVHLCKET".split("");
  
//   const letterDniPositition = numDni % 23;

//   if(lettersDni[letterDniPositition] === letterDni) {
//     return true
//   }

//   return false;
// }

const dniValidator = (numDni, letterDni) => {
  const lettersDni = "TRWAGMYFPDXBNJZSQVHLCKET".split("");
  
  const letterDniPositition = numDni % 23;

  if(lettersDni[letterDniPositition] === letterDni) {
    return true
  }

  return false;
}

console.log(dniValidator(12345678, 'A'));
