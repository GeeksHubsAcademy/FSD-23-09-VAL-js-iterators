const users = [
  {
    name: "Dani",
    age: 27,
    address: "Valencia"
  },
  {
    name: "Noelia",
    age: 25
  },
  {
    name: "Dani",
    age: 27,
    address: "Valencia"
  },
]

users.push({
  name: "Borja",
  age: 23
}, {
  name: "Antonio",
  age: 29
})

users[4].sex = "M"
users[3].sex = "M"



users[0].address = "Gandia"


const usersFilteredByAge = users.filter((element) => {
  return element.age > 26
})

console.log(usersFilteredByAge);