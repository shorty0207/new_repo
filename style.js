const buttons = document.getElementsByClassName('btn')
const winner1 = document.getElementById('winner1')
const winner = document.getElementById('winner')



let turn = true


function boxClicked (event) {
    let el = event.target

    if (!el.classList.contains('o') && !el.classList.contains('x')) {
    if (turn) {
            el.classList.add('x')
            checkWin('x')
        }
     else {
            el.classList.add('o')
            checkWin('o')

        }
        turn = !turn

        console.log(event)
    }


}




function checkWin(symbol){
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.map(x =>{
        if (buttons[x[0]].classList.contains(symbol) &&
            buttons[x[1]].classList.contains(symbol) &&
            buttons[x[2]].classList.contains(symbol)){
            winner.innerText = symbol + " player wins"

        }
    })


}