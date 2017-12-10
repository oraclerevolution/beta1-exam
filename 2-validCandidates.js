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

// Your code :
const validCandidates = array => {
  if(array[2] >= 18 && array[2] <= 25){
      console.log(array)
  }
}
 console.log(validCandidates(['kouame fofana','k.fofana@mail.co',19]))
 console.log(validCandidates(['seydou koné','s.kone@mail.co',23]))
 console.log(validCandidates(['abdoulaye koné','a.kone@mail.co',18]))
 console.log(validCandidates(['fanta bamba', 'f.bamba@mail.co', 26]))
 console.log(validCandidates(['karidja coulibaly', 'k.coulibaly@mail.co', 21]))
 console.log(validCandidates(['siaka traoré', 's.traore@mail.co', 18]))
 console.log(validCandidates(['ahou bakayoko', 'a.bakayoko@mail.co', 27]))
 console.log(validCandidates(['naminata dao', 'n.dao@mail.co', 20]))
 console.log(validCandidates(['naminata koné', 'n.kone@mail.co', 23]))
 console.log(validCandidates(['awa coulibaly', 'a.coulibaly@mail.co', 17]))
 console.log(validCandidates(['drissa coulibaly', 'd.coulibaly@mail.co', 20]))
 console.log(validCandidates(['adjoua traoré', 'a.traore@mail.co', 25]))
 console.log(validCandidates(['aya dao', 'a.dao@mail.co', 18]))
 console.log(validCandidates(['siaka koné', 's.kone@mail.co', 22 ]))
 console.log(validCandidates(['sita touré', 's.toure@mail.co', 24 ]))