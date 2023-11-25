/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(score){
    switch (true){
        case score >= 90 :
            return "Grade is A+";
        case score >= 80 :
            return "Grade is A";
        case score >= 70 :
            return "Grade is B+";
        case score >= 60 :
            return "Grade is B";
        case score >= 50 :
            return "Grade is C+";
        case score >= 40 :
            return "Grade is C";
        default:
            return "Grade is D";
    }
}

let studentScore = 10;
console.log("Mark scored is " + studentScore + " and " + calculateGrade(studentScore));