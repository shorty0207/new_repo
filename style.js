const thisGame = new ThisGame()
thisGame.start()

function ThisGame (){
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn = 0;

    this.start = function (){
        const config = {childList: true}
        const observer = new MutationObserver(() => takeTurn())
        board.positions.forEach((el)=> observer.observe(el, config))
        takeTurn()
    }
    function takeTurn() {
        if (turn % 2 === 0){
            humanPlayer.takeTurn()
        }else{
            computerPlayer.takeTurn()
        }

        turn++
    }
}
function Board() {
    this.positions = Array.from(document.querySelectorAll('.btn'))
    console.log(this.positions)

}
function HumanPlayer(board) {
    this.takeTurn = function () {

        board.positions
            .forEach(el =>el.addEventListener('click', handleTurnTaken))

    }
    function  handleTurnTaken (event) {
        event.target.innerText = "X"
        board.positions.forEach(el => el.removeEventListener('click', handleTurnTaken))
    }
}
function ComputerPlayer(board) {
    this.takeTurn = function (){
        const availablePositions = board.positions.filter((p) => p.innerText === "")
        const move = Math.floor(Math.random() * availablePositions.length)
        availablePositions[move].innerText = "O"
    }
}

