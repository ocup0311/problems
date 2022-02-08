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

const readUsers = async () => Users

const readCompanyById = async id => _.find(Companies, { id })

/*
return: [
  { name: 'Bob', company: { id: 1, name: 'Apple' } },
  { name: 'Alice', company: { id: 2, name: 'Facebook' } },
  { name: 'John', company: { id: 3, name: 'Google' } }
]
*/
const getUsers = async () => {
  const users = await readUsers()
  // please continue...
  return users
}

;(async () => {
  console.log(await getUsers());
})()

