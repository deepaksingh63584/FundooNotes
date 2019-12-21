
const readline = require('readline-sync')

function multiplyMatrices(m1, m2) {
    var result = [];
    //console.log(result.length);

    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
                //console.log(sum);

            }

            result[i][j] = sum;
        }
    }
    return result;
}

var m1 = [[1, 2], [3, 4]]
var m2 = [[5, 6], [7, 8]]

var mResult = multiplyMatrices(m1, m2)

console.log(mResult);

console.log();










































// function multiply(a, b) {
//     var aNumRows = a.length, aNumCols = a[0].length,
//         bNumRows = b.length, bNumCols = b[0].length,
//         m = new Array(aNumRows);  // initialize array of rows
//     for (var r = 0; r < aNumRows; ++r) {
//         m[r] = new Array(bNumCols); // initialize the current row
//         for (var c = 0; c < bNumCols; ++c) {
//             m[r][c] = 0;             // initialize the current cell
//             for (var i = 0; i < aNumCols; ++i) {
//                 m[r][c] += a[r][i] * b[i][c];
//             }
//         }
//         return m;
//     }
// }


// var a = [[8, 3], [2, 4], [3, 6]],
//     b = [[1, 2, 3], [4, 6, 8]];

// function display(m) {
//     for (var r = 0; r < m.length; ++r) {
//         console.log(m[r].join('   '));
//     }
// }

// var a = [[8, 3], [2, 4], [3, 6]],
//     b = [[1, 2, 3], [4, 6, 8]];
// console.log('matrix a:');
// display(a);
// console.log('matrix b:');
// display(b);
// console.log('a * b :');

// console.log(multiply(a, b));



console.table(mResult); // it shows the matrix in a table 