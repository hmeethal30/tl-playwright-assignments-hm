/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

let myString1 = "Hello World";
let myString2 = "   fly me   to   the moon  ";
let myString3 = "      ";
let myString4 = "  random string with symbol !"


/* Tests to verify the function to get the length of the last word in the input string  */
getLengthOfLastWord(myString1);
getLengthOfLastWord(myString2);
getLengthOfLastWord(myString3);
getLengthOfLastWord(myString4);


/* Test to check for anagrams*/
checkIfAnagam('listen', 'silent');
checkIfAnagam('hello', 'world') ;


/* Function to take a string as input 
and to find the length of last word discarding whitespaces */
function getLengthOfLastWord(inpString){
    let stringToCheck = inpString.toString().trim();
    const inpStringArray = stringToCheck.split(' ');
    let lastWord;
    let lengthOfLastWord;

    if (stringToCheck.length == 0) {
        console.log("The given string has only white spaces!");
    }
    else {
        for (let i = 0; i < inpStringArray.length; i++) {
            if (inpStringArray[i].length > 0) {
                isSpace = false;
                lastWord = inpStringArray[i];
                lengthOfLastWord = lastWord.length;
            } else {
                isSpace = true;
            }
        }
        console.log("The last word in the given string \'" + inpString + "\' is \'" + lastWord + "\' and its length is " + lengthOfLastWord);
    }
}

/* Function to check for anagram */
function checkIfAnagam(inputString1, inputString2){
    let sortedString1 = inputString1.trim().split('').sort().join('');
    let sortedString2 = inputString2.trim().split('').sort().join('');

    if (sortedString1 == sortedString2) {
        console.log("The given strings \'" + inputString1 + "\' and \'" + inputString2 + "\' are anagams!")
    }else {
        console.log("The given strings \'" + inputString1 + "\' and \'" + inputString2 + "\' are NOT anagams!")

    }
}