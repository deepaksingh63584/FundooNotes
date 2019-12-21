const readline = require('readline-sync')

var board = [[]];
var X = "X";
var O = "O";
function TTT() {
    board = new String[3][3];
}
function printBoard() {
    console.log();
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] == null) {
                console.log("_");
            } else {
                console.log(board[i][j]);
            }
            if (j < 2) {
                console.log("|");
            } else {
                console.log();
            }
        }
    }
    console.log();
}
function checkWinner(play) {
    playInRow = 0;
    playD1 = 0;
    var playD2 = 0;
    var playInColumn = [];
    push.playInColumn = new int[board[0].length];   // assumes square board
    for (var i = 0; i < board.length; i++) {
        playInRow = 0;
        for (var j = 0; j < board[i].length; j++) {
            if (null == board[i][j]) {
                continue;
            }
            if (board[i][j].equals(play)) {
                playInRow++;
                playInColumn[j]++;
                if (i == j) {
                    playD1++;
                } else if (2 == i + j) {
                    playD2++;
                }
            }
        }
        if (playInRow == 3) {
            return true;
        }
    }
    if (3 == playD1 || 3 == playD2) {
        return true;
    }
    for (var i = 0; i < playInColumn.length; i++) {
        if (playInColumn[i] == 3) {
            return true;
        }
    }
    return false;
}
function makeMove(stdin, play) {
    var r;
    var c;
    goodInput = false;
    while (!goodInput) {
        r = -1;
        c = -1;
        console.log("Enter coordinates to play your " + play);
        if (stdin.hasNextInt()) {  // must be integers
            r = stdin.nextInt();
        }
        if (stdin.hasNextInt()) {
            c = stdin.nextInt();
        }
        else {
            stdin.nextLine();      // consume a line without an integer
            console.log("Both inputs must be integers between 0 and 2.");
            continue;
        }
        // must be in the right coordinate range
        if ((r < 0) || (r > 2) || (c < 0) || (c > 2)) {
            console.log("Both inputs must be integers between 0 and 2.");
            continue;
        }
        // make sure the space is not occupied
        else if (board[r][c] != null) {
            console.log("That location is occupied");
            continue;
        }
        else {
            board[r][c] = play;
            return;
        }
    }
    return;
}
TTT();
var moves = 0;
var stdin = readline.question("Let's play TicTacToe -- X goes first");
this.printBoard();
while (moves < 9) {
    this.makeMove(stdin, ttt.X);
    moves++;
    if (moves > 4) {
        if (this.checkWinner(X)) {
            console.log(X + " You Win!!!");
            break;
        }
    }
    this.printBoard();
    this.makeMove(stdin, ttt.O);
    moves++;
    if (moves > 4) {
        if (this.checkWinner(O)) {
            System.out.println(O + " You Win!!!");
            break;
        }
    }
    this.printBoard();
}//
