var myfunc = function () {
    console.log("annonymous function");
    
    
}/* function with no name is called annonymous function*/
myfunc();
/*arrow function*/

function test1(){
    console.log("this is normal function");
    
}

var test2= ()=>
    console.log("this is arrow function")
    

test2();
/* if body contains only one return statemnet curly braces are optional*/
var test4=(a,b)=> a+b;
var sum=test4(45,40);
document.write("result"+res);
var test5=no=>no*no
console.log(test5(20,10))