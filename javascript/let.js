/**
 * Variables declared with let have Block Scope
 *
 * Variables declared with let must be Declared before use
 *
 * Variables declared with let cannot be Redeclared in the same scope
 * */

// Block Scope
//Variables declared inside a { } block cannot be accessed from outside the block:
{
    let x = 2;
}
// x can NOT be used here

//Function scope
// the visibility and accessibility of
// variables within a specific function

function myFunctionDemo () {

    let y = 29;
    let z = 19;

}
//y can NOT be used here
//z can NOT be used here

//Global scope
//the outermost execution context where variables and functions
// are accessible from anywhere in your code.

// Example
// Variables declared with varinside a { }
// block can be accessed from outside the block:

{
    var x = 2;
}
// x CAN be used here

//Variables define with let can not bbe readeclared.



