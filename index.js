function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list li')

  ranks.forEach (rank =>
    rank.innerHTML = parseInt(rank.innerHTML) + n
  )
}

// probably not meant to solve it like this...
// function deepestChild() {
//   return document.querySelector('#grand-node div div div div')
// }

function deepestChild() {
  let children = document.querySelectorAll('#grand-node')
  let deepestLevel = 0
  let deepestChild = ''

  children.forEach(child =>
    let currentChild = child
    let level = 0
    while(currentChild.querySelector(':first-child') != null) {
      level++
      if(level > deepestLevel) {
        deepestLevel = level
        deepestChild = currentChild
      }
      currentChild = currentChild.querySelector(':first-child')
    }

    return deepestChild
  )
}
// function getAllChildren(group, children) {
//   children = children || [];
//   if(group && Array.isArray(group.children)) {
//     group.children.forEach(function(child) {
//       getAllChildren(child, children)
//     });
//   }
//   else {
//     children.push(group);
//   }
//   return children;
// }
//
// var data = { children: [{ children: [{ children: [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }] }, { children: [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }] }, { children: [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }] }] }, { children: [{ children: [{ name: 'item1' }] }, { children: [{ name: 'item1' }] }, { children: [{ name: 'item1' }] }] }, { children: [{ children: [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }] }, { children: [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }] }, { children: [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }] }] }] },
//     children = [data].reduce(function iter(r, a) {
//         if (Array.isArray(a.children)) {
//             return a.children.reduce(iter, r);
//         }
//         r.push(a);
//         return r;
//     }, []);
//
// console.log(children);
