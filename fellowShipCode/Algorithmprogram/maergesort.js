
const readline = require('readline-sync')



// Devide into 2 subindex of array to call the merge fuction
function sort(nums, left, right) {

    var left = 0;
    var right = nums.length;
    if (left < right) {
        // Find the middle point
        var m = (left + right) / 2;

        // Sort first halve
        this.sort(nums, left, m);

        // Sort second halve
        this.sort(nums, m + 1, right);


    }
    // // Merge the sorted halves
    // this.merge(nums, left, m, right);
    return m;
}

function merge(nums, left, m, right) {
    var n1 = m - left + 1;
    var n2 = right - m;

    var Left_part_arra = [new int[n1]];
    var Right_part_arra = [new int[n2]];

    for (var i = 0; i < n1; ++i)
        Left_part_arra[i] = nums[left + i];
    for (var j = 0; j < n2; ++j)
        Right_part_arra[j] = nums[m + 1 + j];

    var i = 0, j = 0;

    var k = left;
    while (i < n1 && j < n2) {
        if (Left_part_arra[i] <= Right_part_arra[j]) {
            nums[k] = Left_part_arra[i];
            i++;
        }
        else {
            nums[k] = Right_part_arra[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        nums[k] = Left_part_arra[i];
        i++;
        k++;
    }

    while (j < n2) {
        nums[k] = Right_part_arra[j];
        j++;
        k++;
    }
    console.log(nums)
}


var n = readline.questionInt("Enter the no of elements in array");

console.log("Before sorting :");
var nums = [];
console.log("enter the array elements:");

// Displays the array elements
for (var i = 0; i < n; i++) {
    nums[i] = readline.questionInt();
}

console.log(nums);
Array.toString(nums);
console.log(nums)

console.log("After sorting :");

sort(nums, 0, nums.length - 1);


