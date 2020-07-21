//                  //CHAPTER:1

// //task#1                     
// var a=prompt("Enter your name: ");
// alert("Hello " +a+" !");

// // task 2
// var a= alert("Error! Please enter a valid password", "Javascript Alert")


// //task#3
// var a="Welcome to JS land...";
// var b="Happy Coding!";
// alert(a+"\n"+b);


// // task 4
// var a= alert("Welcome to JS land....",  "Javascript Alert")
// var b= alert("Happy Coding!",  "Javascript Alert")

// //task#5
// var task3="Hello...I can run JS through my web browser's console";
// console.log(alert(task3));

// // task 6
// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// //     <script src="app.js"></script>
// // </head>
// // <body>
// //     <div>
// //         <label for="">Name </label>
// //         <input type="text">
// //         <button type="submit" onclick="myFunction()">Submit</button>
// // <script>
// // function myFunction() {
// //   alert("information saved");
// // }
// // </script>

// //     </div>

// // </body>
// // </html>


// //task#7
// //attempted in html file
// // <!DOCTYPE html>
// // <html lang="en">

// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Javascript Assignment</title>
// //     <!--Script element in head-->
// //     <script src="app.js"></script>
// // </head>

// // <body>
// //     <!--Script tag before page's html-->
// //     <script>
// //         function f2(){
// //             alert("Go back!");
// //         }
// //     </script>
// //     <h1>Task#7(Chap1)</h1>
// //     <div>
// //         <label for="">Name </label>
// //         <input type="text">
// //         <button type="submit" onclick="myFunction()">Submit</button>
// //         <button onclick="f2()">Back</button>
// //         <button onclick="f3()">Retry</button>
// //         <!--Script tag inside page's html -->
// //         <script>
// //             function myFunction() {
// //                 alert("information saved");
// //             }
// //         </script>
// //     </div>
// //     <!--Using script tag after the page's HTML-->
// //     <script>
// //         function f3(){
// //             alert("Try again!");
// //         }
// //     </script>
// // </body>
// // </html>


//                       //CHAPTER:2
// //task#1
// var username;

// // task 2
// // var myName = "Unaiza Afridi";


// //task#3
// //(a)
// var message;
// //(b)
// message= "Hello World";
// //(c)
// alert(message);

// // task 4
// var a = alert("Roohana Ashraf");
// var b = alert("20 yeras old");
// var c = alert("Certified Mobile Application Development");

// //task#5
// var pizza="PIZZA \nPIZZ \nPIZ  \nPI \nP";
// alert(pizza);

// // task 6
// // var email = "unaizaafrid123@gmail.com";
// // alert("My email address is " + email)


// //task#7
// var book="A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+book);

// // task 8
// // document.write("Yah! I can write HTML content through Javascript");


// //task#9
// var task9="-----";
// alert(task9);
// document.write("<h1>Task#9</h1>");
// document.write(task9 +"<br>");


//                       //CHAPTER:3

// //task#1
// var age=19;
// alert("I am "+age+" years old");

// // task 2
// // var visit = 14;
// // alert(" You have visited this site "+ visit+ " times")


// //task#3
// document.write("<h1>Task#3</h1>");
// var birthYear=2000;
// document.write("My birth year is "+birthYear+"<br>"+
// "Data type of my declared variable is number")

// // task 4
// // var visitors_name = "John Deo";
// // var product_title = "T-shirt(s)";
// // var quantity = 5;
// // document.write(visitors_name + " ordered " +quantity + product_title+ " on XYZ Clothing Store");



//                     //CHAPTER:4

// //task#1
// var a,b,c;

// //task 2

// // -----legal variables-------
// // var name = "roohana";
// // var $money = 12000;
// // var _address1 = "Karachi";
// // var lastName = "Khan";
// // var CITY = "lahore";
// //---- illegal variables-----
// // var !name = "roohana";
// // var #money = 12000;
// // var &address = "Karachi";
// // var last Name = "Khan";
// // var 1CITY = "peshawar";


// //task#3
// document.write("<h1>Task#3</h1>");
// //(a)
// document.write("<h1>Rules for naming JS variables </h1>");
// //(b)
// document.write("Variable names can only contain alphabets, numbers, $ and _ . For example : $my_1stVariable <br>");
// //(c)
// document.write("Variable must begin with a letter, $ or _ . For example:  $name, _name or name <br>");
// //(d)
// document.write("Variable names are case sensitive. <br>");
// //(e)
// document.write("Variable names should not be JS keywords.")



//                     //CHAPTER:5

// //task#1
// document.write("<h1>Task#1</h1>");
// var num1=+prompt("Enter first number: ");
// var num2=+prompt("Enter second number: ");
// var sum=num1+num2;
// document.write("Sum of "+num1+" and "+num2+" is "+sum);

// // task 2
// // var a= prompt("enter first number" );
// // var b = prompt("enter second number" );
// // var c = a-b;
// // document.write("subtracting " + b +" by "+ a +" is " + c)

// // var d = prompt("enter first number" );
// // var e = prompt("enter second number" );
// // var f = d*e;
// // document.write("multiplying " + d +" by "+ e +" is " + c)

// // var g= prompt("enter first number" );
// // var h = prompt("enter second number" );
// // var i = g/h;
// // document.write("dividing " + g +" by "+ h +" is " + c)

// // var j= prompt("enter first number" );
// // var k = prompt("enter second number" );
// // var l = j%k;
// // document.write("remainder after dividing " + j +" by "+ k +" is " + c)



// //task#3
// document.write("<h1>Task#3</h1>");
// var number;
// document.write("Value after variable declaration is : "+number);
// number=5;
// document.write("<br>Initial value : "+number);
// number=++number;
// document.write("<br>Value after increment is : "+number);
// number=number+7;
// document.write("<br>Value after addition is : "+number);
// number=--number;
// document.write("<br>Value after decrement is : "+number);
// var remainder=number%3;
// document.write("<br>The remainder is : "+remainder);


// // task 4
// // var ticketprice = 600;
// // var numOfTickets = prompt("enter number of tickets");
// // document.write("total cost of buying "+ numOfTickets+ " to a movie is " + 600*numOfTickets +"PKR");


// //task#5
// document.write("<h1>Task#5</h1>");
// var table=+prompt("Enter table of : ");
// document.write("Table of "+table+":<br><br>");
// for(var i=1;i<=10;i++){
//     document.write(table+"*"+i+"  = "+table*i+"<br>");
// }

// // task 6
// // var celTemp= prompt("enter temperatute in celcius");
// // var fah = (celTemp * 9/5) + 32;
// // var fahTemp = prompt("enter temperatute in fahrenheit");
// // var cel = (fahTemp -32)* 5/9;
// // document.write(celTemp+ " C is " + fah+ " F <br>" );
// // document.write(fahTemp+ " F is " + cel+ " F" );


// //task#7
// document.write("<h1>Task#7</h1>");
// document.write("<h2>Shopping Cart </h2> <br>");
// var price1 = 650;
// var price2 = 100;
// var quantity1 = +prompt("Enter quantity of item1 : ");
// var quantity2 = +prompt("Enter quantity of item2 : ");
// var shippingCharges = 100;
// document.write("Price of item 1 is " + price1 + "<br>Quantity of item 1 is " + quantity1 + "<br>Price of item 2 is " + price2 + "<br>Quantity of item 2 is " + quantity2 + "<br>Shipping Charges " + shippingCharges + "<br><br>");
// var totalCost=(price1*quantity1)+(price2*quantity2)+shippingCharges;
// document.write("Total cost of your order is "+totalCost);

// // // task 8
// // var totalMarks = prompt("enter total marks");
// // var marksobtain = prompt(" enter marks obtain");
// // document.write("Total Marks: "+totalMarks +"<br>");
// // document.write("Marks Obtained: "+marksobtain+"<br>");
// // document.write("Percentage: "+ (marksobtain*100)/totalMarks+"%" )



// //task#9
// document.write("<h1>Task#9</h1>");
// document.write("<h2>Currency in PKR </h2>");
// var dollars=10;
// var riyals=25;
// var currencyInPKR=(dollars*104.80)+(riyals*28);
// document.write("Total currency In PKR : "+currencyInPKR);

// // task 10 
// // var num= 5;
// // var exp = ((num+5)*10)/2;
// // document.write(" the answer is "+exp)



// //task#11
// document.write("<h1>Task#11</h1>");
// document.write("<h2>Age Calculator </h2>");
// var currentYear=+prompt("Enter current year : ");
// var birthYear=+prompt("Enter your birth year : ");
// var age=currentYear-birthYear;
// document.write("Current Year : "+currentYear);
// document.write("<br>Birth Year : "+birthYear);
// document.write("<br>You are either "+age+" or "+ (age-1)+" years old.");

// // task 12
// // var radius = prompt("enter the radius of a circle");
// // var pi = 3.142;
// // document.write(" The Radius is: " + radius+ "<br>");
// //  document.write("The circumference is: "+ 2*pi*radius+"<br>");
// //  document.write("The area is: "+pi*radius*radius+"<br>");



// //task#13
// document.write("<h1>Task#13</h1>");
// document.write("<h2>The Lifetime Supply Calculator: </h2>");
// var fvtsnack = prompt("Enter your favourite  Snack : ");
// var currentAge = +prompt("Enter your current Age : ");
// var maxAge = +prompt("Estimated Maximum Age : ");
// var amount = +prompt("Estimated amount of snacks per day(as a number) : ");
// var calculatedValue = (maxAge - currentAge) * amount;
// document.write("Favourite Snack : " + fvtsnack + "<br>Current Age : " + currentAge + "<br>Estimated Maximum Age : " + maxAge + "<br>Amount of snacks per day : " +amount);
// document.write("<br>You will need "+calculatedValue+" "+fvtsnack+" to last you until the ripe old age of "+maxAge);


//                      //CHAPTER:6-9

// //task#1
// document.write("<h1>Task#1</h1>");
// document.write("<h4>Result:</h4>");
// var a=+prompt("Enter the value of a : ");
// document.write("The value of a is : "+a+"<br><br>------------------------------------<br><br>");
// document.write("The value of ++a is : "+ (++a));
// document.write("<br>Now the value of a is : " +a);
// document.write("<br><br>The value of a++ is : "+(a++));
// document.write("<br>Now the value of a is : " +a);
// document.write("<br><br>The value of --a is : "+(--a));
// document.write("<br>Now the value of a is : " +a);
// document.write("<br><br>The value of a-- is : "+(a--));
// document.write("<br>Now the value of a is : " +a);

// // task 2
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--; 
// // document.write("a is "+a+ "<br>");
// // document.write("b is "+b+ "<br>");
// // document.write("result is "+result);
// // --a;  (its pre-decrement so a will decrease by "1". As a was "2" it becomes "1" now. )
// // --a - --b; (in this step as b is pre-decrement, it will have a decrement of "1" so now it becomes "0". )
// // --a - --b + ++b; (b will have a post-increment in this step and it becomes "1" from "0" in the last step. )
// // --a - --b + ++b + b--; (b is having a post-decrement in this step so it remains same i.e "1" and it there would be any other term then it would have a decrement in its value. )



// //task#3
// document.write("<h1>Task#3</h1>");
// var name=prompt("Enter your name : ");
// alert("Hello "+name+"!");
// document.write("<h3>Hello "+name+"!</h3>");


// //task#5
// document.write("<h1>Task#5</h1>");
// var table = +prompt("Enter table of : ");
// if (table !=0) {
//     document.write("Table of " + table + ":<br><br>");
//     for (var i = 1; i <= 10; i++) {
//         document.write(table + "*" + i + "  = " + table * i + "<br>");
//     }
// }
// else {
//     document.write("Table of 5 " + ":<br><br>");
//     for (var i = 1; i <= 10; i++) {
//         document.write(5 + "*" + i + "  = " + 5 * i + "<br>");
//     }
// }


// // task 6
// var sub1 = prompt("1)enter the subject name");
// var marks1 = prompt("marks of first subject");
// var sub2 = prompt("2)enter the subject name");
// var marks2 = prompt("marks of second subject");
// var sub3 = prompt("3)enter the subject name");



//                      //CHAPTER: 9-11

// //task#1
// var cityName=prompt("Enter city name : ");
// if(cityName==="Karachi" || cityName==="karachi"){
//     alert("Welcome to city of lights");
// }

// //task#2
// var gender=prompt("Enter your Gender (male/female) : ");
// if(gender==="male"){
//     alert("Good Morning Sir.");
// }
// else if(gender==="female"){
//     alert("Good Morning Ma'am.");
// }

// //task#3
// var signalColor=prompt("Enter Color of road traffic signal ( red/green/yellow ): ");
// signalColor=signalColor.toLowerCase();
// if(signalColor==="red"){
//     alert("Must Stop");
// }
// else if(signalColor==="yellow"){
//     alert("Ready to move");
// }
// else if(signalColor==="green"){
//     alert("Move now");
// }

// //task#4
// var fuel=prompt("Input remaining fuel in car (in litres) : ");
// if(fuel<0.25){
//     alert("Please refill the fuel in your car ");
// }


// //task#5
// document.write("<h1>Task#5</h1>");
// //(a)
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// //(b)
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// //(c)
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// //(d) 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// //(e)
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// //(f)
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// document.write("(a) Alert displayed <br>(b) Alert not displayed <br>(c) Alert displayed <br>(d) Alert displayed <br>(e) Alert displayed <br>(f) Alert displayed <br>");

// //task#6
// document.write("<h1>Task#6</h1>");
// document.write("<h3>Marks Sheet : </h3> <br>");
// var marksobtained=+prompt("Enter marke obtained in three subjects : ");
// var totalMarks=+prompt("Enter total marks : ");
// var percentage=(marksobtained/totalMarks)*100;
// if(percentage>=80){
//     var grade="A-one";
//     var remarks="Excellent!";
// }
// else if(percentage>=70){
//     var grade="A";
//     var remarks="Good";
// }
// else if(percentage>=60){
//     var grade="B";
//     var remarks="You need to improve";
// }
// else if(percentage<60){
//     var grade="Fail";
//     var remarks="Sorry";
// }
// document.write("Total Marks : "+totalMarks);
// document.write("<br>Marks Obtained : "+marksobtained);
// document.write("<br>Percentage : "+percentage+"%");
// document.write("<br>Grade : "+grade);
// document.write("<br>Remarks : "+remarks);


// //task#7
// var secretNum=6;
// var guess=+prompt("Guess the secret number (in range of 1-10) : ");
// if(guess===secretNum){
//     alert("Bingo! Correct answer");
// }
// else if(guess+1===secretNum){
//     alert("Close enough to the correct answer");
// }

// //task#8
// document.write("<h1>Task#8</h1>");
// var number=+prompt("Enter a number  : ");
// document.write("Input Number : "+number);
// if(number%3==0){
//     document.write("<br>--------------------------------<br>Number "+number+" is divisible by 3");
// }

// //task#9
// document.write("<h1>Task#9</h1>");
// var a=+prompt("Enter a number :");
// if(a%2==0){
//     document.write("Entered number is an Even Number.");
// }
// else{
//     document.write("Entered number is an Odd Number.");
// }

// //task#10
// document.write("<h1>Task#10</h1>");
// var temp=+prompt("Enter temperature  : ");
// document.write("Input temperature  : "+temp+"<br>");
// if(temp>40){
//     document.write("It is too hot outside.");
// }
// else if(temp>30){
//     document.write("The Weather today is Normal.");
// }
// else if(temp>20){
//     document.write("Today’s Weather is cool.");
// }
// else if(temp>10){
//     document.write("OMG! Today’s weather is so Cool.");
// }
// else{
//     document.write("Invalid temperature input!");
// }


// //task#11
// var firstNum=prompt("Enter First number : ");
// var secondNum=prompt("Enter Second number : ");
// var operation=prompt("Which operation would you like to perform? ( + , - , * , / , % ) : ");
// if(operation==="+"){
//     alert(firstNum+operation+secondNum+" = "+ ((+firstNum)+(+secondNum)))
// }
// else if(operation==="-"){
//     alert(firstNum+operation+secondNum+" = "+ (firstNum-secondNum))
// }
// else if(operation==="*"){
//     alert(firstNum+operation+secondNum+" = "+ (firstNum*secondNum))
// }
// else if(operation==="/"){
//     alert(firstNum+operation+secondNum+" = "+ (firstNum/secondNum))
// }
// else if(operation==="%"){
//     alert(firstNum+operation+secondNum+" = "+ (firstNum/secondNum)*100 +"%")
// }
// else{
//     alert("Invalid opeartion!")
// }


//                     //CHAPTER: 12-13

// //task#1
// document.write("<h1>Task#1</h1>");
// var char=prompt("Enter a character ( number or string ): ");
// var index=0;
// document.write("Entered Character : "+char+"<br>");
// document.write("-------------------------------<br>");
// if(Number(char)){
//     document.write("The given input is a Number.");
// }
// else if(char.charCodeAt(index)>=65 && char.charCodeAt(index)<=90){
//     document.write("The given input is an Uppercase letter.");
// }
// else if(char.charCodeAt(index)>=97 && char.charCodeAt(index)<=122){
//     document.write("The given input is a Lowercase letter.");
// }

// //task#2
// document.write("<h1>Task#2</h1>");
// var i1=+prompt("Enter first integer: ");
// var i2=+prompt("Enter second integer: ");
// document.write("First integer  : "+i1);
// document.write("<br>Second integer : "+i2+"<br>-------------------------<br>");
// if(i1===i2){
//     document.write("Two integers are equal.");
// }
// else{
//     if(i1>i2){
//         document.write("Larger integer is : "+i1);
//     }
//     else{
//         document.write("Larger integer is : "+i2);
//     }
// }

// //task#3
// document.write("<h1>Task#3</h1>");
// var number=+prompt("Enter a number : ");
// document.write("Input number : "+number+"<br>-----------------------<br>");
// if(number==0){
//     document.write("Number is Zero.");
// }
// else if(number>0){
//     document.write("Number is Positive.");
// }
// else if(number<0){
//     document.write("Number is Negative.");
// }

// //task#4
// document.write("<h1>Task#4</h1>");
// var char=prompt("Enter a character (i.e: string of length 1) : ");
// document.write("Entered character  : "+char+"<br>-----------------------------<br>")
// if(char==="a" ||char==="e" ||char==="i" ||char==="o" || char==="u" ||char==="A" ||char==="E" ||char==="I" ||char==="O" ||char==="U"){
//     document.write("IS A VOWEL!")
// }
// else{
//     document.write("ISN'T A VOWEL!");
// }

// //task#5
// //(a)
// var correctPw="abcdef";
// //(b)
// var pw=prompt("Enter your password : ");
// //(c)
// if(pw.length==0){
//     alert("Please enter your Password");
// }
// else{
//     if(pw===correctPw){
//         alert("Correct! The password you entered matches the original password");
//     }
//     else{
//         alert("Incorrect password");
//     }
// }


// //task#6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }


// //task#7
// document.write("<h1>Task#7</h1>");
// var time=+prompt("Enter time in 24-hours clock format(e.g: 1900) : ");
// document.write("Time input by user  : "+ time+"<br>");
// if(time>=0000 && time<1200){
//     document.write("Good morning!");
// }
// else if(time>=1200 && time<1700){
//     document.write("Good afternoon!");
// }
// else if(time>=1700 && time<2100){
//     document.write("Good evening!");
// }
// else if(time>=2100 && time<=2359){
//     document.write("Good night!");
// }
// else{
//     document.write("Invalid time input!");
// }



//                 //CHAPTER: 14-16

// //task#1
// var students=[];

// //task#2
// var students=new Array();

// //task#3
// var students=["Ali","Areesha","Roohana"];

// //task#4
// var num=[1,3,5,6,2,8,9];

// //task#5
// var boolArray=[true,false,false,true,true,true];

// //task#6
// var mixedArray=[1,"Roohana",4,true];

// //task#7
// document.write("<h1>Task#7</h1>");
// var qualifications=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.","PhD"];
// document.write("<h3>Qualifications: </h3>");
// for(var i=0;i<qualifications.length;i++){
//     document.write((i+1)+") "+qualifications[i]+"<br>");
// }

// //task#8
// document.write("<h1>Task#8</h1>");
// var students=["Michael","John","Tony"];
// var scores=[320,230,480];
// for(var i=0;i<students.length;i++){
//     var percentage=(scores[i]/500)*100;
//     document.write("Score of "+students[i]+" is "+scores[i]+". Percentage : "+percentage+"% <br>");
// }


// //task#9
// document.write("<h1>Task#9</h1>");
// document.write("Output is shown in console")
// var colors = ["red", "green", "blue", "black", "white"];
// console.log("Initial Array: ")
// for (var i = 0; i < colors.length; i++) {
//     console.log((i + 1) + ") " + colors[i] + "\n");
// }
// var addColor1=prompt("Which color do you want to add to the beginning of array? : ");
// colors.unshift(addColor1);
// console.log("(a): ");
// console.log(colors);
// var addColor2=prompt("Which color do you want to add to the end of the array? : ");
// colors.push(addColor2);
// console.log("(b):");
// console.log(colors);
// colors.unshift("indigo","violet");
// console.log("(c):");
// console.log(colors);
// colors.shift();
// console.log("(d):");
// console.log(colors);
// colors.pop();
// console.log("(e):");
// console.log(colors);
// var index=prompt("Enter the index at which you want to add color: ");
// var addColor3=prompt("Enter color name you want to add at that index :");
// colors.splice(index,0,addColor3);
// console.log("(f):");
// console.log(colors);
// var delcolour=prompt("Enter index at which you want to delete color : ");
// var no=prompt("How many colors do you want to delete?  : ");
// colors.splice(delcolour,no);
// console.log("(g):");
// console.log(colors);


// //task#10
// document.write("<h1>Task#10</h1>");
// var scores=[320,230,480,120];
// document.write("Scores of Students : "+scores+"<br>");
// var sorted=scores.sort();
// document.write("Ordered Scores Of Students : "+sorted);


// //task#11
// document.write("<h1>Task#11</h1>");
// var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("<h3>Cities list:</h3>");
// document.write(cities);
// document.write("<br><h3>Selected cities List: </h3>");
// var copy=cities.slice(2,4);
// document.write(copy);

// //task#12
// document.write("<h1>Task#12</h1>");
// var arr=["This","is","my","cat"];
// var joined=arr.join(" ");
// document.write("<h3>Array: </h3>"+arr+"<br>");
// document.write("<h3>String : </h3>"+joined);


// //task#13
// document.write("<h1>Task#13</h1>");
// var devices=[];
// devices[0]="keyboard";
// devices[1]="mouse";
// devices[2]="printer";
// devices[3]="monitor";
// document.write("<h3>Devices : </h3>");
// document.write(devices +"<br>");
// for(var i=0;i<devices.length;i++){
//     document.write("<h3>Out:</h3>"+devices[i]);
// }

// //task#14
// document.write("<h1>Task#14</h1>");
// var devices=[];
// devices[0]="keyboard";
// devices[1]="mouse";
// devices[2]="printer";
// devices[3]="monitor";
// document.write("<h3>Devices : </h3>");
// document.write(devices +"<br>");
// for(var i=devices.length-1;i>=0;i--){
//     document.write("<h3>Out:</h3>"+devices[i]);
// }


// //task#15
// document.write("<h1>Task#15</h1>");
// var phone=["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];
// document.write("<h3>Phone Manufacturers: </h3>");
// for(var i=0;i<phone.length;i++){
//     document.write(i+1 + ") "+phone[i]+"<br>");
// }


//                           //CHAPTER: 17-20

// //task#1
// var Arr=[];
// var Arr=[[1,2],[3,4],[5,6]];


// //task#2
// document.write("<h1>Task#2</h1>");
// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<=3;j++){
//         document.write(arr[i][j]+" ");
//     }
//     document.write("<br>");
// }


// //task#3
// document.write("<h1>Task#3</h1>");
// for(var i=1;i<=10;i++){
//     document.write(i+"<br>");
// }


// //task#4
// document.write("<h1>Task#4</h1>");
// var number=+prompt("Enter a number to show its multiplication table : ");
// var len=+prompt("Enter length multiplication table : ");
// document.write("Multiplication table of : "+number +"<br>");
// document.write("Length : "+len+ "<br><br><br>");
// for(var i=1;i<=len;i++){
//     document.write(number+" * "+i+" = "+(number*i)+"<br>");
// }


// //task#5
// document.write("<h1>Task#5</h1>");
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>");
// }
// for(var j=0;j<fruits.length;j++){
//     document.write("<br>Element at index "+j+" is "+fruits[j]);
// }


// //task#7
// document.write("<h1>Task#7</h1>");
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery.What do you want to oroder sir/ma'am?");
// for (var i = 0; i < A.length; i++) {
//     if (A[i] === input) {
//         document.write(A[i] + " is <b>available</b> at index " + i + " in our bakery");
//         break;
//     } 
// } 
// if(A.includes(input)==false){
//     document.write("We are sorry." + input + " is <b>not available</b> in our bakery");
// } 

// //task#8
// document.write("<h1>Task#8</h1>");
// var A = [24, 53, 78, 91, 12];
// var large=A[0];
// document.write("<h3>Array Items: </h3>"+A+"<br>");
// for(var i=1;i<A.length;i++){
//     if(A[i]>large){
//         large=A[i];
//     }
// }
// document.write("<h3>The largest number is : </h3>"+large);


// //task#9
// document.write("<h1>Task#9</h1>");
// var A = [24, 53, 78, 91, 12];
// var small=A[0];
// document.write("<h3>Array Items: </h3>"+A+"<br>");
// for(var i=1;i<A.length;i++){
//     if(A[i]<small){
//         small=A[i];
//     }
// }
// document.write("<h3>The smallest number is : </h3>"+small);

// //task#10
// document.write("<h1>Task#10</h1>");
// document.write("<h3>Multiples of 5: </h3>");
// for(var i=1;i<=100;i++){
//     if(i%5==0){
//         document.write(i+" , ");
//     }
// }


// //CHAPTER 21-25


// // TASK 1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello" + " " + fullName);


// // TASK 2
// var Model = prompt("Enter your favourite mobile phone model:");
// var length1 = Model.length;
// alert("Length of string:" + " " + length1);

// // TASK 3
// var string1 = "Pakistani";
// alert(" String : " + " " + string1);
// var index1 = string1.indexOf("n") ;
// alert("Index of 'n' : " + " " + index1);

// //TASK 4
// var string2 = "Hello World";
// alert("String : " + " " + string2 );
// var index2 = string2.lastIndexOf("l");
// alert("Last Index of 'l' : " + " " + index2);

// //TASK 5
// var string3 = "Pakistani";
// alert("String : " + " " + string3);
// var char1 = string3.charAt(3);
// alert("Character at Index 3 : " + " " + char1);

// //TASK 6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(lastName);
// alert("Hello" + " " + fullName);

// //TASK 7
// var city = "Hyderabad";
// alert("City : " + " " + city);
// var replaced = city.replace("Hyder", "Islam");
// alert("After replacement : " + " " + replaced);

// //TASK 8
// var message = "Ali and Sami are bestfriends. They play Cricket and football together.";
// alert("Real Message :" + " " + message);
// var newmsg = message.replace(/and/g, "&")
// alert("After required changes : " + " " + newmsg);

// //TASK 9
// var value = "472";
// alert("Value " + " " + value);
// var type1 = typeof(value);
// alert("Type : " + " " + type1);
// var value2 = parseInt(value);
// alert("Value " + " " + value2);
// var type2 = typeof(value2);
// alert("Type : " + " " + type2);

// //TASK 10
// var input1 = prompt("User Input:");
// var output1 = input1.toUpperCase();
// alert("Upper Case : " + " " + output1);

// //TASK 11
// var input2 = prompt("User Input:");
// var firstchar = input2.slice(0,1);
// var otherchar = input2.slice(1);
// firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toLowerCase();
// var output2 = firstchar + otherchar;
// alert("Title Case : " + " " + output2);

// //TASk 12
// var num = 35.36;
// alert("Number : " + " " + num);
// var str = num.toString();
// var result = str.replace(".","");
// alert("Result :" + " " + result);

// //TASK 13
// var username = prompt("Enter your username: ");
// for( var i=0;i<=username.length;i++)
// {
//     if (username[i]==="!")
//     {
//         alert("Please Enter a valid username!");
//     }
//     if (username[i]===",")
//     {
//         alert("Please Enter a valid username!");
//     }
//     if (username[i]===".")
//     {
//         alert("Please Enter a valid username!");
//     }
//     if (username[i]==="@")
//     {
//         alert("Please Enter a valid username!");
//     }
// }

// //TASK 14
// var bakery = ["cake","apple pie","cookie","chips","patties"];
// var item = prompt("Welcome to ABC bakery, What do you want to order sir/ma'am?:");
// var item1 = item.toLowerCase();
// for(var i=0; i<=bakery.length; i++)
// {
//     if(item1 === bakery[i])
//     {
//       alert( item1 + " " +"is available at index" + " "+ i + " " +"in our Bakery");
//       break;
//     }
//     else{
//         alert("We are sorry " + " "+ item1 + " "+ "is not available in our Bakery.");
//         break;
//     }
// }

// //TASK 15
// var password = prompt("Enter password:");
// if (password.length <6){
//     alert("The password must be atleast 6 characters long, Please enter a valid password");
// }
// if(password.charAt(0)==="0")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="1")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="2")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="3")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="4")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="5")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="6")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="7")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="8")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="9")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }

// //TASK 16
// var university = "University of Karachi";
// var result = university.split('');
// for( var i=0; i<=result.length-1;i++)
// {
//     document.write("<br>"+ result[i]);
// }

// //TASK 17
// var ip = prompt("Enter a word:");
// alert("User Input :" + " "+ ip);
// var result = ip.slice(-1);
// alert("Last character of input :" + " "+ result);

// //TASK 18
// var message = "The quick brown fox jumps over the lazy dog";
// alert("Text : " + " " + message);
// message = message.toLowerCase();
// var count =0;
// for (var i=0; i<=message.length ; i++){
//     if(message.slice(i,i+3)==="the"){
//         count += 1;
//     }
// }
// alert("There are " + " " + count + " " +"occurences of the word 'the'");





// //CHAPTER 26-30

// //TASK 1
// var no = prompt("Enter a positive integer:");
// alert("Number :"+ " "+ no);
// var round= Math.round(no);
// var floor = Math.floor(no);
// var ceiling = Math.ceil(no);
// alert("Round off value: " + " " + round);
// alert("Floor value: " + " " + floor);
// alert("Ceil value : " + " " + ceiling);

// //TASK 2
// var no = prompt("Enter a negative integer:");
// alert("Number :"+ " "+ no);
// var round= Math.round(no);
// var floor = Math.floor(no);
// var ceiling = Math.ceil(no);
// alert("Round off value: " + " " + round);
// alert("Floor value: " + " " + floor);
// alert("Ceil value : " + " " + ceiling);

// //TASK 3
// var no = prompt("Enter a number:");
// var absol = Math.abs(no);
// alert(" The absolute value of " + " " + no +" " + "is " + " " +absol);

// //TASK 4
// var dice = Math.random()*6;
// var ceil = Math.ceil(dice);
// alert("Random dice value: " + " " + ceil);

// //TASK 5
// var toss = Math.random()*2;
// var ans = Math.ceil(toss);
// if(ans===2)
// {
//     alert("Random coin value: Heads");
// }
// if(ans===1)
// {
//     alert("Random coin value: Tails");
// }

// //TASK 6
// var random = Math.random()*100;
// var numberr = Math.ceil(random);
// alert("Random number between 1 and 100: " + " " + numberr);

// //TASK 7
// var kg = prompt("Enter your weight in kilograms:");
// alert("The weight of user is: " + " " + kg + " " + "kilograms");

// //TASK 8
// var secret = Math.random()*10;
// var secretno = Math.ceil(secret);
// var numb = prompt ("Enter a number between 1 and 10:");
// if (numb == secretno){
//     alert("Congratulations! You guessed it right! ")
// }
// else{
//     alert("Try Again!");
// }




// //CHAPTER#31-34

// //TASK 1
// var a = new Date();
// document.write(a);

// //TASK 2
// var monthNames = ["Jannuary" , "February", "March", "April", "May" , "June", "July", "August", "September", "October" ,"November","December"];
// var now = new Date();
// var month = now.getMonth();
// var name = monthNames[month];
// alert("Current Month : " + " " + name); 

// //TASK 3
// var dayNames = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var theDay= now.getDay();
// var named = dayNames[theDay];
// alert("Today is " + " " + named);

// //TASK 4
// var dayNames = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var theDay= now.getDay();
// var named = dayNames[theDay];
// alert("Today is " + " " + named);
// if(named == "Sat")
// {
//     alert("It's fun day");
// }
// if(named == "Sun")
// {
//     alert("It's fun day");
// }

// //TASK 5
// var now = new Date();
// var dayno = now.getDate();
// if(dayno < 16)
// {
// alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }

// //TASK 6
// var now = new Date();
// var milisec = now.getTime();
// var minutes = milisec/(1000*60);
// alert("Current Date: " + " " + now);
// alert("Elapsed miliseconds since January 1,1970: " + " " + milisec);
// alert("Elapsed minutes since January 1, 1970 : " + " " + minutes); 

// //TASK 7
// var now = new Date();
// var hour = now.getHours();
// if(hour <= 12)
// {
//     alert("It's A.M.");
// }
// else{
//     alert("It's P.M.");
// }

// //TASK 8
// var laterDate = new Date("Dec 31,2020");
// alert("Later Date: " + " " + laterDate);

// //TASK 9
// var ramzan = new Date("Mar 23,2020");
// var now = new Date();
// var ramzandays = ramzan.getTime();
// var nowdays = now.getTime();
// var dayspass = nowdays-ramzandays;
// va r daysno = dayspass/(1000*60*60*24);
// var daysno = Math.floor(daysno);
// alert(daysno + " " + "days have passed since 1st Ramzan,2020");

// //TASK 10
// var refDate = new Date();
// alert("On Reference Date:" + " " + refDate);
// var begin = new Date("Jan 1,2020");
// var begmil = begin.getTime();
// var begsec = begmil/(1000);
// alert(begsec + " " + "seconds had passed since beginning of 2020"); 

// //TASK 11
// var now = new Date();
// alert("Current Date : " + " " + now);
// var result = new Date(now.getTime() - (1000*60*60));
// alert("1 hour ago, It was :" + " " + result);

// //TASK 12
// var now = new Date();
// alert("Current Date : " + " " + now);
// var result = new Date(now.getTime() - (1000*60*60*24*30*12*100));
// alert("100 years back, It was :" + " " + result);

// //TASK 13
// va r agein = prompt("Enter your age : ");
// prompt ("Your age is : " + " " + agein);
// var now = new Date();
// var curyear = now.getFullYear();
// var result = curyear - agein;
// prompt("Your Birth Year is :" + " " + result);

// //TASK 14
// document.write("K ELECTRIC BILL " + "<br>"+ "<br>");
// document.write("Customer Name: ABC Customer" + "<br>");
// document.write("Month : February" + "<br>");
// document.write("Number of Units: 410" + "<br>");
// document.write("Charges per unit: 16" + "<br>" + "<br>" + "<br>");
// var amount= 410*16;
// var gross = amount+350;
// document.write("Net Amount payable (within due date) :" + amount + "<br>");
// document.write("Late Payable surcharge: 350" + "<br>");
// document.write("Gross Amount Payable (after due date) :" + gross + "<br>");





// CHAPTER 35-38

// //TASK 1
// function dateTime(){
//     var now = new Date();
//     document.write(now);
// }
// dateTime();

// //TASK 2
// function greetuser(fname, lname)
// {
//     alert (" Hello!," + " " + fname + " " + lname);
// }
// greetuser("Ariba" , "Asif");

// //TASK 3
// function add(num1 , num2)
// {
//     return num1+num2;
// }
// alert(add(2,2));

// //TASK 4
// function calculation(num1 , num2 , op){
//     if(op=="+"){
//         return num1+num2;
//     }
//     else if(op=="-"){
//         return num1-num2;
//     }
//     else if(op=="*"){
//         return num1*num2;
//     }
//     else if(op=="/"){
//         return num1/num2;
//     }
//     else{
//         return "Please enter a valid operator"
//     }
// }
// var no1=+prompt("Enter first number:");
// var no2=+prompt("Enter second number:");
// var ope=prompt("Enter the operator:");
// alert(calculation(no1,no2,ope));

// //TASK 5
// function square (num)
// {
//     return num*num;
// }
// alert(square(5));

// //TASK 6
// function factorial(num){
//     var count =1;
//     for(var i=1; i<=num; i++){
//      count = count *i;
//     }
//     return count;
// }
// var num= prompt("Enter a number to calculate its factorial:");
// alert(factorial(num));

// //TASK 7
// function counting(start,end){
//     for(var i=start; i<=end; i++){
//        document.write(i + "<br>");
//     }
// }
// sta=+ prompt("Enter a number to start counting from:");
// en= +prompt("Enter a number to stop the counting at:");
// counting(sta,en);

// //TASK 8
// function calculatesquare(num)
// {
//     return num*num;
// }
// function calculatehypotenuse(base, perp){
//     return calculatesquare(base)+calculatesquare(perp);
// }
// var baseip = +prompt("Enter the value of base of triangle:");
// var perpip = +prompt("Enter the value of perpendicular of traingle:");
// var hyp = calculatehypotenuse(baseip,perpip);
// alert("The value of hypotenuse of this triangle is: " + " " + hyp);

// //TASK 9
// function calcarea(width,height)
// {
//     return width*height;
// }
// alert("The are of a triangle is :" + " " +calcarea(2,3));
// var wid= +prompt("Enter the width of triangle: ");
// var hei= +prompt("Enter the height of triangle: ");
// alert("The are of a triangle is :" + " " +calcarea(wid,hei));

// //TASK 10
// function palindromecheck(password)
// {
// var check ="";
// for( var i=password.length-1;i>=0;i--){
//     check +=password[i];
// }
// if (check==password)
// {
// alert(password+ " " + "is a palindrome word")
// }
// else{
//     alert(password + " "+ "is not a palindrome word");
// }
// }
// var pass = prompt("Enter your password:");
// palindromecheck(pass);

// //TASK 11
// function titleCase(str) {  
//     str = str.toLowerCase().split(' ');

//     for(var i = 0; i < str.length; i++){
//       str[i] = str[i].split('');
//       str[i][0] = str[i][0].toUpperCase(); 
//       str[i] = str[i].join('');
//     }
//     return str.join(' ');
//   }
// var string=prompt("Enter a string:");
// var result =titleCase(string);
// document.write(result);

// //TASK 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// var string= prompt("Enter any string:");
// var res= find_longest_word(string);
// document.write(res);

// //TASK 13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//   for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// var string= prompt("Enter a string:");
// var check = prompt("Enter a letter to check the occurences of:");
// document.write(char_count(string,check));


// //TASK 14
// function calcGeometry(radius) {
//     var circumference = Math.PI * 2*radius;
//     document.write("The circumference is " + circumference);
//     }
// function calcArea(radius){
//     var area = Math.PI * radius*radius;
//     document.write("The area is " + area);
// }
// calcArea(2);
// document.write("<br>");
// calcGeometry(2);





// //CHAPTER#38-42

// //Q#1:
// function power(a, b) {
//     var result = 1;
//     if (b == undefined)
//         b = 2;
//     for (var i = 1; i <= b; i++) {
//         result = result * a;
//     }
//     return result;
// }

// console.log(power(2, 4));

// //Q#2:
// // in html file

// //Q#3:
// function perimeter(side1, side2, side3) {
//     var s = (side1 + side2 + side3) / 2;
//     return s;
// }

// function area(s, side1, side2, side3) {
//     var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
//     return area;
// }
// s = perimeter(5, 6, 7);
// console.log(area(s, 5, 6, 7));

// //Q#4:
// function mainfn(m1, m2, m3) {
//     var sum = m1 + m2 + m3;
//     var avg = average(sum);
//     var p = percentage(sum);
//     return p;
// }
// function average(sum) {
//     var average = sum / 3;
//     return average;
// }
// function percentage(sum) {
//     var per = (sum / 300) * 100;
//     return per;
// }
// console.log(mainfn(60, 70, 90));

// //Q#5:
// var s = prompt("Enter string: ");
// var ch = prompt("enter character in string to find it's index: ");
// function findIndex(s, ch) {
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] === ch) {
//             return i;
//             break;
//         }
//         else if (s[i] != ch & i < s.length) {
//             continue;
//         }
//     }
//     return -1;
// }
// console.log(findIndex(s, ch));

// //Q#6:
// function disemvowel(str) {
//     let newString = " ";
//     if (str.length <= 25) {
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
//                 newString += str[i];
//             };
//         };
//         return newString;
//     }
//     else{
//         return "Too Long!!Please Enter string of max. 25 characters."
//     }

// };
// inputString = prompt("Enter a string to remove vowels(Max. 25 chars long): ")
// console.log(disemvowel(inputString));           

//TASK 8
// var dis=+prompt("Enter the distance between two cities (in km)");
// var meters= dis*1000;
// var feet= meters*3.28;
// var inches=feet*12;
// var cm= inches*30;
// alert("The distance in meters is " + meters + " meters");
// alert("The distance in feet is " + feet+" feet.");
// alert("The distance in inchess is " + inches+" inches.");
// alert("The distance in centimeters is " + cm+ " centimeters.");

//TASK 9
// var hours=+prompt("Enter the number of hours employee worked?");
// if(hours>40){
//     hours=hours-40;
//     hours=hours*12.0;
//     alert("The overtime pay of employee is "+ hours);
// }
// else{
//     alert("You have to work for more than 40 hours to get overtime pay.")
// }

//TASK 10
// var amount =+ prompt("Enter the amount to withdraw:");
// alert("You will have "+Math.floor(amount/100)+" hundred notes, "+Math.floor((amount%100)/50)+" fifty notes and "+Math.floor((amount%50)/10)+" ten notes.");


//CHAPTER 43 - 48
//TASK 1
// function Click()
// {
//     alert("You clicked the link");
// }

//TASK 2
// function phone(){
//     alert("Thanks for purchasing a phone from us.");
// }

//TASK 3
// function SomeDeleteRowFunction() {
//    var td = event.target.parentNode; 
//    var tr = td.parentNode; 
//    tr.parentNode.removeChild(tr);
// }

//TASK 4
// function neww(){
//     var pic1= document.getElementById("car");
//     pic1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLE8PDUfSWZ0-N3VuNf3xy9sToaahxSFSuNw&usqp=CAU";
// }
// function prev(){
//     var pic2=document.getElementById("car")
//     pic2.src="data:image/jpeg;base64,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";
// }

//TASK 5
// var clicks = 0;
// function clickie() {
//         clicks += 1;
//         document.getElementById("clickse").innerHTML = clicks;
//     };

//CHAPTER 53-57

// var modal=document.getElementById("modal")
//     var modalimg=document.getElementById("modal-img")
//     function zoom(i){
//       modal.classList.add(".modal-open")
//       modal.style.display="block"
//       modalimg.src=i.src
//      }
//     function onClosedImagModal(){
//       modal.classList.add(".modal-close")
// modal.classList.remove(".modal-open")
// setTimeout(()=>{ modal.style.display = "none"; }, 550)
//     }
// //QUESTION 2
//     var zn=document.getElementById("zoom-in")
//     var zo=document.getElementById("zoom-out")
//     var s=document.getElementById("set")
//     var para=document.getElementById("text-zoom")
   
//     zn.addEventListener("click",zoomin)
//     zo.addEventListener("click",zoomout)
// s.addEventListener("click",original)
//     var font=20
// para.style.fontSize=font+"px"
// function zoomin(){
// font+=10;
// para.style.fontSize=font+"px"

// }
// function zoomout(){
//     font-=10
// para.style.fontSize=font+"px"
// }
// function original(){
// para.style.fontSize="20px"
// }


//CHAPTER 58-67

//QUESTION 1
//TASK 1
// var n = document.getElementById("main-content")

// TASK 2
// for(var i=0 ;i<n.length ; i++){

//     document.write("<br/>" ,n[i].innerHTML)
// }

// TASK 3
// var classes = document.getElementsByClassName("render")
// for(var j=0 ;j<classes.length ; j++){

//     document.write("<br/>" ,classes[j].innerHTML)
// }
// document.write("<br/>")
// TASK 4

// var input = document.getElementById("first-name").value="Fareena"

// TASK 5

// var last_name = document.getElementById("last-name").value="Ehtesham"
// var email = document.getElementById("email").value="abc@yahoo.com"


// QUESTION 2
// TASK1 
// var form = document.getElementById("form-content").childNodes
// for(var i=0 ;i<form.length ; i++){
//     document.write("," + form[i].nodeType)
// }

// document.write("<br/>")

// TASK 2
// var lastName = document.getElementById("last-name")
// document.write("Nodetype of Last Name" , lastName.nodeType)

// for(var l=0 ; l<lastName.childNodes.length ;l++){
//     document.write("Nodetype of Child node of Last Name" ,lastName[l].nodeType)
// }


// document.write("<br/>")

// TASK 3
// var lastName = document.getElementById("last-name")

// document.write(lastName.nodeValue = "Update")


// document.write("<br/>")

// TASK 4
// var n = document.getElementById("main-content")

// document.write("First Child of main-content" , n.firstChild.nodeName,"<br/>")
// document.write("Last Child of main-content" , n.lastChild.nodeName)

// document.write("<br/>")

// TASK 5

// document.write("next sibling of last Name:" ,lastName.nextSibling.nodeName,"<br/>")
// document.write("previous sibling of last Name:" ,lastName.previousSibling.nodeName)

// document.write("<br/>")

// TASK 6
// var email = document.getElementById("email")
// document.write("parent node of email:" ,email.parentNode.nodeName,"<br/>")
// document.write("node type of email:", email.nodeType)