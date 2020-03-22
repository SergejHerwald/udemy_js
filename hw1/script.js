var money = +prompt("Your budget for a month?");
var time = prompt("Enter the date in the format YYYY-MM-DD");

var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false 
};

let expenditure1 = prompt("Enter the required expenditure item for this month");
let costs1 = +prompt("how much does it costs?");
appData.expenses[expenditure1] = costs1;

let expenditure2 = prompt("Enter the required expenditure item for this month");
let costs2 = +prompt("how much does it costs?");
appData.expenses[expenditure2] = costs2;

alert("Your budget for a month - " + money/30);