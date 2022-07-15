const _ = require('lodash')

// simulate searching time
const wait = second => new Promise(resolve => {
  setTimeout(() => {
    console.log(`finish searching in ${second}s`)
    resolve()
  }, second * 1000)
})

// simulate DB
const companies = [
  {
    id: 1,
    name: 'c1',
    userDB: 1, // 這個公司的 user 在 db1
    departmentIds: [1, 2]
  },
  {
    id: 2,
    name: 'c2',
    userDB: 2, // 這個公司的 user 在 db2
    departmentIds: [3]
  },
  {
    id: 3,
    name: 'c3',
    userDB: 3, // 這個公司的 user 在 db3
    departmentIds: [4]
  }
]

const departments = [
  // c1
  {
    id: 1,
    name: 'c1_d1',
    adjust: 200,
    groupIds: [1, 2]
  },
  {
    id: 2,
    name: 'c1_d2',
    adjust: -190,
    groupIds: [3]
  },
  // c2
  {
    id: 3,
    name: 'c2_d1',
    adjust: 180,
    groupIds: [4]
  },
  // c3
  {
    id: 4,
    name: 'c3_d1',
    adjust: -170,
    groupIds: [5]
  }
]

const groups = [
  // c1_d1
  {
    id: 1,
    name: 'c1_d1_g1',
    adjust: 160,
    userIds: [1, 2]
  },
  {
    id: 2,
    name: 'c1_d1_g2',
    adjust: -150,
    userIds: [3]
  },
  // c1_d2
  {
    id: 3,
    adjust: 140,
    name: 'c1_d2_g1',
    userIds: [4]

  },
  // c2_d1
  {
    id: 4,
    adjust: -130,
    name: 'c2_d1_g1',
    userIds: [1]
  },
  // c3_d1
  {
    id: 5,
    adjust: 120,
    name: 'c3_d1_g1',
    userIds: [1]
  }
]

const db1Users = [
  // c1_d1_g1
  {
    id: 1,
    name: 'c1_d1_g1_u1',
    adjust: 110,
    salary: 2000
  },
  {
    id: 2,
    name: 'c1_d1_g1_u2',
    adjust: -100,
    salary: 1900
  },
  // c1_d1_g2
  {
    id: 3,
    name: 'c1_d1_g2_u1',
    adjust: -100,
    salary: 1800
  },
  // c1_d2_g1
  {
    id: 4,
    name: 'c1_d2_g1_u1',
    adjust: 90,
    salary: 1700
  }
]

const db2Users = [
  {
    id: 1,
    name: 'c2_d1_g1_u1',
    adjust: -80,
    salary: 1600
  }
]

const db3Users = [
  {
    id: 1,
    name: 'c3_d1_g1_u1',
    adjust: -70,
    salary: 1500
  }
]

// simulate READ DB
const getCompanies = async () => {
  await wait(0.1)
  return companies
}

const getDepartments = async () => {
  await wait(0.1)
  return departments
}
const getDepartmentById = async departmentId => {
  await wait(0.1)
  return _.find(departments, { id: departmentId })
}

const getGroups = async () => {
  await wait(0.1)
  return groups
}

const getGroupById = async groupId => {
  await wait(0.1)
  return _.find(groups, { id: groupId })
}

const getUsersFromDB1 = async () => {
  await wait(0.1)
  return db1Users
}

const getUserByIdFromDB1 = async userId => {
  await wait(0.1)
  return _.find(db1Users, { id: userId })
}

const getUsersFromDB2 = async () => {
  await wait(0.1)
  return db2Users
}

const getUserByIdFromDB2 = async userId => {
  await wait(0.1)
  return _.find(db2Users, { id: userId })
}

const getUsersFromDB3 = async () => {
  await wait(0.1)
  return db3Users
}

const getUserByIdFromDB3 = async userId => {
  await wait(0.1)
  return _.find(db3Users, { id: userId })
}

// 問題1. 請把所有公司旗下所有資料撈出來，並將 xxxxIds 命名成 xxxx。
// 問題2. 計算每個 user 的 salary，按照每個組織結構的 adjust 調整 salary。