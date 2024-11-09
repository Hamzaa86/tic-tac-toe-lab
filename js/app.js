/*-------------------------------- Constants --------------------------------*/
let title = document.querySelector('.title')
let turn = 'x'
function winner(id) {
  for (let i = 1; i < 10; i++) {
    sqr[i] = document.getElementById('0' + i).innerHTML
  }
  if (sqr[1] == sqr[2] && sqr[2] == sqr[3] && sqr[1] != '') {
    end(1, 2, 3)
  } else if (sqr[4] == sqr[5] && sqr[5] == sqr[6] && sqr[5] != '') {
    end(4, 5, 6)
  } else if (sqr[7] == sqr[8] && sqr[8] == sqr[9] && sqr[8] != '') {
    end(7, 8, 9)
  } else if (sqr[1] == sqr[4] && sqr[4] == sqr[7] && sqr[4] != '') {
    end(1, 4, 7)
  } else if (sqr[2] == sqr[5] && sqr[5] == sqr[8] && sqr[5] != '') {
    end(2, 5, 8)
  } else if (sqr[3] == sqr[6] && sqr[6] == sqr[9] && sqr[6] != '') {
    end(3, 6, 9)
  } else if (sqr[1] == sqr[5] && sqr[5] == sqr[9] && sqr[5] != '') {
    end(1, 5, 9)
  } else if (sqr[3] == sqr[5] && sqr[5] == sqr[7] && sqr[5] != '') {
    end(3, 5, 7)
  }
}
function board(id) {
  let element = document.getElementById(id)
  if (turn === 'x' && element.innerHTML == '') {
    element.innerHTML = 'x'
    turn = 'o'
    title.innerHTML = 'o'
  } else if (turn === 'o' && element.innerHTML == '') {
    element.innerHTML = 'o'
    turn = 'x'
    title.innerHTML = 'o'
  }
}
winner()
