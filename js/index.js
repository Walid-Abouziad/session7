// window.alert("Hellow JS");
document.getElementById("demo").innerHTML = "hello ahmed"
// var userName = "ahmed Menisy"
// var userName;
// userName = "Ahmed Bahmsy";
// console.log(userName);

// var userName = "ahmed Menisy"; //string
// var userAge = 30; //number
// var isAdmin = true; //boolian
// console.log(typeof isAdmin); // to know the varible type
// console.log(typeof (isAdmin)); // same as above to know the varible type
var userName = window.prompt("enter your name");
console.log(userName);
var num1 = Number(window.prompt("enter number 1"));
var num2 = Number(window.prompt("enter number 2"));
var result = num1 + num2;
console.log(result);

var userAge =8
if (userAge > 10) {
    console.log("hello user")
}if (userAge > 10) {
    console.log("hello user")
    } else {
        console.log("good by")
}




// good sample for else if 
var title = window.prompt("enter title");
if (title === "frontend"){
    console.log("learn html , CSS ");
}else if(title === "backend"){
    console.log("learn php , .net");
}else if(title === "android"){
    console.log("learn kotlen");
}else if(title === "ios"){
    console.log("learn swift");
}else{
    console.log("if you need output for not availble") ;
}

// good sample for switch

var fname = window.prompt("enter first name");

switch (fname) {
    case "amany":
        console.log("learn html , CSS");
        break;
    case "dina":
        console.log("learn kotlen");
        break;
    case "menna":
        console.log("learn swift");
        break;
    case "arwa":
        console.log("machine language");
        break;
    case "ziad":
        console.log("plystaion");
        break;
    default:
        console.log("ODOO");
        break;
}

// using switch for comparison

var userSalary = window.prompt("enter your salary");
switch(true){
    case userSalary> 2000:
    console.log("rich");
    break;
    case userSalary < 2000:
    console.log("poor");
    break;
}

var anyNumber = window.prompt("enter any number");
if (anyNumber % 3 ===0 && anyNumber % 4 ===0){
    console.log("bu2bal 3la 3 , 4")
}else{
    console.log("Hamada");
}

// for loop sample

for (var i=5 ; i < 10 ; i+=1) {
    console.log("world");
}

// for loop sample

for (var i=5 ; i < 10 ; i++) {
    console.log("world");
}

// for loop sample

for (var i=5 ; i < 10 ; i++) {
    console.log(i);
}

// for loop sample

for (var i=5 ; i < 10 ; i+=2) {
    console.log(i);
}