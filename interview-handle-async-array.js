const _ = require('lodash')
const Users = [
  { name: 'Bob', company: 1 },
  { name: 'Alice', company: 2 },
  { name: 'John', company: 3 },
]
const Companies = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Facebook' },
  { id: 3, name: 'Google' }
]

const wait = second => new Promise(resolve => setTimeout(resolve, second * 1000))

const readUsers = async () => Users

const readCompanyById = async id => {
  await wait(2)
  if (id === 2) throw new Error('id should not be 2')
  return _.find(Companies, { id })
} 

/**
 * Please write a function that return:
 * [
 *   { name: 'Bob', company: { id: 1, name: 'Apple' } },
 *   { name: 'Alice', company: { id: 2, name: 'Facebook' } },
 *   { name: 'John', company: { id: 3, name: 'Google' } }
 * ]
 */

const getUsers = async () => {
  // please continue...
  
}

const main = async() => {
  console.log(awiat getUsers())
}

main()