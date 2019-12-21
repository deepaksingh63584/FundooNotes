// // // //console.log(8 - (- 2));


// // var arr = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'];
// // var a = arr.toString()
// // console.log(a.split(''));
// // // var ab = []
// // // for (var i = 0; i < a.length; i++) {
// // //     ab[i] = a[i]
// // // }
// // // console.log(ab);

// // // var rls = require('readline-sync')

// // // var chars = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"];
// // // var a = chars.toString();
// // // // a.split();
// // // var disp = a.split();
// // // console.log(disp);

// // var max = 100000000;
// // // var random = (Math.random() * max);

// // // while (random > 0) {
// // //     rls.append(chars[random % chars.length]);
// // //     random /= chars.length;
// // // }
// // // couponCode = rls.toString();

// // // console.log(couponCode);

// // function coupon_code(couponcode2) {
// //     var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';

// //     var max = 100000000;
// //     var random = parseInt(Math.random() * max)
// //     var str = " ";
// //     var arr = [];
// //     console.log(str);
// //     while (random > 0) {
// //         str.concat(chars[random % arr.length]);
// //         console.log(str);
// //         random = parseInt(random / arr.length);
// //         arr.push(str);
// //     }

// //     console.log(arr.join);
// //     return random;
// // }

// const read = require('readline-sync');
// let couponNo = read.questionInt('Enter the Coupon Number : ')

// generateCoupon(couponNo);


// function generateCoupon(no) {

//     // creating arr and initializing by false value
//     let arr = new Array(no);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = false;
//     }

//     let dist = 0;

//     while (dist < no) {
//         //generating random numbers
//         let value = (Math.random() * 10000000 | 0);

//         //if arr[value] is false the change its value to true and print the dist value dist counter increment 
//         if (!arr[value]) {
//             dist++;
//             arr[value] = true;
//             console.log(value);
//         }
//     }

// },

// class Board {
//     constructor() {
//         // dimensions
//         this.rows = 3;
//         this.cols = 3;

//         // boards
//         this.x_player = 0b000000000;
//         this.o_player = 0b000000000;
//         this.full_board = 0b111111111;

//         // win conditions
//         this.win_conditions = [
//             0b111000000,
//             0b000111000,
//             0b000000111,
//             0b100100100,
//             0b010010010,
//             0b001001001,
//             0b100010001,
//             0b001010100
//         ];
//     }

// function show() {
//     let idx = 0;
//     for (let y = 0; y < 3; y++) {
//         let row = "|";
//         for (let x = 0; x < 3; x++ , idx++) {
//             // compute mask
//             let mask = this.maskOf(idx);

//             // values for player x
//             if (this.x_player & mask) {
//                 row += " X |";
//                 continue;
//             }

//             // values for player o
//             if (this.o_player & mask) {
//                 row += " O |";
//                 continue;
//             }

//             // empty
//             row += "   |";
//         }
//         console.log("|---|---|---|");
//         console.log(row);
//     }
//     console.log("|---|---|---|");
//     console.log();
// }

//     checkState() {
//         for (let condition of this.win_conditions) {
//             // check if x wins
//             if ((this.x_player & condition) == condition) {
//                 console.log("X Wins!");
//                 return;
//             }

//             // check if o wins
//             if ((this.o_player & condition) == condition) {
//                 console.log("O Wins!");
//                 return;
//             }
//         }

//         // check draws
//         if ((this.x_player | this.o_player) == this.full_board) {
//             console.log("It's a draw!");
//             return;
//         }

//         // game still going on
//         console.log("The game is still going on...");
//     }

//     maskOf(idx) {
//         return 1 << idx;
//     }

//     playX(idx) {
//         let mask = this.maskOf(idx);
//         this.x_player |= mask;
//     }

//     playO(idx) {
//         let mask = this.maskOf(idx);
//         this.o_player |= mask;
//     }

//     fillX(...idxArray) {
//         for (let idx of idxArray) {
//             this.playX(idx);
//         }
//     }

//     fillO(...idxArray) {
//         for (let idx of idxArray) {
//             this.playO(idx);
//         }
//     }

//     reset() {
//         this.x_player = 0b000000000;
//         this.o_player = 0b000000000;
//     }
// }

// let board = new Board();

// // X wins
// board.fillX(0, 1, 2);
// board.fillO(3, 5, 8);
// board.checkState();
// board.show();

// // O wins
// board.reset();
// board.fillX(1, 5, 2);
// board.fillO(0, 4, 8);
// board.checkState();
// board.show();

// // draw game
// board.reset();
// board.fillX(2, 3, 4, 8);
// board.fillO(0, 1, 5, 6, 7);
// board.checkState();
// board.show();

// // game still going on
// board.reset();
// board.fillX(1, 3, 5, 6);
// board.fillO(0, 2, 4, 7);
// board.checkState();


// var prompt = require('prompt');

// var board = {
//     1: ' ',
//     2: ' ',
//     3: ' ',
//     4: ' ',
//     5: ' ',
//     6: ' ',
//     7: ' ',
//     8: ' ',
//     9: ' '
// };

// function markBoard(position, mark) {
//     board[position] = mark.toUpperCase();
// }

// function printBoard() {
//     console.log('\n' +
//         ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
//         ' ---------\n' +
//         ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
//         ' ---------\n' +
//         ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');

// }

// function isInt(value) {
//     var x;
//     if (isNaN(value)) {
//         return false;
//     }
//     x = parseFloat(value);
//     return (x | 0) === x;
// }

// function validateMove(position) {
//     if (isInt(position) === true && board[position] === ' ') {
//         return true;
//     }
//     return false;
// }

// // Everyone possible combination of three in a row
// var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
// [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

// // Determins if the passed in player has three in a row
// function checkWin(player) {
//     for (var i = 0; i < winCombinations.length; i++) {
//         var markCount = 0;
//         for (var j = 0; j < winCombinations[i].length; j++) {
//             if (board[winCombinations[i][j]] === player) {
//                 markCount++;
//             }
//             if (markCount === 3) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function playTurn(player) {

//     console.log('Your turn player: ' + player);
//     prompt.start();
//     prompt.get(['position'], function (err, result) {

//         if (validateMove(result.position) === true) {
//             markBoard(result.position, player);
//             printBoard();
//             if (checkWin(player) === true) {
//                 console.log('Winner Winner!');
//                 return;
//             }
//             if (player === 'X') {
//                 playTurn('O');
//             } else {
//                 playTurn('X');
//             }
//         } else {
//             console.log('incorrect input please try again...');
//             playTurn(player);
//         }
//     });
// }

// console.log('Game started: \n' +
//     ' 1 | 2 | 3 \n' +
//     ' --------- \n' +
//     ' 4 | 5 | 6 \n' +
//     ' --------- \n' +
//     ' 7 | 8 | 9 \n');


// playTurn('X');





/* VARIABLES INITIATED IN HERE */
var human;
var comp;

var p1 = [1, 'X', 0]; // [player,sign,wins]
var p2 = [2, 'O', 0];

var current;
var firstTurn;

var winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var boardArr = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];

var gameWon = false;

var turnCount = 0;

function boardArr() {
    console.log('\n' +
        ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        ' ---------\n' +
        ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        ' ---------\n' +
        ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');

}


// /*CODE TO BEGIN GAME, PLAYER NEEDS TO CHOOSE X OR O*/
// $('#chooseP > .btn').click(function () {
//     if ($(this).attr('id') === "chooseP1") {
//         human = p1;
//         comp = p2;
//         current = human;
//         firstTurn = 'human';
//     } else {
//         human = p2;
//         comp = p1;
//         current = comp;
//         firstTurn = 'comp';
//         //need to run computer first turn
//         var x = setTimeout(compTurn, 500);
//     }
//     $('#chooseP').hide();
//     $("#board, #scores").show();

// });

// /*CODE TO MAKE FREE TILES CHANGE MOUSE ON HOVER SO PLAYER CAN SEE IF AVAILABLE*/
// $("td").hover(function () {
//     var pos = $(this).attr("id");
//     //checks if square is empty using board array, if it is empty, changes mouse to crosshair when hovering
//     if (boardArr[pos] == "#") {
//         $(this).css("cursor", "crosshair");
//     }
// });

// //CODE FOR HUMAN CLICKING EMPTY SQUARE

// $("td").click(function () {
//     var tile = $(this).attr('id');
//     if (boardArr[tile] === '#') {

//         humanTurn(tile);

//     }
// })


/*FUNCTIONS TO BE CALLED FOR TURNS*/

//pickEmpty, used for computers turn to pick a random empty square.
function pickEmpty() {
    var emptyArr = [];
    for (i = 0; i < boardArr.length; i++) {
        if (boardArr[i] === '#') {
            emptyArr.push(i);
        }
    }
    var x = Math.round(Math.random() * emptyArr.length);
    var choice = emptyArr[x];
    if (choice === undefined) {
        choice = emptyArr[x - 1];
    }
    return choice;
};
/********************************************************/

/**************COMPUTERS TURN****************************/
function compTurn() {
    let current = comp;
    var tile = pickEmpty();
    $('#' + tile).html(comp[1]);
    boardArr[tile] = comp[1];
    checkWin(current);
    if (gameWon === 1 || gameWon === 2) {
        alert("Computer wins!");
        winReset(comp);

    }
    else {
        turnCount++;
        checkDraw();
        if (turnCount === 0 && human[0] === 2) {
            compTurn();
        }

    }



};

/*********************HUMANS TURN**************************/
function humanTurn(tile) {
    let current = human;
    $('#' + tile).html(human[1]);
    boardArr[tile] = human[1];
    checkWin(current);

    if (gameWon === 1 || gameWon === 2) {
        alert("Nice one, you win!");
        var reset = setTimeout(winReset(human), 1000);
    }
    else {
        turnCount++;
        checkDraw();
        if (turnCount !== 0) {
            var compGo = setTimeout(compTurn, 800);
        } else if (turnCount === 0 && human[0] === 2) {
            compTurn();
        }

    }

}


/**********************Function to check for a win*********************/
function checkWin(curr) {
    var currentTiles = [];
    //compile array of all tiles taken by the current player
    for (i = 0; i < boardArr.length; i++) {
        if (boardArr[i] === curr[1]) {
            currentTiles.push(i);
        }
    }

    //Check the current tiles array agains each winning combo to find a match.
    for (x = 0; x < winners.length; x++) {
        var count = 0;
        for (j = 0; j < winners[x].length; j++) {
            if (currentTiles.indexOf(winners[x][j]) != -1) {
                count++;
            }

            if (count == 3) {

                gameWon = current[0];

            }
        }
    }

}

/**************Upon win, updates scores and resets board for new game********/
function winReset(winner) {
    winner[2]++;
    $('#scores').html('P1: ' + p1[2] + ' <br>P2: ' + p2[2]);
    turnCount = 0;
    $('td').html('');
    boardArr = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    if (human === p1) {
        current = human;
    } else {

        let current = comp;
        var tile = pickEmpty();
        $('#' + tile).html(comp[1]);
        boardArr[tile] = comp[1];
        turnCount++;

    }
    gameWon = false;
}

/*******************CHECKS FOR DRAW*********************/
function checkDraw() {
    if (turnCount > 8) {
        alert("It's a Draw!");
        $('td').html('');
        boardArr = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
        if (human === p1) {
            current = human;
        } else {
            current = comp;
        }
        turnCount = 0;
    }
}
