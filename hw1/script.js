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

let counter = 0;
while(counter < 2) {
  let expenditure = prompt("Enter the required expenditure item for this month");
  let costs = +prompt("how much does it costs?");

  if(expenditure != "" && expenditure.length < 50 
    && costs != "" && !isNaN(costs)) {
      appData.expenses[expenditure] = costs;
      console.log("Done");
      counter++;
  } else {
    console.log("Continue");
    continue; 
  }        
}

appData.budgetPerDay = money/30;
alert("Your budget for a month - " + appData.budgetPerDay);

if(appData.budgetPerDay < 100) {
  console.log("Fuck! Are you still alive?" );
} else if(appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
  console.log("Wow! You are cool bro!");
} else if(appData.budgetPerDay > 2000) {
  console.log("Godlevel! I want to have children from you!");
} else {
  console.log("something is wrong!");
}