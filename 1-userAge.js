'use strict'

/*
 * Create a function `userAge` which take a user object and returns its age
 *
 * Créer une fonction `userAge` qui prend un object user et qui retourne son age
 *
 */

const user = {
 name: 'oraclerevolution',
 email: 'mac.n.drix@gmail.com',
 age:999
} // copy the one from the previous exercice

// Your code :
const userAge = object => object.age
console.log(userAge(user))