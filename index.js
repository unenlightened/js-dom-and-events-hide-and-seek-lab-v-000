function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  ranks = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML += n
  }
}

const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
}