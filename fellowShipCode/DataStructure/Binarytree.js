/**
 * A binary tree is a tree which is characterized by any of the following properties:

It can be empty (null).
It can contain a root node which contain some value and two subtree, left subtree and right subtree,
which are also binary tree. A binary tree is a binary search tree (BST) if all the non-empty nodes 
follows both two properties:

If node has a left subtree, then all the values in its left subtree are smaller than the value of the
current node.If node has a right subtree, then all the value in its right subtree are greater than the
value of the current node.You are given N nodes, each having unique value ranging from [1, N], how many 
different binary search tree can be created using all of them.

Input :
First line will contain an integer, T, number of test cases. Then T lines follow, where each line
represent a test case. Each test case consists a single integer, N, where N is the number of nodes
in the binary search tree.
 
    @author : Deepak Singh

    @since : 21/11/2019
 */


const utildata = require('./utilitydata/Utildata');
const readline = require('readline-sync');


var node = readline.questionInt("Enter the no nodes:");
var tree = utildata.binaryTree(node);
console.log(tree + " trees are generated.");