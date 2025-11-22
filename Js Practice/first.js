console.log("hello world")
let a=10;
a=11;  //Variable can't be re-declared but can updated ,Block scope 
console.log(typeof(a))

console.log(a)
const b=20; //Variable can't be re-declared but can't updated ,Block scope 
//b=30;
console.log(b)
const student = {
    sport: "cricket",
    fruit: "banana"
};
sport="badminton"
console.log(student)
console.log(typeof student)
console.log(student["fruit"])
//Arithmetic
console.log(a+b)//addition
console.log(a-b)//subtraction
console.log(a*b)//multiplication
console.log(a/b)//division
console.log(a%b)//modulus
console.log(a**b)//exponenetial
//Uninary 
console.log(a++)//if a=3 it prints 3 and add 1 to 3
console.log(a--)//if a=3 it prints 3 and subtract 1 from 3
console.log(--a)//if a=3 it subtract 1 from 3 and prints 2
console.log(++a)//if a=3 it add 1 to 3 and prints 4
//Comparision 
let e=10,f=20;
console.log(e==f)//prints false and its only compare value inside variable
console.log(e!=f)//prints True and its only compare value inside variable
console.log(e>f)//prints false and its only compare value inside variable
console.log(e<f)//prints True and its only compare value inside variable
console.log(e>=f)//prints false and its only compare value inside variable
console.log(e<=f)//prints True and its only compare value inside variable
console.log(e===f)//prints false and its compare both value and datatype of variable
console.log(e!==f)//prints True and its both value and datatype of variable
//Logical
let g=5,h=10;
console.log(g<h && h!=g)//prints true cause both conditons are true
console.log(g<h || h==g)//prints true cause either of one condition is true
console.log(!(g!=h))//prints flase cause g is not eqal to h so true ,the opposite of true is false
//Conditional statements
//if statement: The block of code will execute only when the condition is true
if(a==b){
    console.log("a==b")
}
//if-else statement: The block of code inside if statement will execute only when the condition is true otherwise the else code will execute
if(a==b){
    console.log("a==b");
}else{
    console.log("a!=b");
}
//else-if Statement: it compare if conditon first following else if condition if both conditions are false it will execute else code
if(a==b){
    console.log("a==b");
}else if(a>b)
{
    console.log("a>b");
}
else{
    console.log("a!=b");
}
//Ternary statement:three operands function:condition ? True:Flase
let age=19;
let result=age>18?"major":"minor"
console.log(result)
//Loops:loops are used to execute a piece of code again and again
//For loop: the block of code will run until the condition become false
for(let i=1;i<=5;i++) {
    console.log("i=",i) //for(initilizer;condition;operation) make sure the condition need to be false at some point
}
//while loop: the block of code will execute until the condition is true 
while(a<b){ //while(condition)
    console.log(a)
    a++    //have to mention the increment or decrement in loop otherwise the loop will become infinite
}
//Do-while loop:
do{               //do-while loop definetly run 1 cycle 
    console.log("a<b")
    a++
}while(a<b);

//Special loops : for-of and for-in
//for-of loop: sepcially for strings and arrays
let str="King"
for(let i of str){  //for-of loop prints every letter in str 
    console.log(i)
}
//for-in loop:
const students = {
    sport: "cricket",
    fruit: "banana",
    cost:10
};
for(let i in students){  //for-of loop prints every letter in str 
    console.log("key=",i ,"value=",students[i])
}
//Template literals: A way to have embedded express in strings
let string='hello my choco cost is '
console.log("hello my choco cost is ",students.cost) //the datatype of value is number
console.log(`hello my choco cost is ${students.cost}`) //the datatype of value become string
//String interpolation: To create string by doing substitution of placeholder
//String methods :String is immutable
let val="swaRna "
console.log(val.toUpperCase())  //convert the value of string into uppercase
console.log(val.toLowerCase()) //convert the value of string into lowercase
console.log(val.trim()) //Removes starting or end spaces of value
console.log(val.slice(1,4)) //Slice from index 1 to index 4 in value
console.log(val.concat("manju")) //concat joins two strings
console.log(val.charAt())   //
console.log(val.replace("Rna","mi")) //replce with new values 

//functions:  A function is a block of code which only runs when it is called. You can pass data,
// known as parameters, into a function. A function can return data as a result.
function function1(x,y){
    z=x+y;
    return z;
}
let s=function1(2,4)
console.log(s);
//Arrow method: compact way for writing functions
const jj=(g,h)=>{
    console.log(g+h)
}
jj(1,1);
//ForEach method:arr.forEach(callback fun) :a func to execute each element in array
let arr=[1,2,3,4,5]
arr.forEach((val)=>{
    j=val+2
    return j;
})
console.log(arr2) //Higher order function means a function which uses function as parameters or return a function
//Map method: It creates new array with result of some operation,the value  its callback returns are used to form new array
let arr1=arr.map((val=>{
    return val*val;
}))
console.log(arr1)
//filter method:Creates new array of elements that give trues on condition/filter
let filter=arr.filter((val)=>{
    return val%2==0;
})
console.log(filter)
//Reduce method:Perform some operation& reduce the array into singlevalue.it returns that single value
let reduce=arr.reduce((res,cur)=>{
    return res+cur;

})
console.log(reduce)
//Window object:its represents an open window in a browser.It is browser object(not js)
// and its automatically created by browser.it is global object with lots of properties and methods


//DOM:Document Object Model,when web page is loaded,the browser creates DOM of the page
//DOM manupluation: 1.ByID 2.ByClassname 3.Bytagname
//SQL: document.querySelector()-return first matching doc.queryselectoall()-return all
//textContent:return text content even for hiddden elements
//getattribute:to get value of an attribute
//setattribute:To set or change the value of an attribute
//Insert :1)append 2)prepand 3)before and 4)after
//Deletion: 1)remove
//ClassList is used to add new class to existing node

let div=document.querySelector("div")
div.append(" all")
div.style.backgroundColor="orange" ;
div.prepend("hello ")
//div.remove()
let newBtn=document.createElement("button")
newBtn.innerText="newBtn"
console.log(newBtn)
div.before(newBtn)
console.log(div.getAttribute("class"))

//Events:The change in the state of an object is known as event
//events are fired to notift code of "the interesting changes" that affects code execution
// 1)Mouse events: click and double click
// 2)Keyboard events:keypress,keyup and keydown
// 3) From events:submit etc
// 4)Print event and many more..

document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.querySelector("#btn1");
    btn1.onclick = () => {console.log("click me ");};
    btn1.ondblclick = () => {console.log("click me 2X ");};
    btn1.onmouseover = () => {console.log("inside ");};
   
});

//Event object:It's a specisal object that has details about the events
//All event handlers have access to events object's properties and methods 

document.addEventListener('DOMContentLoaded', () => {
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");
    const btn4 = document.querySelector("#btn4");
    btn2.onclick = (e) => {console.log(e.type);};
    btn3.onclick = (e) => {console.log(e.target);};
    btn4.onclick = (e) => {console.log(e.clientY,e.clientX);};
});
//Event listeners: 1)addEventListner(event,callback) 2)removeEventListener(event,callback)
//note:the callback reference should be same to remove
document.addEventListener('DOMContentLoaded', () => {
let btn5 = document.querySelector("#btn5");
btn5.addEventListener('click', (e) => {
        console.log("added");},
btn5.addEventListener('click', (e) => {
    console.log("added2");

}
));
btn5.removeEventListener('click', (e) => {
    console.log("added");

});

//excerise
});
document.addEventListener('DOMContentLoaded', () => {
let curr="light";
newBtn.addEventListener("click",()=>{
    if (curr=="light"){
        curr="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        curr="light";
        document.querySelector("body").style.backgroundColor="white";
    }
})
});
//Prototypes in JS
//Object is an entity having state and behaviour(Properties and methods)
//Js objects have special property called prototype
//We can set a prototype using __proto__

const student2={
    name:"Manju",
    Marks:97,
    printmarks: function() { 
        console.log("marks=",this.Marks);},
}
console.log(student2.printmarks());
console.log(student2.printmarks);
console.log(student2);

const employee={
    tax(){
        console.log("tax rate is 10%");
        },
};
const karan={
    salary:10000,
};
karan.__proto__=employee;
console.log(karan)
console.log(karan.tax())
//Note: If object and prototype having same method then object method is used
const karan2={
    salary:50000,
    tax(){
        console.log("tax rate is 20%")
    },
};
karan2.__proto__=employee;
console.log(karan2.tax());
//Class is program-code of templete for creating objects
//Those objects will have some state(variable) and some behaviour(functions) inside it
//Constructor is special method in classes
//Constructor is automatically invoke when ever a new object is created and initialise objects

//Inheritance is passing properties and methods from one class(parent) to another(child)
//Note:If parent and child have same method then child methods will be used.{Method Overriding}
//Super Keyword: It is used to call constructor of its parent class to access parent's properties ans methods 

//Callback hell <<< Promises Chain <<< Async -Await
//Synchronous means the code runs in a particular sequence of instructions given in the program,
//Each instruction will wait until previous instruction to complete its execution
//Asynchronous: the execution allows to execute the next instruction it the previous instruction is blocked
console.log("one");
function hello(){
    console.log("hola");
}
setTimeout(hello,4000);  //its applying asychronous cause this instruction delay the UI
console.log("two");
setTimeout(()=>{
    console.log("lilip"); //its applying asychronous cause this instruction delay the UI
},5000);
console.log("three");     //Its will print one two three first and hola and lilip 

//Callback is a function passes an argument to another function
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(2,3,sum);

//Callback hell:Nest callbacks are stacked below one another forming pyramids structure (pyramids of doom)
//This type of programming become difficult to understand and manage
function getdata(data,nextdata){
    setTimeout(()=>{console.log("data",data);
    if(nextdata){
        nextdata();
    }
},2000);
}
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4)
        })
    })
})

//Promises is for "eventual" completion of tasks,it is an object in JS and solution for callback hell
let finalval=new Promise((resolve,reject)=>{
    console.log("promise");
    reject("Error occered");
}); //function with 2 handlers.resolve & reject callbacks by JS
function gettingdata(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(data);
       resolve("success");  //Its changes the state from pending to success after print the value
},8000);
})
};
gettingdata(6);
//JS promise object can be: 1)pending 2)resolve(result) 3)reject(error)
//.then() and .catch() -operations in promise
let gid=gettingdata(123);
gid.then(()=>{
    console.log("fulfilled");
});
gid.catch(()=>{
    console,log("rejected");
});

//Promise chain:
function async1(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(data);
       resolve("success1");  //Its changes the state from pending to success after print the value
},8000);
})
};
function async2(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(data);
       resolve("success2");  //Its changes the state from pending to success after print the value
},9000);
})
};
async1(123).then((res)=> {
    console.log("fulfilled",res);
    async2(132).then((res)=>{
        console.log("fulfilled",res);
    })
});
//promise chain
gettingdata(180).then((res)=>{
    return gettingdata(181).then(()=>{
        return gettingdata(182).then(()=>{
            console.log("promise chain")
        })
    })
});

//Async always return a promise
//Await pauses the execution of its surroundigs of async function  until the promise is settled.

function async3(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(data);
       resolve("Async-await");  //Its changes the state from pending to success after print the value
},2000);
    })
};
async function h1(){
    console.log("fetching data1....")
    await async3(191);
    console.log("fetching data2....")
    await async3(192);
    console.log("fetching data3....")
    await async3(193);
};

//IIFE:immediatly invoked function expression
//IIFE is a function that is called immediatly as soon as it is defined.

//Fetch API: (Application Programming Interface)
//Fetch API provides an interface for fetching(sending/recieving) resources
//it uses request and response objects.
//The fetch method is used to fetch a resource.
const link="https://cat-fact.herokuapp.com/facts";
const getfacts=async()=>{
    let response=await fetch(link);
    console.log(response);
    let data=await response.json();
    console.log(data[0].text);
}
//AJAX: Asynchronous JS and XML
//JSON: Javascript Object Notation.
//json method():it returns second promise  that resolve with the result parsing the response body text as json 
//(input is JSON output is js object)
//Resquest and Response: *HTTP(Hyper Text Transfor Protocol) verbs *Response Status Code.
//HTTP response header also contain details about the response,such as content type,HTTP status code etc



