
// Function Declaration


// Calling function
dataSet(); // on time


// Definiing function
function dataSet(){
    console.log("on time");

}

// Calling function
dataSet(); // on time

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function Expression
 
// function calling
 testExpression(); // Cannot access 'testExpression' before initialization
testExpression4(); // testExpression4 is not a function

 // funtion defining
 let testExpression = function dataValue() {
     console.log(" riya sawant");
    
     
 }

let testExpression1 = function dataValue(strValue1,strValue2) {
     console.log(`${strValue1} ${strValue2}`); // riya sawant
    
     
 }

let testExpression2 = function dataValue(strValue1, strValue2) {
     return `${strValue1} ${strValue2}`;
    
     
 }

var testExpression4 = function dataValue(strValue1,strValue2) {
     console.log(`${strValue1} ${strValue2}`); // riya sawant
    
     
 }


// function calling
 testExpression();
 testExpression1("jueeli", "sawant"); // jueeli sawant
let result = testExpression2("john","wright")
console.log(result);

