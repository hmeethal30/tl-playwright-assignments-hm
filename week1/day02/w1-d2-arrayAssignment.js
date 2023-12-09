
// Test 1- Move Zeros

console.log("**************************TEST1: MOVE ZEROS**********************************")
//Example 1:
let myArray1 = [0,1,0,3,12];
console.log("The given array is [" + myArray1 + "] and the modified array is [" + moveZeroes.apply(null, myArray1) + "]");

//Example 2:
let myArray2 = [0]
console.log("The given array is [" + myArray2 + "] and the modified array is [" + moveZeroes.apply(null, myArray2) + "]");

//Example 3:
let myArray3 = [0,0,0,5,6,0,12,0]
console.log("The given array is [" + myArray3 + "] and the modified array is [" + moveZeroes.apply(null, myArray3) + "]");

//Example 3:
let myArray4 = [0,0,0,0]
console.log("The given array is [" + myArray4 + "] and the modified array is [" + moveZeroes.apply(null, myArray4) + "]");

/* 1) Funtion to Move Zeroes: */
function moveZeroes(...inputArray){
    let arrayLength = inputArray.length;
    let numberOfMoves =0;
    let moveCompleteFlag = false;
    for (let i = 0; i < arrayLength; i++) {
        while ((inputArray[i] == 0) && (arrayLength !== 1 )) {
            inputArray = inputArray.toSpliced(i,1);
            inputArray.push(0);
            numberOfMoves ++ ;
            if (numberOfMoves == arrayLength){
                moveCompleteFlag = true;
                break;
            }
        }       
        if ((i + numberOfMoves == arrayLength-1) || moveCompleteFlag == true){
            break;
        }
    }
    return inputArray;
}


//TEST 2) Array intersection

console.log("************************** TEST2: ARRAY INTERSECTION **********************************")
console.log("The intersection of given arrays is: "  + intersectArrays([1,2,2,1],[2,2]))       //Example 1
console.log("The intersection of given arrays is: "  + intersectArrays([4,9,5], [9,4,9,8,4]))  // Example 2
function intersectArrays(array1, array2){
    let intersectedArray= [];
    array1 = removeDuplicate(array1);
    array2 = removeDuplicate(array2);
    // array2 = [...new Set(array2)]

    for (let i = 0; i < array1.length; i++){
        for (let j = 0; j < array2.length; j++) {
            if( array1[i] == array2[j]){
                intersectedArray.push(array1[i])
            }
        }
    }
    return intersectedArray;
}


//TEST 3
console.log("************************** TEST-3: FIND MAX AND MIN **********************************")
const inputNums = [34, 7, 21, 89, 54, 10, 91, 67];
const [max, maxIndex ]= findMaxElement(inputNums);
const [min, minIndex ]= findMinElement(inputNums);
console.log("The max element is: %d and it's index is: %d" , max , maxIndex );
console.log("The min element is: %d and it's index is: %d" , min , minIndex );
function findMaxElement(arr){
    let maxElement, maxElementIndex;
    maxElement = Math.max(...arr);
    for( let i = 0; i < arr.length; i++){
            if( arr[i] == maxElement){
                maxElementIndex = i;
            }
    }
    return [maxElement, maxElementIndex];
}

function findMinElement(arr){
    let minElement, minElementIndex;
    minElement = Math.min(...arr);
    for( let i = 0; i < arr.length; i++){
            if( arr[i] == minElement ){
                minElementIndex = i;
                break;
            }
    }
    return [minElement, minElementIndex];
}



console.log("************************** TEST-3: REMOVE DUPLICATES **********************************")
let arrayToDeDuplicate1 = [1, 2, 3, 4, 2, 5, 6, 1, 6];
let arrayToDeDuplicate2 = [1, 2, 3, 4, 2, 5, 6, 1, 6];
console.log("The de-duplicated array of " + arrayToDeDuplicate1 + " is: " + removeDuplicate(arrayToDeDuplicate1));
function removeDuplicate(arr){
    return [...new Set(arr)];
}