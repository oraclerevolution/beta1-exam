'use strict'

/*
 * Create a function `validCandidates` that takes an array of users
 * and returns only those which age is between 18 & 25 (both included)
 *
 * Créer une fonction `validCandidates` qui prend un array d'utilisateurs
 * et retourne seulement ceux qui ont entre 18 et 25 ans (inclus)
 * 
 */

const users = [
  { name: 'kouame fofana', email: 'k.fofana@mail.co', age: 19 },
  { name: 'seydou koné', email: 's.kone@mail.co', age: 23 },
  { name: 'abdoulaye koné', email: 'a.kone@mail.co', age: 18 },
  { name: 'fanta bamba', email: 'f.bamba@mail.co', age: 26 },
  { name: 'karidja coulibaly', email: 'k.coulibaly@mail.co', age: 21 },
  { name: 'siaka traoré', email: 's.traore@mail.co', age: 18 },
  { name: 'ahou bakayoko', email: 'a.bakayoko@mail.co', age: 27 },
  { name: 'naminata dao', email: 'n.dao@mail.co', age: 20 },
  { name: 'naminata koné', email: 'n.kone@mail.co', age: 23 },
  { name: 'awa coulibaly', email: 'a.coulibaly@mail.co', age: 17 },
  { name: 'drissa coulibaly', email: 'd.coulibaly@mail.co', age: 20 },
  { name: 'adjoua traoré', email: 'a.traore@mail.co', age: 25 },
  { name: 'aya dao', email: 'a.dao@mail.co', age: 18 },
  { name: 'siaka koné', email: 's.kone@mail.co', age: 22 },
  { name: 'sita touré', email: 's.toure@mail.co', age: 24 },
]
const isNumber = object => {
  return object >= 18 && object <= 25
}

const filterByAge = item => {
  if(isNumber(item.age)){
    return true
  }
    
    return false
}

let result = users.filter(filterByAge)
console.log(result)
// Your code without the function filter()
// let i = 0
// const validCandidates = array => {
//   for(i = 0; i < array.length - 1; i++){
//     if(array[i].age >= 18 && array[i].age <= 25){
//       console.log(array[i])
//     }
//   }
// }

// console.log(validCandidates(users))
