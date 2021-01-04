// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = prompt("Please enter a number ?",0);
if(num % 2 == 0) {
  alert("number is even");

}
else {
  alert("number is odd");
}
// using turnary operator
(num % 2 == 0)? alert("number is even") : alert("number is odd");

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = prompt("Please enter first number",0);
let num2 = prompt("Please enter second number",0);
if(num1 > num2) {
  alert(`max value is num1 : ${num1}`);
}
else {
  alert(`max value is num2 : ${num2}`);
}


// 3. Convert the above code using`?` terniary operator
(num1 > num2)? alert(`max value is num1 : ${num1}`) : alert(`max value is num2 : ${num2}`);


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt("Please enter the house name", "stark or lannister");
if(houseName == "stark") {
  alert("Winter is coming");
}
else if(houseName == "lannister") {
  alert("A lannister always pays his debt");
}
else {
  alert("All men must die");
}


// 5. Convert the above code using`?` terniary operator

(houseName == "stark")? alert("Winter is coming") :
(houseName == "lannister")?  alert("A lannister always pays his debt") : alert("All men must die"); 

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let monthNumber = +prompt("please enter a month number", "1 - 12");
switch(monthNumber) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12 : alert("31 days in a month");
            break;
  case 2: alert("28 days in a month");
          break;
  case 4: 
  case 6:
  case 9:
  case 11: alert("30 days in a month");
            break;

}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = +prompt("enter a salary");
switch(true) {
  case (salary <= 20000) : alert(`salary <= 20000 , tax is 10 %`);
  break;
  case (salary <= 40000) : alert("salary <= 40000, tax is 20%");
  break;
  case (salary > 50000) : alert("salary <= 50000, tax is 30%");
  break;
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = +prompt("enter your marks");
if(marks > 100) {
  alert("Marks can't be greater than 100");
}
else if(marks > 80 && marks <= 100) {
  alert("Grade A");
}
else if(marks > 50 && marks < 80) {
  alert("Grade B");
}
else if(marks > 30 && marks < 50) {
  alert("Grade is C");
}
else {
  alert("Grade D");
}

// using switch
switch(true) {
  case (marks > 100) :   alert("Marks can't be greater than 100");
  break;
  case (marks > 80 && marks < 100) :   alert("Grade A");
  break;
  case (marks > 50 && marks < 80) :   alert("Grade B");
  break;
  case (marks > 30 && marks < 50) :   alert("Grade C");
  break;
  default :   alert("Grade D");
  break;

}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weatherCondition = prompt("What is the weather like outside?");

if(weatherCondition == "sunny") {
  alert("wear a T-shirt");
}
else if(weatherCondition == "rainy") {
  alert("Don\'t forget to take your ranicoat");
}
else if(weatherCondition == "hot") {
  alert("Get a hanky");
}
else if(weatherCondition == "freezing") {
  alert("Get your sweater on");
}
else {
  alert("not a valid input");
}

// switch
switch (weatherCondition) {
  case "sunny" :   alert("wear a T-shirt");
  break;
  case "rainy" :   alert("Don\'t forget to take your ranicoat");
  break;
  case "hot" :   alert("Get a hanky");
  break;
  case "freezing" :   alert("Get your sweater on");
  break;
  default: alert("not a valid input");
  break;
}
