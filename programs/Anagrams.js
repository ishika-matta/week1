/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   To take 2 User Input and checks for anagrams
 * 
 * @description
 * 
 * @file        :   Anagram.js
 * @overview    :   take 2 User Input and checks for anagrams
 * @module      :   checkAnagram module to 
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline = require('readline-sync');
let a=require('../utility/utility');
var str1 = readline.question("Enter string 1: ");
var str2 = readline.question("Enter string 2: ");


a.checkAnagram(str1, str2);




