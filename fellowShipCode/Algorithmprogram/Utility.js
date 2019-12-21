var readlinessync = require('readline-sync')
module.exports = {


    /*
	  Function to count the characters in a string alphabaticlally and return array
	  of the count of each alphabet
	  
	  s the string given to count
	  return the array for counted characters
	 */
    Counttest(s) {
        var count = [];
        s = s.toLowerCase();
        let c = new Array(25);
        for (var i = 0; i < s.length; i++) {
            c[s.charAt(i) - 97]++;
        }
        return c;
    },

    /*
	   Function to count the value in given integer be place
	   n the integer value to count
	   return the integer array for the count value
	 */
    count(n) {
        var count1 = [10];
        var temp = n;
        while (temp != 0) {
            var r = temp % 10;
            count1[r]++;
            temp = temp / 10;
        }
        return count1;
    },


    //ANAGRAM-check the two strings are anagrams or not
    anagram(s1, s2) {
        console.log(s1, " " + s2)
        if (s1.length !== s2.length) {
            return false;
        }
        s1count = this.Counttest(s1);
        s2count = this.Counttest(s2);
        for (var i = 0; i < s2count.length; i++) {
            if (s2count[i] != s1count[i]) {
                return false;
            }
        }
        return true;
    },
    //ANAGRAM-check the two integer are anagrams or not
    isanagram(n1, n2) {
        console.log(n1, " " + n2)
        if (n1.length !== n2.length) {
            return false;
        }
        n1count = this.count(n1);
        n2count = this.count(n2);
        for (var i = 0; i < n2count.length; i++) {
            if (n1count[i] != n2count[i]) {
                return false;
            }
        }
        return true;
    },


    //Function to print the prime no between to 1 to 1000
    prime() {
        console.log();
        var b;
        for (j = 2; j <= 1000; j++) {
            b = true;
            for (i = 2; i < j / 2; i++) {
                if (j % i == 0) {
                    b = false;
                    break;
                }
            }
            if (b) { }
            //console.log(j + "\t ");
        }
        return j;
    },


    //Function to check if no is prime and also anagram or not
    primeAnagrams() {
        var ar = [];//generics concept
        console.log();
        var b;
        for (j = 2; j <= 1000; j++) {
            b = true;
            for (i = 2; i < j / 2; i++) {
                if (j % i == 0) {
                    b = false;
                    break;
                }
            }
            if (b) {
                //console.log("klsdfj");

                ar.push(j);
                //console.log(ar);
            }

            //console.log(ar);
            //this.anagram(s1, s2)
        }
        for (i = 0; i < ar.length; i++) {
            console.log(ar.length);
            console.log(ar);
            for (j = i + 1; j < ar.length; j++) {
                if (this.isanagram(ar[i], ar[j])) {
                    console.log(ar[i] + "  " + ar[j]);
                }
            }
        }
        return 0;
    },

    //palindrom program -
    ispalindrome(s1) {
        console.log(s1);

        var s; var e = s1.length - 1;
        var s2 = s1;
        // for (s = 0, e = s1.length-1; s <= e; s++, e--){
        // }
        var s3 = s1.split("")
        console.log(s3);
        var temp
        for (s = 0, e = s3.length - 1; s <= e; s++ , e--) {
            temp = s3[s];
            s3[s] = s3[e];
            s3[e] = temp
        }

        console.log(" Str2 " + s2);
        s3 = s3.join("")
        console.log(" Str3 " + s3);

        if (s2 === s3) {
            console.log("Is Palindrome")
        } else {
            console.log("Not a Palindrome")
        }
    },



    //Insertion sort for integer
    insertionSort() {
        var arr = [5, 2, 6, 1, 3, 9];
        var temp;
        for (i = 1; i < arr.length; i++) {
            for (j = i; j > 0; j--) {
                if ((arr[j] - arr[j - 1]) < 0) {
                    temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
                else
                    break;
            }
        }
        console.log(arr);

        return arr;
    },

    //     for (var i = 1; i < arr.length; i++) {
    //         if (arr[i] < arr[0]) {
    //             //move current element to the first position
    //             arr.unshift(arr.splice(i, 1)[0]);
    //         }
    //         else if (arr[i] > arr[i - 1]) {
    //             //leave current element where it is
    //             continue;
    //         }
    //         else {
    //             //find where element should go
    //             for (var j = 1; j < i; j++) {
    //                 if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
    //                     //move element
    //                     arr.splice(j, 0, arr.splice(i, 1)[0]);
    //                 }
    //             }
    //         }
    //     }
    //     return arr;
    // },




    //Bubble Sort for Integer
    bubbleSort(numbers) {
        //var numbers = [9, 4, 9, 24, 6, 14, 3, 7, 75, 10]
        var temp;
        for (i = 0; i < numbers.length; i++) {
            for (j = 1; j < (numbers.length - i); j++) {
                //if numbers[j-1] > numbers[j], swap the elements
                if (numbers[j - 1] > numbers[j]) {
                    temp = numbers[j - 1];
                    numbers[j - 1] = numbers[j];
                    numbers[j] = temp;
                }
            }
        }

        return numbers;
    },



    //Integer Binary search
    binary(arr1, n) {
        var arr = this.bubbleSort(arr1);
        var high = arr.length - 1, low = 0, mid = 0;

        //var key = readlinessync.question('Enter your key do you whant to search :')

        console.log(arr1);

        while (low <= high) {
            mid = (low + high) / 2;
            if (n == arr[mid]) {
                return mid;
            } else if (arr[mid] < n) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        //console.log(mid);
        //console.log(n);
        //console.log();
        return 0;
    },


    /*
	 Function to find the is pallindrome or not
	 
	 n the integer which to check for pallindrome
	 return true if its pallindrome or false if its not
	 */
    isPalindrome(n) {
        var i; var j;
        var palindromearray = []
        if (n.length >= 2) {

            var n = n.toString()
            var n1 = n                  //Original Number
            var n2 = n.split("")
            for (i = 0, j = n2.length - 1; i <= j; i++ , j--) {
                var temp = n2[i];
                n2[i] = n2[j]
                n2[j] = temp
            }
            n2 = n2.join("")
            // console.log(n2);

            // console.log("Original Number: " + n1);
            // console.log("Reversed Number: " + n2);

            if (n1 == n2) {
                console.log(n1)
                palindromearray.push(n1)
            }

        }
        return palindromearray

    },




    // Devide into 2 subindex of array to call the merge fuction
/**
 * 
 * @param {*} nums: 
 * @param {*} left 
 * @param {*} right 
 */

    sort(nums, left, right) {

        // var left = 0;
        // var right = nums.length;
        if (left < right) {
            // Find the middle point
            var mid = parseInt((left + right) / 2);

            // Sort first halve
            //console.log("Mid " + mid);
            // console.log(this.sort(nums, left, mid));
            // console.log(this.sort(nums, mid + 1, right));
            // this.sort()
            this.sort(nums, left, mid)
            this.sort(nums, mid + 1, right)

            // Sort second halve
            nums = this.merge(nums, left, mid, right);


        }
        // Merge the sorted halves
        return nums;
    },

    merge(nums, left, mid, right) {
        // console.log("Nums " + nums);
        // console.log("Left Value " + left);
        // console.log("m " + mid);
        // console.log("right " + right);

        var leftarray = [];
        var rightarray = [];
        var mergearray = [];
        var i, k = 0;

        //copying left half of array in leftarray
        for (i = left; i <= mid; i++)
            leftarray[k++] = nums[i];

        //        console.log("Left Array:"+leftarray.join(" "));
        //copying right half of array in rightarray    
        k = 0;
        for (i = mid + 1; i <= right; i++)
            rightarray[k++] = nums[i];

        //       console.log("Right Array:"+rightarray.join(" "));

        i = j = 0;
        k = left;
        var merge_array_index = 0;
        while (i < leftarray.length && j < rightarray.length) {
            if (leftarray[i] <= rightarray[j]) {
                nums[k] = leftarray[i];
                mergearray[merge_array_index++] = leftarray[i];
                i++;
            }
            else {
                nums[k] = rightarray[j];
                mergearray[merge_array_index++] = rightarray[j];
                j++;
            }
            k++;
        }//end of while 

        /* Copy the remaining elements of L[], if there 
           are any */
        while (i < leftarray.length) {
            nums[k] = leftarray[i];
            mergearray[merge_array_index++] = leftarray[i];
            i++;
            k++;
        }

        /* Copy the remaining elements of R[], if there 
           are any */
        while (j < rightarray.length) {
            nums[k] = rightarray[j];
            mergearray[merge_array_index++] = rightarray[j];
            j++;
            k++;
        }

        //console.log("The Merged Array :"+mergearray.join(" "))

        return nums;
    },//end of divide_array






    //days of week-

    dayOfWeek(d, m, y) {
        console.log(d, m, y);


        var y0 = (y - (14 - m) / 12) | 0;
        //console.log(y0);

        var x = (y0 + y0 / 4 - y0 / 100 + y0 / 400) | 0;
        //console.log(x);

        var m0 = (m + 12 * ((14 - m) / 12) - 2) | 0;
        //console.log(m0);

        var d0 = (d + x + (31 * m0) / 12) % 7 | 0;
        //console.log(d0);
        console.log("your day is : ");

        switch (d0) {
            case 0:
                console.log("Sunday");
                break;
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            default:
                console.log("Invalid");
                break;
        }


    },

    //Vending machine to return the node 
    returnnotes(value) {
        change = 0, TOTAL = 0;
        //console.log(TOTAL);

        var notes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
        while (value > 0) {
            if (Math.floor(value / notes[change] != 0)) {
                TOTAL += (value / notes[change]) | 0;
                //console.log(TOTAL);
                console.log(notes[change] + "rs notes :" + Math.floor(value / notes[change]));
                value = Math.floor(value % notes[change]);
            }
            change++;
            if (value == 0) {
                console.log("total notes :" + TOTAL);
            }

        }
        console.log(value);
        return notes;


    },



    //PERMUTATION PROGRAM-

    permute(permutation) {
        var count = 1;
        var length = permutation.length;
        var result = [permutation.slice()];
        var c = new Array(length).fill(0);
        var i = 1, k, p;

        while (i < length) {
            if (c[i] < i) {
                k = i % 2 && c[i];
                p = permutation[i];
                permutation[i] = permutation[k];
                permutation[k] = p;
                ++c[i];
                i = 1;
                result.push(permutation.slice());
                count++;
            } else {
                c[i] = 0;
                ++i;
            }
        }
        console.log("No.of permutation : " + count);
        console.log("premutation is : ");
        return result;
    },


    // swap1(s1, i, j) {
    //     var ch = []
    //     console.log(ch)
    //     ch = s1.toString();
    //     var temp;
    //     temp = ch[i];
    //     ch[i] = ch[j];
    //     ch[j] = temp;
    //     console.log([j])
    //     console.log(ch)
    //     return ch;
    // },
    // permutation(s2) {
    //     var count = 0;
    //     var s1 = " ";
    //     var arl = [];
    //     console.log(arl);

    //     for (var i = 0; i < s2.length; i++) {
    //         for (var j = 0; j < s2.length; j++) {
    //             s1 = s2;
    //             console.log(i + " " + j);
    //             this.swap1(s1, i, j);
    //             count++;
    //         }
    //     }
    //     console.log("no of permutation :" + count);
    //     console.log(arl.push([arl.length()]));


    // },





    // stopwatch function to find the system time by creating date fuction-
    stopwatch() {
        var d = new Date()
        return d.getMilliseconds();
    },







    // multiply(a, b) {
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
    //     }

    //     for (var r = 0; r < m.length; ++r) {
    //         document.write(m[r].join(' ') + '<br />');

    //         return m;
    //     }
    // },


    //Selection Sort on Array
    selectionSort(arr) {
        var temp, min;
        for (var i = 0; i < arr.length - 1; i++) {
            min = i;
            for (var j = i + 1; j < arr.length; j++) {
                // Finding the minimum element in the unsorted part of array
                if (arr[min] > arr[j])
                    min = j;
            }
            /* Swapping the found minimum element with the first
             * element of the sorted subarray using temp variable
             */
            temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
        console.log(arr);

    },


    monthlyPayment(p, y, r) {
        var n = 12 * y;
        var r0 = r / (12 * 100);
        var payment = p * r0 / (1 - Math.pow((1 + r0), -n));
        return payment;
    },




    getAllPermutations(string) {
        var results = [];

        if (string.length === 1) {
            results.push(string);
            console.log(results);
            return results;
        }

        for (var i = 0; i < string.length; i++) {
            var firstChar = string[i];
            var charsLeft = string.substring(0, i) + string.substring(i + 1);
            var innerPermutations = this.getAllPermutations(charsLeft);
            for (var j = 0; j < innerPermutations.length; j++) {
                results.push(firstChar + innerPermutations[j]);
            }

        }

        return results;
    },













}