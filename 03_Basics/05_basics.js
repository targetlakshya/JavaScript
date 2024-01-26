//  How JS execute the process

// Excution Context  

// Javascript Execution Context --> It is the process where Javascript decide that when and where we have to execute the process..

// In JS execution is divide in 2 phases  ---> Global Excution context first declare int he form of "This" Keyword... It is execute in the form of Threads. JS is the single thread language.

// Global EC --> 

//Function/Functional EC -->

// Eval EC --> 

// Phase

// 1. Memory (Creation Phase) -->  in this JS allocate the memory to variables.

// 2. Execution Phase --> In Execution phase the operations are performed

// Examples

let val1 = 10
let val2 = 5
function addNum(n1,n2) {
    let total = n1 + n2;
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(5,7)

// Step 1 --> Global Execution ---> this k andr

// Step 2 --> Memory Phase --> val1 = undefined, val2 = undefined, addNum = function defination line 25 to 28, result1 = undefined, result2 = undefined

// Step 3 --> Execution Phase --> val1 = 10, val2 = 5, addNum => one more executional context created

// Step 4 --> where two thing created 1. New variable environment 2. Execution thread

// Step 4.1 --> Memory Phase =>  val1, val2 = undefined, total = undefined

// Step 4.2 --> num1 = 10, num2 = 5, total = 15(total can be retured in Global Execution Context for print the answer

// when Global Execution Context is created then it will delete the functions Execution means step 4.1 and 4.2 .

// then in line 30. we call addNum in second time

// Step 5 ---> SO again  1. New variable environment 2. Execution thread is created

// Step 5.1 --> Memory Phase =>  val1, val2 = undefined, total = undefined

// Step 5.2 --> num1 = 5, num2 = 7, total = 12(total can be retured in Global Execution Context for print the answer

// when Global Execution Context is created then it will delete the functions Execution means step 5.1 and 5.2 .

// +++++++++++++++++++++ CAll STack +++++++++++++++++++++

                    // +                       +
                    // +                       +
                    // +                       +
                    // +                       +
                    // +                       +
                    // +                       +
                    // +                       +
//    two()---------// +---> two()------------ + --> two()                    
//    one()---------// +---> one()------------ + -->  one()            
                    // +  Global Executon      +
                    // +++++++++++++++++++++++++


//  Here when one() function is call then first one is add in stack then it can find its value then it is out of the stack same process is of two because two() is another function after one(), then two() is execute first then it is out of stack.

// But when we declare function inside function

