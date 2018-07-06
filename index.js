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

  children.forEach(child => {
    let currentChild = child
    let currentLevel = 0

    while(currentChild.querySelector(':first-child') != null) {
      currentLevel++
      currentChild = currentChild.querySelector(':first-child')
      if(currentLevel > deepestLevel) {
        deepestLevel = currentLevel
        deepestChild = currentChild
      }
    }
  })

  return deepestChild
}
