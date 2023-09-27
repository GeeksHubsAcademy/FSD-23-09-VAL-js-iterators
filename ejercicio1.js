const nombre = "Daniel";


const funcion1 = (arrayNombres) => {
  const result = []
  for (let i = 0; i < arrayNombres.length; i++) {
    result.push(arrayNombres[i].length)
  }

  return result
}

const arrayNombres = ['Dani', 'Noelia', 'Antonio'];
console.log(funcion1(arrayNombres))