const _ = require('lodash')

const nodes = [1, 2, 2, 3, 3, null, null, 4, 4]

const solution = nodes => {
  const groupNode = (groupedNodes, nodes) => {
    if (_.isEmpty(nodes)) return groupedNodes
    if (_.isEmpty(groupedNodes)) {
      const root = _.head(nodes)
      const restNodes = _.drop(nodes)
      return groupNode([[root]], restNodes)
    }
    const notNullParents = _.compact(_.last(groupedNodes))
    const childrenCount = notNullParents.length * 2
    const children = _.take(nodes, childrenCount)
    const restNodes = _.drop(nodes, childrenCount)
    const newGroupedNodes = _.concat(groupedNodes, [children])
    return groupNode(newGroupedNodes, restNodes)
  }

  const toTree = groupedNodes => {
    const tree = _.reduceRight(groupedNodes, (children, nodeIds) => {
      const results = _.map(nodeIds, id => {
        const left = _.head(children)
        children = _.drop(children)
        const right = _.head(children)
        children = _.drop(children)
        return { val: id, left, right }
      })
      return results
    }, [])
    return tree
  }

  const groupedNodes = groupNode([], nodes)
  return toTree(groupedNodes)
}

console.log(JSON.stringify(solution(nodes), null, '   '))
