function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

// probably not meant to solve it like this...
// function deepestChild() {
//   return document.querySelector('#grand-node div div div div')
// }

function deepestChild() {
  let children = document.querySelectorAll('#grand-node')

  for(let i = 0; i < children.length; i++) {
    
  }
}

