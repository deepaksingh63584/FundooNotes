const readline = require('readline-sync')

tictacteo()
{
    let player = 0;
    let Board = new Array[3][3];
    let isEmpty = true;

    Board()
    {
        console.log(" Tic Tac Teo game \n Computer is x \n player is 0 : \n");
        for (let i = 0; i < Board[i].lenght; i++) {
            for (let j = 0; j < Board[j].length; j++) {
                Board[i][j] = -10;

            }
        }
        console.log("Board is this : \n ");
        dispBoard();
    }
    dispBoard()
    {
        var count = 0;
        for (var i = 0; i < Board.length; i++) {
            console.log("---------------");
            console.log("||");
            for (var j = 0; j < Board[i].length; j++) {
                if (Board[i][j] == 0) {
                    count++;
                    console.log(" o |");
                } else if (Board[i][j] == 1) {
                    count++;
                    console.log(" x |");
                } else
                    console.log("   |");
            }
            console.log("|");
        }
        if (count == 9) {
            isEmpty = false;
        }
        console.log("---------------");
    }
    /*
     * static void putVal(int i, int j, int player) { if if (player % 2 == 0) {
     * BOARD[i][j] = 0; } else BOARD[i][j] = 1; }
     */

    putVal()
    {
        var i;
        var j;
        if (player % 2 == 1) {
            i = (Math.random() * 10) % 3;
            j = (Math.random() * 10) % 3;
        } else {
            var s = readline.question("enter value of x and y by space : \n")
            i = s.next();
            j = s.next();
        }
        if (Board[i][j] == -10) {
            if (player % 2 == 0) {
                Board[i][j] = 0;
            }
            else {
                Board[i][j] = 1;
                console.log("Coumputer Choosing " + i + " " + j);
            }
        }
        else
            this.putVal();

    }

    win()
    {
        return ((Board[0][0] + Board[0][1] + Board[0][2] == player * 3)
            || (Board[1][0] + Board[1][1] + Board[1][2] == player * 3)
            || (Board[2][0] + Board[2][1] + Board[2][2] == player * 3)
            || (Board[0][0] + Board[1][0] + Board[2][0] == player * 3)
            || (Board[0][1] + Board[1][1] + Board[2][1] == player * 3)
            || (Board[0][2] + Board[1][2] + Board[2][2] == player * 3)
            || (Board[0][0] + Board[1][1] + Board[2][2] == player * 3)
            || (Board[2][0] + Board[1][1] + Board[0][2] == player * 3));
    }
}
play
{
    this.Board();
    while (this.isEmpty) {
        console.log("Players turn");
        this.putVal();
        this.dispBoard();
        if (this.win()) {
            console.log("Player won");
            return;
        }
        this.player = 1;
        console.log("Computers turn");
        this.putVal();
        this.dispBoard();
        if (this.win()) {
            console.log("Computer won");
            return;
        }
        this.player = 0;
    }
}

play();


