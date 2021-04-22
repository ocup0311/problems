const _ = require('lodash')

// Turn this
const items = [
  { id: 'root', children: [2, 3] },
  { id: 1, children: [3] },
  { id: 2, children: [] },
  { id: 3, children: [4, 5] },
  { id: 4, children: [2] },
  { id: 5, children: [] }
]

// To this
// [
//   {
//    "id": "root",
//    "children": [
//     {
//      "id": 2,
//      "children": []
//     },
//     {
//      "id": 3,
//      "children": [
//       {
//        "id": 4,
//        "children": [
//         {
//          "id": 2,
//          "children": []
//         }
//        ]
//       },
//       {
//        "id": 5,
//        "children": []
//       }
//      ]
//     }
//    ]
//   }
//  ]
const solution1 = items => {
  const idsToChildren = input => {
    const idToItem = id => {
      const item = _.find(items, { id })
      if (_.isEmpty(item.children)) return item
      return {
        ...item,
        children: _.concat(idsToChildren(_.head(item.children)), idsToChildren(_.tail(item.children)))
      }
    }

    // toChildren
    if (_.isArray(input)) {
      if (_.isEmpty(input)) return []
      const root = _.find(input, { id: 'root' })
      if (root) {
        return [{ ...root, children: idsToChildren(root.children) }]
      }
      const head = _.head(input)
      return _.concat(idToItem(head), idsToChildren(_.tail(input)))
    }
    if (_.isNumber(input)) return idToItem(input)
  }

  const root = _.cloneDeep(_.find(items, { id: 'root' }))
  const result = idsToChildren([root])
  return result
}
console.log(JSON.stringify(solution1(items), null, ' '))

const solution2 = items => {
  const idToNode = id => {
    const item = _.find(items, { id })
    return {
      ...item,
      children: _.map(item.children, idToNode)
    }
  }
  return [idToNode('root')]
}
console.log(JSON.stringify(solution2(items), null, '  '))
